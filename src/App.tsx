import { Navigate, Route, Routes } from "react-router-dom";
import { ConsultingLayout } from "./layouts/ConsultingLayout";
import { PortfolioLayout } from "./layouts/PortfolioLayout";
import { CharacterSheetPage } from "./pages/CharacterSheetPage";
import { CodexPage } from "./pages/CodexPage";
import { ConsultingHomePage } from "./pages/ConsultingHomePage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { QuestDetailPage } from "./pages/QuestDetailPage";
import { QuestLogPage } from "./pages/QuestLogPage";
import { SkillTreePage } from "./pages/SkillTreePage";

export default function App() {
  return (
    <Routes>
      <Route element={<ConsultingLayout />}>
        <Route path="/" element={<ConsultingHomePage />} />
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
