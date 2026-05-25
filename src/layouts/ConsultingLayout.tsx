import { Outlet } from "react-router-dom";
import { ConsultingNavBar } from "../components/ConsultingNavBar";
import { socialLinks } from "../data/portfolioData";

function ConsultingFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#050812]">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 text-sm text-slate-400 md:grid-cols-3 md:items-center lg:px-8">
        <p>© 2026 Tony Zharoff. All rights reserved.</p>
        <p className="text-center font-semibold text-slate-300">Workflow Automation Consulting</p>
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

export function ConsultingLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-obsidian text-slate-100">
      <ConsultingNavBar />
      <main>
        <Outlet />
      </main>
      <ConsultingFooter />
    </div>
  );
}
