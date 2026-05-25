import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export function ConsultingNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#070b13]/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Main"
      >
        <Link
          to="/"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-oldgold"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-oldgold/50 bg-oldgold/10 text-oldgold shadow-[0_0_22px_rgba(216,180,106,0.18)]">
            TZ
          </span>
          <span className="hidden sm:block">Tony Zharoff</span>
        </Link>

        <button
          className="menu-toggle lg:hidden"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

        <div className={`${open ? "nav-menu open" : "nav-menu"} lg:flex`}>
          {navLinks.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              end
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setOpen(false)}
            >
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
