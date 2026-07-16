import { ArrowRight, Hammer, Swords } from "lucide-react";
import { Link } from "react-router-dom";
import { DialogueBox } from "../components/DialogueBox";
import { buildSlugs } from "../data/brandData";
import { quests } from "../data/portfolioData";

const buildProjects = buildSlugs
  .map((slug) => quests.find((q) => q.slug === slug))
  .filter((q): q is NonNullable<typeof q> => Boolean(q));

export function BuildPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-12 lg:px-8">
        <p className="tig-kicker mb-4">
          <Hammer size={14} aria-hidden="true" />
          Build
        </p>
        <h1 className="tig-title max-w-3xl text-4xl text-white md:text-6xl">
          Tony makes the game
        </h1>
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-tigsky">
          Prototypes, experiments, and development journals — the place where the lessons get tested against real
          scope, real bugs, and real players. Production limitations become the visual style and the joke.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-6 lg:px-8">
        <DialogueBox
          heading="Development rule of thumb"
          lines={[
            "One research effort should produce multiple formats.",
            "Build reusable libraries before elaborate animation.",
            "Publish a minimum viable episode before the whole ecosystem.",
          ]}
        />
      </section>

      {/* ── GAMES & EXPERIMENTS ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <h2 className="tig-title mb-8 text-3xl text-white md:text-4xl">Games and experiments</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {buildProjects.map((project) => (
            <article key={project.slug} className="tig-panel flex flex-col p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border-[3px] border-tigframe bg-tigred text-white">
                  <project.Icon size={22} aria-hidden="true" />
                </div>
                <span className="tig-chip">{project.status}</span>
              </div>
              <h3 className="mb-2 text-xl font-black uppercase tracking-wide text-tigink">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm font-semibold leading-relaxed text-tigink/80">
                {project.description}
              </p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.tools.slice(0, 3).map((tool) => (
                  <span key={tool} className="rounded-full border-2 border-tigframe/25 px-2.5 py-0.5 text-xs font-bold text-tigink/70">
                    {tool}
                  </span>
                ))}
              </div>
              <Link
                to={`/portfolio/quest-log/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-black uppercase tracking-widest text-tigred"
              >
                Open dev log
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── POSTGAME CONTENT ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="tig-panel-blue flex flex-wrap items-center justify-between gap-6 p-8 md:p-10">
          <div className="max-w-xl">
            <p className="tig-kicker mb-2">
              <Swords size={14} aria-hidden="true" />
              Postgame content unlocked
            </p>
            <h2 className="tig-title text-2xl text-white md:text-3xl">The full playable portfolio</h2>
            <p className="mt-3 font-semibold leading-relaxed text-tigsky">
              Quest logs, a skill tree, a character sheet — every project Tony has shipped, taught, or prototyped,
              presented as the RPG it secretly always was.
            </p>
          </div>
          <Link to="/portfolio" className="tig-btn red">
            Enter the portfolio
          </Link>
        </div>
      </section>
    </>
  );
}
