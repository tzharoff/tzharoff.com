import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export function PortfolioLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-obsidian text-slate-100">
      <div className="ambient-grid" aria-hidden="true" />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
