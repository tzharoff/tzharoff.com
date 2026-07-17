import { marked } from "marked";

export type Lesson = {
  slug: string;
  title: string;
  course: string;
  courseTitle: string;
  order: number;
  minutes: number;
  objective: string;
  vocabulary: string[];
  html: string;
};

export type Course = {
  slug: string;
  title: string;
  lessons: Lesson[];
};

const files = import.meta.glob("../content/lessons/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const tonyPoses = [
  "explaining",
  "thinking",
  "pointing-left",
  "pointing-right",
  "pointing-left-shocked",
  "pointing-right-angry",
  "excited",
  "skeptical",
  "confused",
  "frustrated",
  "panic",
  "laughing",
  "deadpan",
  "expert",
  "adjusting-glasses",
  "idea",
  "investigating",
  "annoyed",
  "gasp",
  "proud",
  "facepalm",
  "whisper",
  "notes",
  "graduate",
  "stop",
  "shush",
] as const;

export type TonyPose = (typeof tonyPoses)[number];

const defaultPoseCycle: TonyPose[] = ["explaining", "expert", "excited", "thinking"];

/**
 * Every blockquote becomes a "Tony's Frame" with a Tony pose portrait.
 * Authors pick one by starting the quote with `[pose: name]`; quotes
 * without a tag rotate through a default cycle.
 */
function addTonyToQuotes(html: string): string {
  let untagged = 0;
  return html.replace(
    /<blockquote>\s*<p>(?:\[pose:\s*([a-z-]+)\]\s*)?/g,
    (_match, tagged: string | undefined) => {
      const pose: TonyPose =
        tagged && (tonyPoses as readonly string[]).includes(tagged)
          ? (tagged as TonyPose)
          : defaultPoseCycle[untagged++ % defaultPoseCycle.length];
      return `<blockquote class="has-tony"><img class="tig-quote-tony" src="/tony/${pose}.png" alt="" /><p>`;
    },
  );
}

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return { meta, body: match[2] };
}

export const lessons: Lesson[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const { meta, body } = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title ?? slug,
      course: meta.course ?? "general",
      courseTitle: meta.courseTitle ?? "Lessons",
      order: Number(meta.order ?? 0),
      minutes: Number(meta.minutes ?? 10),
      objective: meta.objective ?? "",
      vocabulary: meta.vocabulary ? meta.vocabulary.split(",").map((v) => v.trim()) : [],
      html: addTonyToQuotes(marked.parse(body, { async: false })),
    };
  })
  .sort((a, b) => a.course.localeCompare(b.course) || a.order - b.order);

export const courses: Course[] = [...new Set(lessons.map((l) => l.course))].map((slug) => {
  const courseLessons = lessons.filter((l) => l.course === slug);
  return { slug, title: courseLessons[0].courseTitle, lessons: courseLessons };
});

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getNeighbors(lesson: Lesson): { prev?: Lesson; next?: Lesson } {
  const courseLessons = lessons.filter((l) => l.course === lesson.course);
  const i = courseLessons.findIndex((l) => l.slug === lesson.slug);
  return { prev: courseLessons[i - 1], next: courseLessons[i + 1] };
}
