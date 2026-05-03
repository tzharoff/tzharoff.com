import { BookOpen } from "lucide-react";
import { codexEntries } from "../data/portfolioData";

export function CodexPage() {
  return (
    <section className="page-shell mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <div className="section-heading">
        <p className="section-kicker">
          <BookOpen size={16} aria-hidden="true" />
          Knowledge Index
        </p>
        <h1 className="page-title">Codex</h1>
        <p>Reference notes for the disciplines, tools, and systems that shape Tony's work.</p>
      </div>
      <div className="codex-grid">
        {codexEntries.map((entry) => (
          <article className="panel codex-card" key={entry.title}>
            <h2>{entry.title}</h2>
            <p>{entry.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
