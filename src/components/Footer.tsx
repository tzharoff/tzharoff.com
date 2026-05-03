import { socialLinks } from "../data/portfolioData";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-cyan-300/10 bg-[#050812]">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 text-sm text-slate-400 md:grid-cols-3 md:items-center lg:px-8">
        <p>© 2026 Tony Zharoff. All rights reserved.</p>
        <Link to="/contact" className="text-center font-display text-base text-oldgold">
          Design is intent made playable.
        </Link>
        <div className="flex justify-start gap-3 md:justify-end">
          {socialLinks.map(({ label, href, Icon }) => (
            <a className="social-link" key={label} href={href} aria-label={label}>
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
