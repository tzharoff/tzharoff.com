import { Mail, Send } from "lucide-react";
import { socialLinks } from "../data/portfolioData";

export function ContactPage() {
  return (
    <section className="page-shell mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div className="section-heading">
        <p className="section-kicker">
          <Mail size={16} aria-hidden="true" />
          Contact
        </p>
        <h1 className="page-title">Start a Quest</h1>
        <p>
          Reach out for game development, teaching, mentorship, technical business analysis, or systems design work.
        </p>
      </div>
      <div className="panel page-panel">
        <h2>Open Channel</h2>
        <p>Use the links below as placeholders for Tony's real profiles and inbox.</p>
        <div className="contact-list">
          {socialLinks.map(({ label, href, Icon }) => (
            <a href={href} className="contact-link" key={label}>
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
              <Send size={15} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
