import { ArrowRight, Captions, Download, GraduationCap, Play } from "lucide-react";
import type { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { teachingVideos, type TeachingVideo } from "../data/teachingVideos";

const media = "/media/teaching/";

function duration(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function pauseOtherVideos(event: SyntheticEvent<HTMLVideoElement>) {
  const current = event.currentTarget;
  current.closest("main")?.querySelectorAll("video").forEach((video) => {
    if (video !== current) video.pause();
  });
}

function TeachingFilm({ film, featured = false }: { film: TeachingVideo; featured?: boolean }) {
  return (
    <article id={film.slug} className={`panel scroll-mt-28 overflow-hidden ${featured ? "p-5 md:p-8" : "p-5 md:p-6"}`}>
      <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-oldgold">
        <Play size={14} aria-hidden="true" />
        <span>{featured ? "Start here" : "Teaching in practice"}</span>
        <span className="ml-auto whitespace-nowrap text-slate-400">{duration(film.duration)}</span>
      </div>
      <h2 className={`${featured ? "text-2xl md:text-3xl" : "text-xl"} font-semibold text-white`}>{film.title}</h2>
      <p className="mb-5 mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">{film.description}</p>
      <video
        className="aspect-video w-full rounded-lg border border-white/10 bg-black"
        controls
        playsInline
        preload="none"
        poster={`${media}${film.slug}.jpg`}
        aria-label={film.title}
        onPlay={pauseOtherVideos}
      >
        <source src={`${media}${film.slug}.mp4`} type="video/mp4" />
        <track kind="captions" src={`${media}${film.slug}.vtt`} srcLang="en" label="English (automatic)" />
        Your browser cannot play this video. <a href={`${media}${film.slug}.mp4`}>Download the edited video.</a>
      </video>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-300">
        <a href={`${media}${film.slug}.mp4`} download className="inline-flex items-center gap-2 hover:text-tealglow">
          <Download size={14} aria-hidden="true" /> Download video
        </a>
        <a href={`${media}${film.slug}.srt`} download className="inline-flex items-center gap-2 hover:text-tealglow">
          <Captions size={14} aria-hidden="true" /> Captions
        </a>
      </div>
      {film.credit && <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-relaxed text-slate-400">{film.credit}</p>}
    </article>
  );
}

export function TeachingVideosPage() {
  const overview = teachingVideos.find((film) => film.slug === "overview");
  const examples = teachingVideos.filter((film) => film.slug !== "overview");

  return (
    <section className="page-shell mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <header className="mb-10 max-w-4xl">
        <p className="section-kicker"><GraduationCap size={16} aria-hidden="true" /> Technical instruction</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
          Make the concept clear.<br />Help the learner move forward.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
          Selected moments from my game development teaching: explaining technical ideas, working through bugs,
          answering questions, and helping learners turn their thinking into projects.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <span className="rounded-full border border-oldgold/30 bg-oldgold/10 px-3 py-1 text-oldgold">Review drafts</span>
          <span className="text-slate-400">Edited excerpts · English captions available</span>
        </div>
      </header>

      {overview && <TeachingFilm film={overview} featured />}

      <div className="mb-7 mt-14 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="section-kicker">Explore a teaching skill</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">The longer examples</h2>
        </div>
        <Link to="/learn/teaching-sample" className="inline-flex items-center gap-2 text-sm text-tealglow hover:text-white">
          Explore an interactive lesson <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <nav aria-label="Teaching examples" className="mb-7 flex flex-wrap gap-2">
        {examples.map((film) => <a key={film.slug} href={`#${film.slug}`} className="rounded-full border border-white/15 px-3 py-2 text-xs text-slate-300 hover:border-tealglow/50 hover:text-tealglow">{film.title}</a>)}
      </nav>

      <div className="grid items-start gap-6 lg:grid-cols-2">
        {examples.map((film) => <TeachingFilm key={film.slug} film={film} />)}
      </div>

      <p className="mt-9 max-w-4xl text-sm leading-relaxed text-slate-400">
        These excerpts preserve original lesson audio, with context cards between sections. Learner projects and
        ideas belong to the presenting learners. This collection is being reviewed; captions are automatic and final
        audio, attribution and cut checks are pending.
      </p>
    </section>
  );
}
