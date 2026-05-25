import { ArrowUpRight, Search, ScrollText } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { questFilters, quests, type Quest, type QuestFilter, type QuestStatus } from "../data/portfolioData";

const statusClass: Record<QuestStatus, string> = {
  Active: "status-active",
  Completed: "status-completed",
  Prototype: "status-prototype",
};

type QuestLogProps = {
  preview?: boolean;
};

type QuestSort = "number" | "status" | "category" | "featured";

const sortOptions: { label: string; value: QuestSort }[] = [
  { label: "Quest Number", value: "number" },
  { label: "Status", value: "status" },
  { label: "Category", value: "category" },
  { label: "Featured First", value: "featured" },
];

function questNumberValue(quest: Quest) {
  return Number.parseInt(quest.number.replace(/\D/g, ""), 10);
}

export function QuestLog({ preview = false }: QuestLogProps) {
  const [activeFilter, setActiveFilter] = useState<QuestFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<QuestSort>("number");

  const visibleQuests = useMemo(() => {
    const sourceQuests = preview ? quests.filter((quest) => quest.featured) : quests;
    const normalizedSearch = searchQuery.trim().toLowerCase();

    const filteredQuests = sourceQuests.filter((quest) => {
      const matchesFilter = preview || activeFilter === "All" || quest.category === activeFilter;

      if (!matchesFilter) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      const searchableText = [quest.title, quest.category, quest.description, quest.role, ...quest.tags]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedSearch);
    });

    return [...filteredQuests].sort((a, b) => {
      if (preview || sortBy === "number") {
        return questNumberValue(a) - questNumberValue(b);
      }

      if (sortBy === "status") {
        return a.status.localeCompare(b.status) || questNumberValue(a) - questNumberValue(b);
      }

      if (sortBy === "category") {
        return a.category.localeCompare(b.category) || questNumberValue(a) - questNumberValue(b);
      }

      return Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || questNumberValue(a) - questNumberValue(b);
    });
  }, [activeFilter, preview, searchQuery, sortBy]);

  const totalQuestCount = preview ? quests.filter((quest) => quest.featured).length : quests.length;
  const questWord = visibleQuests.length === 1 ? "quest" : "quests";
  const countLabel = `Showing ${visibleQuests.length} of ${totalQuestCount} ${questWord}`;
  const emptyMessage = searchQuery.trim() ? "No quests match that search yet." : "No quests match this filter yet.";

  return (
    <section id="quest-log" className="section-band">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="quest-log-heading">
          <div className="section-heading">
            <p className="section-kicker">
              <ScrollText size={16} aria-hidden="true" />
              Portfolio Objectives
            </p>
            <h2>Quest Log</h2>
            {preview ? <p>Select a quest to inspect the work, outcomes, and systems behind it.</p> : null}
          </div>
          {!preview ? (
            <p className="quest-count" aria-live="polite">
              {countLabel}
            </p>
          ) : null}
        </div>

        {!preview ? (
          <div className="quest-controls">
            <div className="quest-control-row">
              <label className="quest-search">
                <span>Search quests</span>
                <span className="quest-search-box">
                  <Search size={17} aria-hidden="true" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search title, role, tag..."
                  />
                </span>
              </label>
              <label className="quest-sort">
                <span>Sort by</span>
                <select value={sortBy} onChange={(event) => setSortBy(event.target.value as QuestSort)}>
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
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
          </div>
        ) : null}

        <div className="quest-grid">
          {visibleQuests.map((quest) => (
            <article className={quest.featured ? "panel quest-card featured" : "panel quest-card"} key={quest.title}>
              <div className="quest-thumb" aria-hidden="true">
                <quest.Icon size={34} />
              </div>
              <div className="quest-meta">
                <span className="quest-number">{quest.number}</span>
                <span className={`status-badge ${statusClass[quest.status]}`}>{quest.status}</span>
              </div>
              {quest.featured ? <span className="featured-badge">Featured</span> : null}
              <h3>{quest.title}</h3>
              <p className="quest-category">{quest.category}</p>
              <p>{quest.description}</p>
              <div className="quest-tags" aria-label={`${quest.title} tags`}>
                {quest.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link className="quest-link" to={`/portfolio/quest-log/${quest.slug}`} aria-label={`Open quest: ${quest.title}`}>
                Open Quest
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        {visibleQuests.length === 0 ? (
          <div className="panel empty-quest-state">
            <p>{emptyMessage}</p>
          </div>
        ) : null}
        {preview ? (
          <div className="section-more">
            <Link className="game-button secondary" to="/portfolio/quest-log">
              View Full Quest Log
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
