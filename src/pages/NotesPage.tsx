import { ArrowRight, NotebookPen, Quote, Telescope } from "lucide-react";
import { Link } from "react-router-dom";
import { finalFrames, upcomingNotes } from "../data/brandData";

export function NotesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-12 lg:px-8">
        <p className="tig-kicker mb-4">
          <NotebookPen size={14} aria-hidden="true" />
          Tony's Notes
        </p>
        <h1 className="tig-title max-w-3xl text-4xl text-white md:text-6xl">
          Written analysis for readers who pause the video
        </h1>
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-tigsky">
          Essays, tutorials, diagrams, reference pages, and research paths. When an episode names a concept, the notes
          are where you go to keep pulling the thread.
        </p>
      </section>

      {/* ── UPCOMING NOTES ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <p className="tig-kicker mb-3">
          <Telescope size={14} aria-hidden="true" />
          First research package
        </p>
        <h2 className="tig-title mb-3 text-3xl text-white md:text-4xl">Normal maps, five ways</h2>
        <p className="mb-8 max-w-2xl font-semibold leading-relaxed text-tigsky">
          One research effort, multiple formats: two Shorts, an episode, an exercise, and a reference page — all from
          a single question about a flat wall that looks 3D.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingNotes.map(({ kind, title, body }) => (
            <article key={title} className="tig-panel p-6">
              <span className="tig-chip red mb-3">{kind}</span>
              <h3 className="mb-2 text-lg font-black leading-snug text-tigink">{title}</h3>
              <p className="text-sm font-semibold leading-relaxed text-tigink/80">{body}</p>
            </article>
          ))}
          <article className="tig-panel-blue flex flex-col justify-center p-6">
            <h3 className="mb-2 text-lg font-black uppercase tracking-wide text-white">More on the way</h3>
            <p className="text-sm font-semibold leading-relaxed text-tigsky">
              Systems essays and process writing are already in the quest log — the notes section grows one research
              effort at a time.
            </p>
            <Link
              to="/portfolio/quest-log/systems-design-notes"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-black uppercase tracking-widest text-[#ff8a8f]"
            >
              Systems Design Notes
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </section>

      {/* ── FINAL FRAME LIBRARY ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <p className="tig-kicker mb-3">
          <Quote size={14} aria-hidden="true" />
          The Final Frame library
        </p>
        <h2 className="tig-title mb-3 text-3xl text-white md:text-4xl">One idea per episode</h2>
        <p className="mb-8 max-w-2xl font-semibold leading-relaxed text-tigsky">
          Every episode ends on a single memorable line. These are the frames so far — steal them for your classroom,
          your design doc, or your desk.
        </p>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {finalFrames.map((frame) => (
            <blockquote
              key={frame}
              className="tig-panel mb-4 break-inside-avoid p-5 text-base font-extrabold leading-snug text-tigink"
            >
              {frame}
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
