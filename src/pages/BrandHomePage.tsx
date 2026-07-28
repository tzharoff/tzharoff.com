import { ArrowRight, GraduationCap, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DialogueBox } from "../components/DialogueBox";
import { brand, finalFrames, primaryPaths, seasonZero } from "../data/brandData";
import { tonyPoses } from "../lib/lessons";

function TonyTip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % finalFrames.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="tig-dialogue">
      <span className="tig-nameplate">Tony Tip</span>
      <div className="flex flex-wrap items-center gap-5 pt-2 sm:flex-nowrap">
        <div className="tig-portrait hidden sm:grid" aria-hidden="true">
          <img src={`/tony/${tonyPoses[index % tonyPoses.length]}.png`} alt="" />
        </div>
        <p key={index} className="min-w-0 flex-1 text-lg font-extrabold leading-snug text-tigink md:text-xl">
          {finalFrames[index]}
        </p>
        <button
          type="button"
          className="tig-btn red shrink-0 !min-h-[44px] !px-4"
          onClick={() => setIndex((i) => (i + 1) % finalFrames.length)}
          aria-label="Show the next Tony Tip"
        >
          A
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function BrandHomePage() {
  return (
    <>
      {/* ── HERO: the top screen ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-7 md:pt-12 lg:px-8">
        <div className="tig-screen tig-title-card px-5 pb-7 pt-6 md:px-10 md:pb-10 md:pt-8">
          <span className="tig-title-card-star star-one" aria-hidden="true">★</span>
          <span className="tig-title-card-star star-two" aria-hidden="true">★</span>
          <span className="tig-title-card-star star-three" aria-hidden="true">★</span>

          <div className="relative z-[1]">
            <p className="tig-adventure-tag">A Tony Zharoff adventure</p>
            <div className="tig-hero-lockup">
              <div className="tig-hero-copy">
                <p className="tig-episode-label">
                  <Sparkles size={15} aria-hidden="true" />
                  Now playing: Season Zero
                </p>
                <h1 className="tig-logo" aria-label="Tony in the Game">
                  <span className="tig-logo-tony">Tony</span>
                  <span className="tig-logo-in">in the</span>
                  <span className="tig-logo-game">Game</span>
                </h1>
              </div>

              <div className="tig-hero-tony">
                <div className="tig-hero-burst" aria-hidden="true" />
                <img
                  src="/tony/excited.png"
                  alt="Animated Tony throws both fists in the air, ready to jump into the game"
                  className="tig-pose"
                />
                <span className="tig-hero-callout">I'm in!</span>
              </div>
            </div>

            <div className="tig-hero-footer">
              <div>
                <p className="text-lg font-black uppercase tracking-wide text-white md:text-2xl">{brand.promise}</p>
                <p className="mt-2 max-w-2xl text-sm font-semibold leading-relaxed text-tigsky md:text-base">
                  See what the player sees. Reveal what the game is doing. Then build it yourself.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/watch" className="tig-btn red">
                  <Play size={18} aria-hidden="true" />
                  Start Episode 01
                </Link>
                <Link to="/about" className="tig-btn white">
                  Meet Tony
                </Link>
              </div>
            </div>

            <p className="tig-blink mt-6 text-center text-xs font-black uppercase tracking-[0.3em] text-tigsky">
              Press Start
            </p>
          </div>
        </div>

        {/* ── The bottom screen: dialogue window ── */}
        <div className="mx-auto mt-8 max-w-3xl">
          <DialogueBox
            pose="explaining"
            heading="Welcome to the home of Tony in the Game"
            lines={[
              "We don't teach you where the button is.",
              "We teach you what it does, why it exists, and when to look for it.",
              "Pick a path below to start playing.",
            ]}
          />
        </div>
      </section>

      {/* ── PRIMARY PATHS ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="tig-title text-3xl text-white md:text-4xl">Choose your path</h2>
          <Link to="/notes" className="tig-chip ghost shrink-0">
            Or read Tony's Notes →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {primaryPaths.map(({ label, href, purpose, Icon }) => (
            <Link key={label} to={href} className="tig-panel group flex flex-col p-7 no-underline">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border-[3px] border-tigframe bg-tigred text-white">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-2xl font-black uppercase tracking-wide text-tigink">{label}</h3>
              <p className="mb-5 flex-1 font-semibold leading-relaxed text-tigink/80">{purpose}</p>
              <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-tigred">
                Enter
                <ArrowRight size={15} className="transition-none group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED EPISODE ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="tig-panel-blue grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="tig-kicker mb-3">
              <Play size={14} aria-hidden="true" />
              Featured episode
            </p>
            <h2 className="tig-title text-3xl text-white md:text-4xl">{seasonZero.episodes[0]}</h2>
            <p className="mt-4 font-semibold leading-relaxed text-tigsky">
              {seasonZero.title}, Episode 01. The first lesson in seeing games the way a developer does — as a
              conversation between a player and a system of rules.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="tig-chip red">{seasonZero.status}</span>
              <Link to="/watch" className="tig-btn white">
                See the season plan
              </Link>
            </div>
          </div>
          <ol className="tig-step-list">
            {seasonZero.episodes.slice(0, 4).map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── TONY TIP ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-5 py-12 lg:px-8">
        <TonyTip />
      </section>

      {/* ── CLASSROOM STRIP ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="tig-panel flex flex-wrap items-center justify-between gap-6 p-8">
          <div className="max-w-xl">
            <p className="tig-kicker mb-2">
              <GraduationCap size={14} aria-hidden="true" />
              Classroom-ready
            </p>
            <h2 className="text-2xl font-black uppercase tracking-wide text-tigink md:text-3xl">
              Built for teachers, too
            </h2>
            <p className="mt-2 font-semibold leading-relaxed text-tigink/80">
              Every episode ships with a learning objective, vocabulary, discussion questions, and an optional
              exercise — play a lesson, then run the conversation.
            </p>
          </div>
          <Link to="/learn#classroom" className="tig-btn blue">
            Classroom resources
          </Link>
        </div>
      </section>
    </>
  );
}
