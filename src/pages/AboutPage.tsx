import { ArrowRight, Briefcase, Gamepad2, GraduationCap, ScrollText, User } from "lucide-react";
import { Link } from "react-router-dom";
import { DialogueBox } from "../components/DialogueBox";
import { brand } from "../data/brandData";

const history = [
  {
    Icon: Gamepad2,
    title: "Game development",
    body: "Unity gameplay systems, progression loops, prototypes like Brain Plunder, Zug Zug, and Mummy Mayhem — and the game-feel instincts that come from shipping and scrapping them.",
  },
  {
    Icon: GraduationCap,
    title: "Teaching",
    body: "Unity mentorship with P1 Games teams, a Kotlin + Android bootcamp, One Line Academy, and curriculum design built around visible progress and honest tradeoffs.",
  },
  {
    Icon: Briefcase,
    title: "Systems & tools",
    body: "Operational software for real teams — dispatch tools, handoff playbooks, source-of-truth dashboards. The same systems thinking the show applies to games, applied to work.",
  },
];

export function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-12 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="tig-kicker mb-4">
              <User size={14} aria-hidden="true" />
              About
            </p>
            <h1 className="tig-title max-w-2xl text-4xl text-white md:text-6xl">
              Tony Zharoff is Tony in the Game
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-tigsky">
              Game designer, Unity developer, technical educator, and curriculum designer. Tony in the Game combines
              all of it into one job: teaching people to see, understand, research, and create video games through the
              eyes of a developer.
            </p>
          </div>
          <div className="relative mx-auto hidden max-w-[260px] lg:block">
            <img
              src="/tony.png"
              alt="Tony Zharoff's avatar"
              className="tig-pose w-full drop-shadow-[0_14px_0_rgba(5,10,34,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* ── BRAND ORIGIN ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-5 py-8 lg:px-8">
        <DialogueBox
          heading="The brand origin"
          lines={[
            "Most tutorials teach where the button is.",
            "Learners finish without the vocabulary to continue alone.",
            "This show starts one level earlier — with understanding.",
          ]}
        />
      </section>

      {/* ── HISTORY ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <h2 className="tig-title mb-8 text-3xl text-white md:text-4xl">Three careers, one lesson plan</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {history.map(({ Icon, title, body }) => (
            <article key={title} className="tig-panel p-7">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border-[3px] border-tigframe bg-tigblue text-white">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-black uppercase tracking-wide text-tigink">{title}</h3>
              <p className="text-sm font-semibold leading-relaxed text-tigink/80">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl font-semibold italic leading-relaxed text-tigsky">
          For the record — and in the restrained manner the brand bible demands — yes, Tony also has a Cory in the
          House history. He is at peace with it. Mostly.
        </p>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="tig-panel-blue p-8 md:p-10">
          <h2 className="tig-title mb-4 text-3xl text-white">The mission</h2>
          <p className="max-w-3xl text-lg font-semibold leading-relaxed text-tigsky">
            Help people understand how games work, why developers make particular decisions, how to research
            unfamiliar systems, and how to turn that understanding into original creative work. The videos are a free
            public learning library first — knowledge stays outside the paywall.
          </p>
          <p className="mt-6 text-xl font-black uppercase tracking-wide text-white">{brand.corePromise}</p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="tig-panel flex flex-wrap items-center justify-between gap-6 p-8">
          <div className="max-w-xl">
            <p className="tig-kicker mb-2">
              <ScrollText size={14} aria-hidden="true" />
              Want the full stat block?
            </p>
            <h2 className="text-2xl font-black uppercase tracking-wide text-tigink md:text-3xl">
              Credits, quests, and the character sheet
            </h2>
            <p className="mt-2 font-semibold leading-relaxed text-tigink/80">
              Project case studies, the skill tree, and professional history live in the playable portfolio. For
              collaborations, classrooms, workshops, or consulting, head to contact.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/portfolio" className="tig-btn blue">
              Portfolio
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="tig-btn red">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
