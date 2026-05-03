import { ArrowLeft, CheckCircle2, Gem, Hammer, ShieldAlert, Sparkles, Wrench } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { quests, type QuestStatus } from "../data/portfolioData";

const statusClass: Record<QuestStatus, string> = {
  Active: "status-active",
  Completed: "status-completed",
  Prototype: "status-prototype",
};

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="quest-detail-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function QuestDetailPage() {
  const { slug } = useParams();
  const quest = quests.find((item) => item.slug === slug);

  if (!quest) {
    return (
      <section className="page-shell mx-auto max-w-4xl px-5 py-14 lg:px-8">
        <div className="panel page-panel missing-quest">
          <p className="section-kicker">
            <ShieldAlert size={16} aria-hidden="true" />
            Quest Missing
          </p>
          <h1>Quest Not Found</h1>
          <p>
            That entry is not in the current log. It may be hidden, archived, or waiting for a better map marker.
          </p>
          <Link className="game-button secondary" to="/quest-log">
            <ArrowLeft size={18} aria-hidden="true" />
            Return to Quest Log
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="quest-detail-page page-shell mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <Link className="back-link" to="/quest-log">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to Quest Log
      </Link>

      <header className="panel quest-detail-hero">
        <div className="quest-detail-icon" aria-hidden="true">
          <quest.Icon size={44} />
        </div>
        <div>
          <div className="quest-detail-meta">
            <span className="quest-number">{quest.number}</span>
            <span className="quest-category">{quest.category}</span>
            <span className={`status-badge ${statusClass[quest.status]}`}>{quest.status}</span>
          </div>
          <h1>{quest.title}</h1>
          <p>{quest.objective}</p>
        </div>
      </header>

      <div className="quest-detail-layout">
        <aside className="panel quest-loadout">
          <p className="section-kicker">
            <Wrench size={16} aria-hidden="true" />
            Role
          </p>
          <h2>{quest.role}</h2>

          <div className="quest-tools">
            <p className="mini-heading">
              <Hammer size={15} aria-hidden="true" />
              Tools Equipped
            </p>
            <div className="skill-badges">
              {quest.tools.map((tool) => (
                <span className="skill-badge" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="quest-tools">
            <p className="mini-heading">Tags</p>
            <div className="quest-tags detail-tags" aria-label={`${quest.title} tags`}>
              {quest.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </aside>

        <div className="quest-case-grid">
          <article className="panel quest-case-card">
            <h2>
              <ShieldAlert size={21} aria-hidden="true" />
              Obstacles
            </h2>
            <DetailList items={quest.obstacles} />
          </article>

          <article className="panel quest-case-card">
            <h2>
              <CheckCircle2 size={21} aria-hidden="true" />
              Solution
            </h2>
            <DetailList items={quest.solution} />
          </article>

          <article className="panel quest-case-card">
            <h2>
              <Gem size={21} aria-hidden="true" />
              Quest Rewards
            </h2>
            <DetailList items={quest.rewards} />
          </article>

          <article className="panel quest-case-card">
            <h2>
              <Sparkles size={21} aria-hidden="true" />
              Unlocked Skills
            </h2>
            <div className="skill-badges">
              {quest.unlockedSkills.map((skill) => (
                <span className="skill-badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
