import { Download, Eye, Sparkles, TreePine } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { heroHighlights } from "../data/portfolioData";

type HeroProps = {
  profile: ReactNode;
};

export function Hero({ profile }: HeroProps) {
  return (
    <section id="main-menu" className="hero-shell">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="hero-copy">
          <p className="section-kicker">
            <Sparkles size={16} aria-hidden="true" />
            Main Menu
          </p>
          <h1>Tony Zharoff</h1>
          <p className="hero-subtitle">Game Developer • Instructor • Systems Designer • Technical Business Analyst</p>
          <p className="hero-tagline">I turn complex systems into playable experiences.</p>
          <p className="hero-body">
            I build games, learning experiences, and operational tools that make complex systems easier to understand.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <Link className="game-button primary" to="/portfolio/quest-log">
              <Eye size={18} aria-hidden="true" />
              View Projects
            </Link>
            <Link className="game-button secondary" to="/portfolio/skill-tree">
              <TreePine size={18} aria-hidden="true" />
              Open Skill Tree
            </Link>
            <a className="game-button ghost" href="/Tony-Zharoff-Resume.pdf">
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <ul className="hero-highlights" aria-label="Portfolio strengths">
            {heroHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
        {profile}
      </div>
    </section>
  );
}
