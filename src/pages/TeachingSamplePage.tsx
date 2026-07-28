import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  Eye,
  GraduationCap,
  Layers3,
  RefreshCw,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DialogueBox } from "../components/DialogueBox";

const sequence = [
  {
    label: "Activate",
    title: "Begin with something visible",
    copy: "A coin disappears, a sound plays, and a counter changes. Learners start with the behavior they can already observe.",
  },
  {
    label: "Explain",
    title: "Give the system a mental model",
    copy: "Detection announces an event; listeners decide how to respond. One compact model organizes the technical vocabulary.",
  },
  {
    label: "Practice",
    title: "Trace the complete chain",
    copy: "Learners identify what happened, what detected it, what information traveled, and which systems responded.",
  },
  {
    label: "Transfer",
    title: "Debug a new situation",
    copy: "A broken door interaction tests whether the learner can apply the model instead of repeating the example.",
  },
];

const successCriteria = [
  "Distinguishes detection, announcement, and response",
  "Traces an event from player action to visible feedback",
  "Names the missing link in a broken interaction",
  "Uses engine-neutral vocabulary to research an implementation",
];

export function TeachingSamplePage() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-12 lg:px-8">
        <p className="tig-kicker mb-4">
          <GraduationCap size={14} aria-hidden="true" />
          Teaching sample
        </p>
        <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h1 className="tig-title max-w-4xl text-4xl text-white md:text-6xl">
              From “something happened” to a system you can debug
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-relaxed text-tigsky">
              A short technical-learning experience for beginning game developers. It uses observable player feedback
              to teach events and listeners, then asks learners to transfer that model to a new problem.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <span className="tig-chip ghost justify-center">
              <Users size={13} aria-hidden="true" /> Beginner
            </span>
            <span className="tig-chip ghost justify-center">
              <Clock3 size={13} aria-hidden="true" /> 15–20 min
            </span>
            <span className="tig-chip ghost justify-center">
              <Layers3 size={13} aria-hidden="true" /> Self-paced
            </span>
            <span className="tig-chip ghost justify-center">
              <Eye size={13} aria-hidden="true" /> Observable
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 lg:px-8">
        <div className="tig-panel grid gap-8 p-7 md:p-9 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="tig-kicker mb-3">
              <Target size={14} aria-hidden="true" />
              Learning objective
            </p>
            <h2 className="text-2xl font-black uppercase tracking-wide text-tigink">
              Trace an event from detection to response
            </h2>
            <p className="mt-3 font-semibold leading-relaxed text-tigink/75">
              By the end, a learner can explain how one game-world interaction causes several systems to respond and
              diagnose where that chain has broken.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-tigred">Evidence of success</p>
            <ul className="tig-check-list grid gap-2 sm:grid-cols-2 sm:gap-x-6">
              {successCriteria.map((criterion) => (
                <li key={criterion}>{criterion}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <p className="tig-kicker mb-3">
          <RefreshCw size={14} aria-hidden="true" />
          Learning sequence
        </p>
        <h2 className="tig-title mb-7 text-3xl text-white md:text-4xl">Observation becomes a reusable model</h2>
        <ol className="grid gap-4 md:grid-cols-2">
          {sequence.map((step, index) => (
            <li key={step.label} className="tig-panel flex gap-5 p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border-[3px] border-tigframe bg-tigred font-black text-white shadow-[0_4px_0_#060d2e]">
                {index + 1}
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-tigred">{step.label}</p>
                <h3 className="mt-1 text-lg font-black text-tigink">{step.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-tigink/75">{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="tig-kicker mb-3">
              <BookOpenCheck size={14} aria-hidden="true" />
              Experience the lesson
            </p>
            <h2 className="tig-title text-3xl text-white md:text-4xl">Events: How does the game announce what happened?</h2>
            <p className="mt-4 font-semibold leading-relaxed text-tigsky">
              The lesson moves from a plain-language announcement metaphor to a complete interaction chain, engine
              vocabulary, guided observation, and a hands-on tracing exercise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/learn/lessons/events-how-does-the-game-announce-what-happened" className="tig-btn red">
                Open the learner experience
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/learn/lessons" className="tig-btn white">
                View the full course
              </Link>
            </div>
          </div>
          <DialogueBox
            pose="expert"
            heading="The core mental model"
            lines={[
              "Something happens.",
              "The engine detects it.",
              "An event announces it.",
              "Listening systems respond.",
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <div className="tig-panel-blue p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="tig-kicker mb-3">Transfer check</p>
              <h2 className="tig-title text-3xl text-white">The door detects the player—but never opens</h2>
              <p className="mt-4 font-semibold leading-relaxed text-tigsky">
                The trigger confirms that the player entered. The door-opening animation works when played manually.
                Nothing happens during play. Where would you investigate first, and what evidence would you look for?
              </p>
              <button type="button" className="tig-btn red mt-6" onClick={() => setShowAnswer((value) => !value)}>
                {showAnswer ? "Hide model answer" : "Reveal model answer"}
              </button>
            </div>
            <div className="rounded-xl border-2 border-white/20 bg-white/5 p-6" aria-live="polite">
              <p className="text-xs font-black uppercase tracking-widest text-[#ff8a8f]">
                {showAnswer ? "Model answer" : "What a strong response includes"}
              </p>
              {showAnswer ? (
                <p className="mt-3 font-semibold leading-relaxed text-white">
                  Start between detection and response: verify that the trigger raises the expected event, confirm that
                  the door is subscribed as a listener, and inspect any event data or conditions passed to it. The
                  working animation and confirmed overlap suggest that the missing link is the announcement or listener,
                  not the endpoints.
                </p>
              ) : (
                <ul className="mt-3 grid gap-3 font-semibold text-tigsky">
                  <li>Names a specific link in the interaction chain</li>
                  <li>Uses the evidence already provided</li>
                  <li>Proposes an observable debugging step</li>
                  <li>Explains why that step comes first</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <p className="tig-kicker mb-3">
          <CheckCircle2 size={14} aria-hidden="true" />
          Design notes
        </p>
        <h2 className="tig-title mb-7 text-3xl text-white md:text-4xl">Why the sample is built this way</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Starts with the learner", "The example begins with an experience the learner can see and describe before introducing technical language."],
            ["Checks application", "The transfer scenario changes the context, so success requires using the model rather than recalling a sentence."],
            ["Supports iteration", "Questions, wrong answers, and points of confusion can become clearer examples, added practice, or product feedback."],
          ].map(([title, copy]) => (
            <article key={title} className="tig-panel p-6">
              <h3 className="text-lg font-black uppercase tracking-wide text-tigink">{title}</h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-tigink/75">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
