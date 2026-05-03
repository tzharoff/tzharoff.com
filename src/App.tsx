import { Route, Routes } from "react-router-dom";
import { CharacterSheetCard } from "./components/CharacterSheetCard";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { CharacterSheetPage } from "./pages/CharacterSheetPage";
import { CodexPage } from "./pages/CodexPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { QuestDetailPage } from "./pages/QuestDetailPage";
import { QuestLogPage } from "./pages/QuestLogPage";
import { SkillTreePage } from "./pages/SkillTreePage";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-obsidian text-slate-100">
      <div className="ambient-grid" aria-hidden="true" />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quest-log" element={<QuestLogPage />} />
          <Route path="/quest-log/:slug" element={<QuestDetailPage />} />
          <Route path="/skill-tree" element={<SkillTreePage />} />
          <Route path="/codex" element={<CodexPage />} />
          <Route path="/character-sheet" element={<CharacterSheetPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Hero profile={<CharacterSheetCard />} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
