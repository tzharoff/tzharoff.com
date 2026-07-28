import { ArrowRight, BookOpenCheck, GraduationCap, Lightbulb, Presentation, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { DialogueBox } from "../components/DialogueBox";
import { courses } from "../lib/lessons";
import {
  classroomPrompt,
  episodeSupport,
  lessonSequence,
  pillars,
  playLoop,
} from "../data/brandData";

export function LearnPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-12 lg:px-8">
        <p className="tig-kicker mb-4">
          <Lightbulb size={14} aria-hidden="true" />
          Learn
        </p>
        <h1 className="tig-title max-w-3xl text-4xl text-white md:text-6xl">
          Understand before implementation
        </h1>
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-tigsky">
          A tutorial answers “How do I make this?” Tony in the Game asks “How do I understand what I'm making?” The
          goal is mental models that make tutorials useful — instead of dependency-forming.
        </p>
      </section>

      {/* ── LESSON LIBRARY CTA ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <div className="tig-panel flex flex-wrap items-center justify-between gap-6 p-8">
          <div className="max-w-xl">
            <p className="tig-kicker mb-2">
              <BookOpenCheck size={14} aria-hidden="true" />
              New game
            </p>
            <h2 className="text-2xl font-black uppercase tracking-wide text-tigink md:text-3xl">
              The lesson library is open
            </h2>
            <p className="mt-2 font-semibold leading-relaxed text-tigink/80">
              {courses.reduce((n, c) => n + c.lessons.length, 0)} written lessons and counting, starting with{" "}
              {courses[0]?.title}. Your progress saves on this device.
            </p>
          </div>
          <Link to="/learn/lessons" className="tig-btn red">
            Start learning
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── TEACHING SAMPLE ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <div className="tig-panel-blue flex flex-wrap items-center justify-between gap-6 p-8">
          <div className="max-w-2xl">
            <p className="tig-kicker mb-2">
              <Presentation size={14} aria-hidden="true" />
              Portfolio sample
            </p>
            <h2 className="text-2xl font-black uppercase tracking-wide text-white md:text-3xl">
              See how a lesson becomes measurable learning
            </h2>
            <p className="mt-2 font-semibold leading-relaxed text-tigsky">
              Review the audience, objective, learning sequence, transfer assessment, success criteria, and design
              decisions behind one technical lesson.
            </p>
          </div>
          <Link to="/learn/teaching-sample" className="tig-btn red">
            View teaching sample
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── LESSON SEQUENCE ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="tig-title text-3xl text-white">Every lesson follows the same loop</h2>
            <p className="mt-3 max-w-md font-semibold leading-relaxed text-tigsky">
              Name the concept, reveal the system, connect it to player experience, weigh the cost — then hand you the
              vocabulary to build it in Unity, Unreal, Godot, or anything else.
            </p>
            <div className="mt-6">
              <DialogueBox
                pose="expert"
                heading="The Tony guarantee"
                lines={[
                  "We name the concept and make it visible.",
                  "We show the tradeoff, not just the technique.",
                  "You leave able to research it in any engine.",
                ]}
              />
            </div>
          </div>
          <ol className="tig-step-list self-start">
            {lessonSequence.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── PLAY LOOP ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="tig-panel-blue p-8 md:p-10">
          <p className="tig-kicker mb-3">
            <RefreshCw size={14} aria-hidden="true" />
            The fundamental play loop
          </p>
          <h2 className="tig-title mb-6 text-3xl text-white">
            A game is input followed by a meaningful response
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {playLoop.map((step, i) => (
              <div key={step} className="rounded-xl border-2 border-white/20 bg-white/5 p-4">
                <span className="mb-1 block text-xs font-black uppercase tracking-widest text-[#ff8a8f]">
                  Step {i + 1}
                </span>
                <p className="font-bold leading-snug text-white">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 font-semibold italic leading-relaxed text-tigsky">
            “Controls tell you what inputs are available. Rules determine what those inputs mean. Feedback teaches you
            the consequences.”
          </p>
        </div>
      </section>

      {/* ── CONTENT PILLARS ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <h2 className="tig-title mb-3 text-3xl text-white md:text-4xl">Seven ways into the game</h2>
        <p className="mb-8 max-w-2xl font-semibold leading-relaxed text-tigsky">
          The curriculum is organized as content pillars — each one a different lens on the same question: how do
          games actually work?
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ title, description, topics, Icon }) => (
            <article key={title} className="tig-panel flex flex-col p-6">
              <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl border-[3px] border-tigframe bg-tigblue text-white">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mb-1.5 text-xl font-black uppercase tracking-wide text-tigink">{title}</h3>
              <p className="mb-4 text-sm font-semibold leading-relaxed text-tigink/80">{description}</p>
              <ul className="tig-check-list mt-auto text-sm">
                {topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── CLASSROOM ────────────────────────────────────────────────── */}
      <section id="classroom" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-10 lg:px-8">
        <p className="tig-kicker mb-3">
          <GraduationCap size={14} aria-hidden="true" />
          Classroom-ready design
        </p>
        <h2 className="tig-title mb-3 text-3xl text-white md:text-4xl">
          Play an episode. Run the discussion.
        </h2>
        <p className="mb-8 max-w-2xl font-semibold leading-relaxed text-tigsky">
          Every episode is designed to be useful to teachers without a full course adoption — play 8–12 minutes, then
          facilitate observation, discussion, or a small design exercise.
        </p>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="tig-panel p-7">
            <h3 className="mb-4 text-lg font-black uppercase tracking-wide text-tigink">
              What ships with each episode
            </h3>
            <ul className="tig-check-list sm:columns-2 sm:gap-8 [&>li]:mb-2 [&>li]:break-inside-avoid">
              {episodeSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <DialogueBox heading="Example classroom prompt" lines={[classroomPrompt]} showPortrait={false} />
            <p className="px-2 font-semibold italic leading-relaxed text-tigsky">
              “A good lesson doesn't make every student produce the same game. It gives every student the tools to
              make their game.”
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
