import { CharacterSheetCard } from "../components/CharacterSheetCard";
import { Hero } from "../components/Hero";
import { QuestLog } from "../components/QuestLog";
import { SkillTreePreview } from "../components/SkillTreePreview";

export function HomePage() {
  return (
    <>
      <Hero profile={<CharacterSheetCard />} />
      <QuestLog preview />
      <SkillTreePreview preview />
    </>
  );
}
