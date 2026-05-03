import { CharacterSheetCard } from "../components/CharacterSheetCard";
import { coreSkills, profileStats } from "../data/portfolioData";

export function CharacterSheetPage() {
  return (
    <section className="page-shell mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
      <CharacterSheetCard />
      <div className="panel page-panel">
        <p className="section-kicker">Character Sheet</p>
        <h1>Tony Zharoff</h1>
        <p>
          A design engineer focused on game systems, learning experiences, and operational tools that make complex
          processes understandable.
        </p>
        <div className="detail-grid">
          {profileStats.map((stat) => (
            <div className="detail-cell" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
        <div className="core-skill-block">
          <div className="mini-heading">Core Loadout</div>
          <div className="skill-badges">
            {coreSkills.map((skill) => (
              <span className="skill-badge" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
