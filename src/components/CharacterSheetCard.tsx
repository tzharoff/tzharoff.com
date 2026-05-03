import { CircleDot, Hexagon, Shield } from "lucide-react";
import { coreSkills, decorativeRunes, profileStats } from "../data/portfolioData";

export function CharacterSheetCard() {
  return (
    <aside id="character-sheet" className="panel character-card" aria-labelledby="character-title">
      <div className="panel-corners" aria-hidden="true" />
      <div className="character-topline">
        <span>Character Sheet</span>
        <Shield size={18} aria-hidden="true" />
      </div>

      <div className="avatar-stage" aria-hidden="true">
        <div className="avatar-ring" />
        <div className="avatar-core">
          <img src="/assets/avatar-tony.png" alt="" />
        </div>
        {decorativeRunes.map((Rune, index) => (
          <Rune key={index} className={`rune rune-${index + 1}`} size={20} />
        ))}
      </div>

      <h2 id="character-title">Design Engineer</h2>
      <div className="stat-list">
        {profileStats.map((stat) => (
          <div className="stat-row" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>

      <div className="core-skill-block">
        <div className="mini-heading">
          <CircleDot size={15} aria-hidden="true" />
          Core Skills
        </div>
        <div className="skill-badges">
          {coreSkills.map((skill) => (
            <span key={skill} className="skill-badge">
              <Hexagon size={13} aria-hidden="true" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
