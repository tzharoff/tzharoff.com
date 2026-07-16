import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Watch", href: "/watch" },
  { label: "Learn", href: "/learn" },
  { label: "Build", href: "/build" },
  { label: "Tony's Notes", href: "/notes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function BrandNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-[#060d2e] bg-[#101f5e]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8" aria-label="Main">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl border-[3px] border-[#060d2e] bg-tigred text-white shadow-[0_4px_0_#060d2e]">
            <Gamepad2 size={20} aria-hidden="true" />
          </span>
          <span className="font-game text-sm font-black uppercase leading-none tracking-widest text-white">
            Tony
            <span className="block text-[0.62rem] tracking-[0.3em] text-tigsky">in the</span>
            <span className="text-[#ff8a8f]">Game</span>
          </span>
        </Link>

        <button
          className="tig-menu-toggle lg:hidden"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

        <div className={`${open ? "tig-nav-menu open" : "tig-nav-menu"} lg:flex`}>
          {navLinks.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              className={({ isActive }) => (isActive ? "tig-nav-link active" : "tig-nav-link")}
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
