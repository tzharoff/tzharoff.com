import { Link, Outlet } from "react-router-dom";
import { BrandNavBar } from "../components/BrandNavBar";
import { brand } from "../data/brandData";
import { socialLinks } from "../data/portfolioData";

function BrandFooter() {
  return (
    <footer className="relative z-[1] border-t-4 border-[#060d2e] bg-[#091133]">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <p className="mb-8 text-center font-game text-2xl font-black uppercase leading-tight tracking-wide text-white md:text-3xl">
          {brand.closingQuestion}
        </p>
        <div className="grid gap-6 text-sm text-tigsky md:grid-cols-3 md:items-center">
          <p>© 2026 Tony Zharoff. All rights reserved.</p>
          <div className="flex flex-wrap justify-start gap-x-5 gap-y-2 font-bold uppercase tracking-wider md:justify-center">
            <Link to="/portfolio" className="hover:text-white">
              Portfolio
            </Link>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
          <div className="flex justify-start gap-3 md:justify-end">
            {socialLinks.map(({ label, href, Icon }) => (
              <a className="tig-social" key={label} href={href} aria-label={label}>
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function BrandLayout() {
  return (
    <div className="tig-root overflow-x-hidden font-game">
      <BrandNavBar />
      <main className="relative z-[1]">
        <Outlet />
      </main>
      <BrandFooter />
    </div>
  );
}
