import { CharacterSheetCard } from "../components/CharacterSheetCard";
import { Hero } from "../components/Hero";
import { QuestLog } from "../components/QuestLog";
import { SkillTreePreview } from "../components/SkillTreePreview";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <Hero profile={<CharacterSheetCard />} />
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="panel flex flex-wrap items-center justify-between gap-6 p-7 md:p-9">
          <div className="max-w-2xl">
            <p className="section-kicker"><GraduationCap size={16} aria-hidden="true" /> Teaching in practice</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">See how I help learners make progress.</h2>
            <p className="mt-3 leading-relaxed text-slate-300">Short recorded examples of technical explanation, debugging, learner questions and project coaching.</p>
          </div>
          <Link className="game-button primary" to="/portfolio/teaching">Watch teaching examples <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
      <QuestLog preview />
      <SkillTreePreview preview />
    </>
  );
}
