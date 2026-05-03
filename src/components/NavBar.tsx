import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data/portfolioData";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-obsidian/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main">
        <Link to="/" className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-oldgold">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-oldgold/50 bg-oldgold/10 text-oldgold shadow-[0_0_22px_rgba(216,180,106,0.18)]">
            TZ
          </span>
          <span className="hidden sm:block">Playable Resume</span>
        </Link>

        <button
          className="menu-toggle lg:hidden"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

        <div className={`${open ? "nav-menu open" : "nav-menu"} lg:flex`}>
          {navItems.map(({ label, href, Icon }) => (
            <NavLink
              key={label}
              to={href}
              end={href === "/"}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setOpen(false)}
            >
              <Icon size={16} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
