import {
  BookOpen,
  Brain,
  Code2,
  Compass,
  Crown,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Map,
  Route,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Swords,
  TreePine,
  Trophy,
  Wrench,
  Youtube,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type QuestStatus = "Active" | "Completed" | "Prototype";

export type Quest = {
  number: string;
  title: string;
  category: string;
  status: QuestStatus;
  description: string;
  Icon: LucideIcon;
};

export type SkillNode = {
  id: string;
  label: string;
  Icon: LucideIcon;
  x: number;
  y: number;
};

export const navItems = [
  { label: "Main Menu", href: "/", Icon: Compass },
  { label: "Quest Log", href: "/quest-log", Icon: ScrollText },
  { label: "Skill Tree", href: "/skill-tree", Icon: TreePine },
  { label: "Codex", href: "/codex", Icon: BookOpen },
  { label: "Character Sheet", href: "/character-sheet", Icon: ShieldCheck },
  { label: "Contact", href: "/contact", Icon: Mail },
];

export const coreSkills = ["Unity", "React", "Firebase", "UX", "Curriculum", "Systems"];

export const quests: Quest[] = [
  {
    number: "Q-01",
    title: "Waypoint",
    category: "Operations Tool",
    status: "Active",
    description: "Build a source of truth for dispatch, vehicles, routes, and handoffs.",
    Icon: Route,
  },
  {
    number: "Q-02",
    title: "One Line Academy",
    category: "Education",
    status: "Active",
    description: "Teach game development through approachable, hands-on learning.",
    Icon: GraduationCap,
  },
  {
    number: "Q-03",
    title: "P1 Games Mentorship",
    category: "Mentorship",
    status: "Completed",
    description: "Guide teams toward stronger production habits and better outcomes.",
    Icon: Trophy,
  },
  {
    number: "Q-04",
    title: "Brain Plunder",
    category: "Game Dev",
    status: "Prototype",
    description: "A cartoony zombie pirate clicker adventure with crew-building systems.",
    Icon: Brain,
  },
];

export const skillTreeNodes: SkillNode[] = [
  { id: "root", label: "Design Engineer", Icon: Crown, x: 50, y: 18 },
  { id: "game", label: "Game Development", Icon: Swords, x: 17, y: 62 },
  { id: "teaching", label: "Teaching", Icon: GraduationCap, x: 39, y: 76 },
  { id: "tools", label: "Web & Tools", Icon: Code2, x: 61, y: 76 },
  { id: "systems", label: "Systems Design", Icon: Wrench, x: 83, y: 62 },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/", Icon: Github },
  { label: "YouTube", href: "https://www.youtube.com/", Icon: Youtube },
  { label: "Email", href: "mailto:hello@example.com", Icon: Mail },
];

export const heroHighlights = [
  "Game systems with readable rules",
  "Learning paths that invite momentum",
  "Operational tools that reduce friction",
  "Interfaces that make decisions clearer",
];

export const profileStats = [
  { label: "Class", value: "Design Engineer" },
  { label: "Subclass", value: "Unity Mentor / Toolsmith" },
  { label: "Focus", value: "Playful systems for serious work" },
];

export const decorativeRunes = [Sparkles, Map, ShieldCheck];

export const codexEntries = [
  {
    title: "Game Development",
    body: "Unity gameplay systems, progression loops, prototype design, and readable player-facing rules.",
  },
  {
    title: "Teaching Systems",
    body: "Hands-on curriculum, mentorship rituals, and lessons that help new developers build momentum.",
  },
  {
    title: "Operational Tools",
    body: "Dashboards, workflow maps, dispatch tools, and source-of-truth systems for busy teams.",
  },
  {
    title: "Technical Analysis",
    body: "Requirements, process clarity, systems thinking, and business logic translated into useful products.",
  },
];
