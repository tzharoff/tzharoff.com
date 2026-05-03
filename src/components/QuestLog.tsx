import { ArrowUpRight, ScrollText } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { questFilters, quests, type QuestFilter, type QuestStatus } from "../data/portfolioData";

const statusClass: Record<QuestStatus, string> = {
  Active: "status-active",
  Completed: "status-completed",
  Prototype: "status-prototype",
};

type QuestLogProps = {
  preview?: boolean;
};

export function QuestLog({ preview = false }: QuestLogProps) {
  const [activeFilter, setActiveFilter] = useState<QuestFilter>("All");
  const visibleQuests = useMemo(() => {
    const sourceQuests = preview ? quests.filter((quest) => quest.featured) : quests;

    if (preview || activeFilter === "All") {
      return sourceQuests;
    }

    return sourceQuests.filter((quest) => quest.category === activeFilter);
  }, [activeFilter, preview]);

  return (
    <section id="quest-log" className="section-band">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="section-heading">
          <p className="section-kicker">
            <ScrollText size={16} aria-hidden="true" />
            Portfolio Objectives
          </p>
          <h2>Quest Log</h2>
          {preview ? <p>Select a quest to inspect the work, outcomes, and systems behind it.</p> : null}
        </div>
        {!preview ? (
          <div className="quest-filter-bar" aria-label="Filter quests by category">
            {questFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={filter === activeFilter ? "quest-filter active" : "quest-filter"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        ) : null}
        <div className="quest-grid">
          {visibleQuests.map((quest) => (
            <article className="panel quest-card" key={quest.title}>
              <div className="quest-thumb" aria-hidden="true">
                <quest.Icon size={34} />
              </div>
              <div className="quest-meta">
                <span className="quest-number">{quest.number}</span>
                <span className={`status-badge ${statusClass[quest.status]}`}>{quest.status}</span>
              </div>
              <h3>{quest.title}</h3>
              <p className="quest-category">{quest.category}</p>
              <p>{quest.description}</p>
              <div className="quest-tags" aria-label={`${quest.title} tags`}>
                {quest.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link className="quest-link" to={`/quest-log/${quest.slug}`} aria-label={`Open quest: ${quest.title}`}>
                Open Quest
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        {visibleQuests.length === 0 ? (
          <div className="panel empty-quest-state">
            <p>No quests match this filter yet.</p>
          </div>
        ) : null}
        {preview ? (
          <div className="section-more">
            <Link className="game-button secondary" to="/quest-log">
              View Full Quest Log
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
