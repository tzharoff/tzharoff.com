import { ArrowUpRight, Network } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { quests, skillTreeNodes, type QuestStatus } from "../data/portfolioData";

type SkillTreePreviewProps = {
  preview?: boolean;
};

const statusClass: Record<QuestStatus, string> = {
  Active: "status-active",
  Completed: "status-completed",
  Prototype: "status-prototype",
};

export function SkillTreePreview({ preview = false }: SkillTreePreviewProps) {
  const [selectedNodeId, setSelectedNodeId] = useState("root");
  const root = skillTreeNodes[0];
  const branches = skillTreeNodes.slice(1);
  const rootLineAnchor = { x: root.x, y: root.y + 9 };
  const selectedNode = skillTreeNodes.find((node) => node.id === selectedNodeId) ?? root;
  const relatedQuests = useMemo(
    () =>
      selectedNode.relatedQuestSlugs
        .map((slug) => quests.find((quest) => quest.slug === slug))
        .filter((quest): quest is NonNullable<typeof quest> => Boolean(quest)),
    [selectedNode],
  );

  const visibleAbilities = preview ? selectedNode.abilities.slice(0, 1) : selectedNode.abilities;
  const visibleRelatedQuests = preview ? relatedQuests.slice(0, 2) : relatedQuests;

  return (
    <section id="skill-tree" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className={preview ? "skill-section-layout preview" : "skill-section-layout full"}>
        <div className="section-heading">
          <p className="section-kicker">
            <Network size={16} aria-hidden="true" />
            Progression Map
          </p>
          <h2>Skill Tree</h2>
          <p>
            {preview
              ? "A preview of the disciplines Tony connects across the portfolio."
              : "Select a node to see the abilities it unlocks and the quests that prove them."}
          </p>
          {preview ? (
            <Link className="game-button secondary" to="/skill-tree">
              View Full Skill Tree
            </Link>
          ) : null}
        </div>

        <div className="skill-tree-workspace">
          <div className="panel skill-tree" aria-label="Interactive skill tree">
            <svg className="skill-lines" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
              {branches.map((node) => (
                <line
                  key={node.id}
                  className={node.id === selectedNode.id || selectedNode.id === root.id ? "active" : undefined}
                  x1={rootLineAnchor.x}
                  y1={rootLineAnchor.y}
                  x2={node.x}
                  y2={node.y - 7}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
            {skillTreeNodes.map(({ id, label, Icon, x, y, tier }) => (
              <button
                key={id}
                className={[
                  "skill-node",
                  id === "root" ? "root" : "",
                  tier,
                  id === selectedNode.id ? "active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ left: `${x}%`, top: `${y}%` }}
                type="button"
                aria-label={`${label} skill node`}
                aria-pressed={id === selectedNode.id}
                onClick={() => setSelectedNodeId(id)}
              >
                <Icon size={22} aria-hidden="true" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <aside className="panel skill-detail-panel" aria-labelledby="skill-detail-title">
            <div className="skill-detail-topline">
              <span className="skill-tier-badge">{selectedNode.tier}</span>
              <span>{selectedNode.label}</span>
            </div>
            <h3 id="skill-detail-title">{selectedNode.title}</h3>
            <p>{selectedNode.description}</p>

            <div className="skill-detail-section">
              <h4>Unlocked Abilities</h4>
              <ul className="ability-list">
                {visibleAbilities.map((ability) => (
                  <li key={ability}>{ability}</li>
                ))}
              </ul>
            </div>

            {!preview ? (
              <div className="skill-detail-section">
                <h4>Related Quests</h4>
                <div className="related-quest-list">
                  {visibleRelatedQuests.map((quest) => (
                    <Link
                      className="related-quest-card"
                      key={quest.slug}
                      to={`/quest-log/${quest.slug}`}
                      aria-label={`Open related quest ${quest.number}: ${quest.title}`}
                    >
                      <div className="related-quest-topline">
                        <span className="quest-number">{quest.number}</span>
                        <span className={`status-badge ${statusClass[quest.status]}`}>{quest.status}</span>
                      </div>
                      <h5>{quest.title}</h5>
                      <div className="related-quest-footer">
                        <span className="quest-category">{quest.category}</span>
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="skill-detail-section compact-related">
                <h4>Related Quests</h4>
                <p>{visibleRelatedQuests.map((quest) => quest.title).join(" • ")}</p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
