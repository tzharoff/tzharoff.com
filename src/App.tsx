import { Navigate, Route, Routes } from "react-router-dom";
import { BrandLayout } from "./layouts/BrandLayout";
import { PortfolioLayout } from "./layouts/PortfolioLayout";
import { AboutPage } from "./pages/AboutPage";
import { BrandHomePage } from "./pages/BrandHomePage";
import { BuildPage } from "./pages/BuildPage";
import { CharacterSheetPage } from "./pages/CharacterSheetPage";
import { CodexPage } from "./pages/CodexPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { LearnPage } from "./pages/LearnPage";
import { LessonPage } from "./pages/LessonPage";
import { LessonsPage } from "./pages/LessonsPage";
import { NotesPage } from "./pages/NotesPage";
import { QuestDetailPage } from "./pages/QuestDetailPage";
import { QuestLogPage } from "./pages/QuestLogPage";
import { SkillTreePage } from "./pages/SkillTreePage";
import { WatchPage } from "./pages/WatchPage";

export default function App() {
  return (
    <Routes>
      <Route element={<BrandLayout />}>
        <Route path="/" element={<BrandHomePage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/learn/lessons" element={<LessonsPage />} />
        <Route path="/learn/lessons/:slug" element={<LessonPage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route element={<PortfolioLayout />}>
        <Route path="/portfolio" element={<HomePage />} />
        <Route path="/portfolio/quest-log" element={<QuestLogPage />} />
        <Route path="/portfolio/quest-log/:slug" element={<QuestDetailPage />} />
        <Route path="/portfolio/skill-tree" element={<SkillTreePage />} />
        <Route path="/portfolio/codex" element={<CodexPage />} />
        <Route path="/portfolio/character-sheet" element={<CharacterSheetPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
