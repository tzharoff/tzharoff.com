import {
  BookOpen,
  Eye,
  FlaskConical,
  Gamepad2,
  Hammer,
  Heart,
  Lightbulb,
  Microscope,
  Palette,
  PencilRuler,
  Play,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const brand = {
  name: "Tony in the Game",
  promise: "Play games. Understand games. Build games.",
  corePromise: "Don't just make games. Understand them.",
  positioning: "Tony in the Game teaches you how games work before teaching you how to make one.",
  homepageIntro:
    "Game reviews, mechanic breakdowns, development stories, and practical game-development education with Tony Zharoff.",
  epigraph: "There's more to making games than making games.",
  closingQuestion: "The world is a game. How do you play?",
};

export type PrimaryPath = {
  label: string;
  href: string;
  purpose: string;
  Icon: LucideIcon;
};

export const primaryPaths: PrimaryPath[] = [
  {
    label: "Watch",
    href: "/watch",
    purpose: "Reviews, mechanic breakdowns, Shorts, and show episodes.",
    Icon: Play,
  },
  {
    label: "Learn",
    href: "/learn",
    purpose: "Courses, individual lessons, classroom guides, vocabulary, and exercises.",
    Icon: Lightbulb,
  },
  {
    label: "Build",
    href: "/build",
    purpose: "Tony's games, experiments, prototypes, downloads, and development journals.",
    Icon: Hammer,
  },
];

export const segments = [
  { name: "Tony Plays the Game", purpose: "Reviews, first impressions, and the player experience." },
  { name: "Tony Shows the Game", purpose: "Mechanic breakdowns and close analysis." },
  { name: "Tony Makes the Game", purpose: "Development vlogs and focused prototypes." },
  { name: "Tony Teaches the Game", purpose: "Structured lessons, classroom material, and courses." },
  { name: "Tony Breaks the Game", purpose: "Bugs, exploits, edge cases, and unusual player behavior." },
  { name: "Tony Finishes the Game", purpose: "Scope, polish, publishing, retrospectives, and completed projects." },
  { name: "Tony's Final Frame", purpose: "The episode's concise, memorable conclusion." },
];

export const episodeBeats = [
  { time: "0:00–0:15", title: "Cold open", body: "Show the mechanic, surprise, or central question immediately." },
  { time: "~5 sec", title: "Title sting", body: "Tony enters — or fails — the featured game." },
  { time: "Act 1", title: "What the player sees", body: "Establish the visible experience." },
  { time: "Act 2", title: "What the game is doing", body: "Reveal the hidden state, rules, and checks." },
  { time: "Act 3", title: "Why developers use it", body: "Connect the technique to experience and production." },
  { time: "Act 4", title: "Examples and tradeoffs", body: "Compare alternatives, costs, and edge cases." },
  { time: "Act 5", title: "What to research next", body: "Provide vocabulary and useful search directions." },
  { time: "Close", title: "Tony's Final Frame", body: "Close with one memorable idea or question." },
];

export const contentLadder = [
  { format: "Short", job: "Reveal the trick or make the invisible visible." },
  { format: "Full episode", job: "Explain how the system works and why developers use it." },
  { format: "Tutorial", job: "Demonstrate an implementation path." },
  { format: "Exercise", job: "Give the learner a problem to modify and observe." },
  { format: "Course module", job: "Connect the concept to a complete development mental model." },
  { format: "Article / classroom guide", job: "Provide definitions, discussion questions, diagrams, and research terms." },
];

export const seasonZero = {
  title: "Season Zero",
  subtitle: "Six episodes to validate the show",
  status: "In production",
  episodes: [
    "How Do We Know We're Playing a Game?",
    "The Conversation Between Player and Game",
    "Movement: The First Way We Touch a Game",
    "Collision Tells Us What Met",
    "Rules Tell Us What the Collision Means",
    "How Games Teach Without Explaining",
  ],
};

export const lessonSequence = [
  "This is what it is — give the concept its correct name and make it visible.",
  "This is how it works — reveal the relationship between its components.",
  "This is why games use it — connect the technique to player experience or production needs.",
  "This is when you need it — identify the situations in which it becomes useful.",
  "This is what it costs — discuss performance, complexity, time, usability, scope, and tradeoffs.",
  "This is how to recognize it — compare examples across games, genres, and eras.",
  "Now you can build it — the terminology and questions to research any engine's implementation.",
];

export const playLoop = [
  "Player perceives the game world.",
  "Player provides input.",
  "The game interprets the input through its rules.",
  "The game state changes.",
  "Feedback communicates the result.",
  "The player updates their mental model and decides again.",
];

export type Pillar = {
  title: string;
  description: string;
  topics: string[];
  Icon: LucideIcon;
};

export const pillars: Pillar[] = [
  {
    title: "Know the Game",
    description: "How to perceive games as systems of input, state, rules, reaction, and feedback.",
    topics: ["The player–game conversation", "Movement, collision, triggers, rules, feedback", "How games teach without explaining"],
    Icon: Gamepad2,
  },
  {
    title: "Research the Game",
    description: "How developers study references, genres, constraints, and comparable games before building.",
    topics: ["Analyzing a reference game", "Researching a mechanic instead of copying it", "How genre vocabulary improves search"],
    Icon: Microscope,
  },
  {
    title: "Feel the Game",
    description: "The relationship between implementation choices and player perception.",
    topics: ["Why a jump feels responsive", "Coyote time and input buffering", "Hit stop, camera shake, and juicy feedback"],
    Icon: Heart,
  },
  {
    title: "See the Game",
    description: "Rendering, art, interface, and technical presentation concepts made visible.",
    topics: ["Normal maps versus geometry", "Silhouettes and readable forms", "Lighting as player guidance"],
    Icon: Eye,
  },
  {
    title: "Design the Game",
    description: "Mechanics as decisions, incentives, constraints, goals, and player behavior.",
    topics: ["What makes a mechanic meaningful", "Keys, abilities, access, and world state", "Risk, reward, pacing, and mastery"],
    Icon: PencilRuler,
  },
  {
    title: "Build the Game",
    description: "Implementation concepts taught in engine-independent language first.",
    topics: ["State machines and object pooling", "Cameras and coordinate spaces", "Saving, loading, and persistent state"],
    Icon: Hammer,
  },
  {
    title: "Finish the Game",
    description: "The work beyond mechanics: scope, testing, accessibility, release, and reflection.",
    topics: ["Measure before guessing", "Scope as a design tool", "Postmortems and learning from finished work"],
    Icon: Trophy,
  },
];

export const finalFrames = [
  "Anyone can follow a tutorial. What will you make when it ends?",
  "A tutorial gives you steps. Understanding gives you choices.",
  "Don't just follow the steps. Understand why they work.",
  "Making their game is practice. Making your game requires understanding.",
  "The real test begins when the tutorial ends.",
  "The rule creates the behavior. Feedback creates the experience.",
  "Collisions tell us what objects met in the game. Rules tell us what it means.",
  "Players cannot learn from feedback they cannot perceive.",
  "Progress is a change the player can understand.",
  "Optimization begins by measuring — not guessing.",
  "If every solution has a cost, design is choosing which cost to pay.",
  "The engine knows what happened. The player needs to feel it.",
  "A mechanic is only meaningful when it changes a decision.",
  "Once you understand the system, you can build your own.",
  "Learn the language of game development. Then make any engine speak it.",
  "Once you see games through the eyes of a developer, you'll never see them the same way again.",
  "The world is a game. How do you play?",
];

export const episodeSupport = [
  "Clear learning objective",
  "Accurate engine-independent vocabulary",
  "Captions and readable on-screen text",
  "Short transcript and vocabulary list",
  "Examples from recognizable games",
  "Concise recap",
  "Search terms for continued learning",
  "Discussion questions",
  "Optional classroom exercise",
  "Sources and game credits",
];

export const classroomPrompt =
  "Choose a game you know. Identify one player input, the game's reaction, the rule producing that reaction, and the feedback communicating it.";

export const upcomingNotes = [
  {
    kind: "Short",
    title: "Why does this flat wall look 3D?",
    body: "A flat wall appears detailed because the way it reacts to light changed.",
  },
  {
    kind: "Short",
    title: "Normal maps cannot change a silhouette",
    body: "What surface detail can fake — and where the illusion breaks.",
  },
  {
    kind: "Episode",
    title: "Normal Maps vs. Geometry — What Should You Actually Use?",
    body: "Normals, baking, polygon and texture costs, silhouettes, and why the two are complementary.",
  },
  {
    kind: "Exercise",
    title: "Build two versions of one prop",
    body: "Compare cost, silhouette, lighting, and collision between a mapped and a modeled version.",
  },
  {
    kind: "Reference",
    title: "Normal mapping vocabulary and research paths",
    body: "Terminology, diagrams, tradeoffs, and engine-specific search phrases.",
  },
];

export const gagQuests = [
  { Icon: BookOpen, text: "OPTIONAL SIDE QUEST — Press the button shaped like a thumb. Observe whether anything explodes." },
  { Icon: FlaskConical, text: "PLAYER INPUT DETECTED — A comment has altered the future episode state." },
  { Icon: Palette, text: "SAVE PROGRESS? — Subscribe to make the next lesson easier to find." },
];

export const buildSlugs = [
  "brain-plunder",
  "zug-zug",
  "mummy-mayhem",
  "dispatch-simulator",
  "prototype-lab",
];
