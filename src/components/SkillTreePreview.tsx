import { Network } from "lucide-react";
import { Link } from "react-router-dom";
import { skillTreeNodes } from "../data/portfolioData";

type SkillTreePreviewProps = {
  preview?: boolean;
};

export function SkillTreePreview({ preview = false }: SkillTreePreviewProps) {
  const root = skillTreeNodes[0];
  const branches = skillTreeNodes.slice(1);

  return (
    <section id="skill-tree" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="skill-section-layout">
        <div className="section-heading">
          <p className="section-kicker">
            <Network size={16} aria-hidden="true" />
            Progression Map
          </p>
          <h2>Skill Tree</h2>
          <p>
            {preview
              ? "A preview of the disciplines Tony connects across the portfolio."
              : "The disciplines Tony connects: game craft, teaching systems, software tools, and practical operations design."}
          </p>
          {preview ? (
            <Link className="game-button secondary" to="/skill-tree">
              View Full Skill Tree
            </Link>
          ) : null}
        </div>

        <div className="panel skill-tree" aria-label="Skill tree preview">
          <svg className="skill-lines" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
            {branches.map((node) => (
              <line
                key={node.id}
                x1={root.x}
                y1={root.y}
                x2={node.x}
                y2={node.y}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
          {skillTreeNodes.map(({ id, label, Icon, x, y }) => (
            <button
              key={id}
              className={id === "root" ? "skill-node root" : "skill-node"}
              style={{ left: `${x}%`, top: `${y}%` }}
              type="button"
              aria-label={`${label} skill node`}
            >
              <Icon size={22} aria-hidden="true" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
