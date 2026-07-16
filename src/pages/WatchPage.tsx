import { Clapperboard, ListVideo, ThumbsUp, Tv } from "lucide-react";
import { useState } from "react";
import { DialogueBox } from "../components/DialogueBox";
import { brand, contentLadder, episodeBeats, seasonZero, segments } from "../data/brandData";

function LikeGag() {
  const [pressed, setPressed] = useState(0);

  return (
    <div className="tig-panel flex flex-wrap items-center justify-between gap-5 p-7">
      <div className="max-w-lg">
        <p className="tig-kicker mb-2">Optional side quest</p>
        <p className="font-extrabold leading-snug text-tigink">
          Press the button shaped like a thumb. Observe whether anything explodes.
        </p>
        {pressed > 0 && (
          <p key={pressed} className="mt-2 text-sm font-black uppercase tracking-widest text-tigred" style={{ animation: "tig-appear 0.01s steps(1) both" }}>
            {pressed === 1
              ? "Player input detected. Nothing exploded. Yet."
              : `Input registered ×${pressed}. The game state remains suspiciously calm.`}
          </p>
        )}
      </div>
      <button type="button" className="tig-btn red" onClick={() => setPressed((n) => n + 1)}>
        <ThumbsUp size={18} aria-hidden="true" />
        Like
      </button>
    </div>
  );
}

export function WatchPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-12 lg:px-8">
        <p className="tig-kicker mb-4">
          <Tv size={14} aria-hidden="true" />
          Watch
        </p>
        <h1 className="tig-title max-w-3xl text-4xl text-white md:text-6xl">
          The show that plays games in front of you — then opens them up
        </h1>
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-tigsky">
          {brand.positioning} Reviews, mechanic breakdowns, dev stories, and Shorts — each one built to make an
          invisible system visible.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="tig-chip red">Channel launching soon</span>
          <span className="tig-chip ghost">{seasonZero.status}: {seasonZero.title}</span>
        </div>
      </section>

      {/* ── SEASON ZERO ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <h2 className="tig-title text-3xl text-white">{seasonZero.title}</h2>
            <p className="mt-3 max-w-md font-semibold leading-relaxed text-tigsky">
              {seasonZero.subtitle}. Engine-agnostic lessons on how to play and understand games — concepts first,
              tutorials later.
            </p>
            <div className="mt-6">
              <DialogueBox
                heading="Why start here?"
                lines={[
                  "Every game is a conversation between player and rules.",
                  "Season Zero teaches you to hear it.",
                  "No engine required. Just eyes.",
                ]}
                showPortrait={false}
              />
            </div>
          </div>
          <ol className="tig-step-list self-start">
            {seasonZero.episodes.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── EPISODE ANATOMY ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <p className="tig-kicker mb-3">
          <Clapperboard size={14} aria-hidden="true" />
          Anatomy of an episode
        </p>
        <h2 className="tig-title mb-8 text-3xl text-white md:text-4xl">8–12 minutes, zero filler</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {episodeBeats.map(({ time, title, body }) => (
            <article key={title} className="tig-panel p-5">
              <span className="tig-chip red mb-3">{time}</span>
              <h3 className="mb-1.5 text-base font-black uppercase tracking-wide text-tigink">{title}</h3>
              <p className="text-sm font-semibold leading-relaxed text-tigink/80">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── SEGMENTS ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <p className="tig-kicker mb-3">
          <ListVideo size={14} aria-hidden="true" />
          The segments
        </p>
        <h2 className="tig-title mb-8 text-3xl text-white md:text-4xl">Every Tony has a job</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map(({ name, purpose }) => (
            <article key={name} className="tig-panel-blue p-6">
              <h3 className="mb-1.5 text-lg font-black uppercase tracking-wide text-white">{name}</h3>
              <p className="text-sm font-semibold leading-relaxed text-tigsky">{purpose}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CONTENT LADDER ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <h2 className="tig-title mb-3 text-3xl text-white md:text-4xl">The content ladder</h2>
        <p className="mb-8 max-w-2xl font-semibold leading-relaxed text-tigsky">
          Shorts reveal the trick. Episodes explain the decision. Tutorials teach the implementation. Courses develop
          the judgment.
        </p>
        <div className="tig-panel divide-y-2 divide-tigframe/15 overflow-hidden p-0">
          {contentLadder.map(({ format, job }) => (
            <div key={format} className="grid gap-1 px-6 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline">
              <span className="text-sm font-black uppercase tracking-widest text-tigred">{format}</span>
              <span className="font-semibold text-tigink">{job}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIKE GAG ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-5 py-12 lg:px-8">
        <LikeGag />
        <p className="mt-4 text-center text-xs font-black uppercase tracking-[0.25em] text-tigsky">
          Tony may fail the opening game, but the Like survives.
        </p>
      </section>
    </>
  );
}
