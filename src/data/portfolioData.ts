import {
  BookOpen,
  Brain,
  Code2,
  Compass,
  Crown,
  FileText,
  FlaskConical,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Map,
  PenTool,
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
export type QuestCategory =
  | "Main Quest"
  | "Game Dev"
  | "Teaching"
  | "Toolsmith"
  | "Mentorship"
  | "Writing"
  | "Experiment";

export type Quest = {
  slug: string;
  number: string;
  title: string;
  category: QuestCategory;
  status: QuestStatus;
  description: string;
  objective: string;
  role: string;
  tools: string[];
  obstacles: string[];
  solution: string[];
  rewards: string[];
  unlockedSkills: string[];
  tags: string[];
  featured?: boolean;
  Icon: LucideIcon;
};

export type SkillNode = {
  id: string;
  label: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  x: number;
  y: number;
  tier: "core" | "branch" | "specialization";
  abilities: string[];
  relatedQuestSlugs: string[];
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

export const questFilters = [
  "All",
  "Main Quest",
  "Game Dev",
  "Teaching",
  "Toolsmith",
  "Mentorship",
  "Writing",
  "Experiment",
] as const;

export type QuestFilter = (typeof questFilters)[number];

export const quests: Quest[] = [
  {
    slug: "waypoint",
    number: "Q-01",
    title: "Waypoint",
    category: "Main Quest",
    status: "Active",
    description: "Build a source of truth for dispatch, vehicles, routes, and handoffs.",
    objective:
      "Build a source of truth for dispatch, vehicles, routes, gas cards, keys, wave cards, and nightly handoffs.",
    role: "Product Designer, Developer, Technical Business Analyst",
    tools: ["React", "TypeScript", "Firebase", "Firestore", "Tailwind", "Workflow mapping"],
    obstacles: [
      "Information spread across multiple documents and people",
      "Operational data drift across shifts and tools",
      "Night-shift and day-shift handoff gaps",
    ],
    solution: [
      "Centralize operational records into one quick-scan interface",
      "Create status cards and route views that mirror real dispatch decisions",
      "Model dispatch objects like routes, trucks, keys, gas cards, wave cards, and call logs",
    ],
    rewards: [
      "Clearer nightly handoffs",
      "Better visibility into operational status",
      "A stronger foundation for a source-of-truth operating system",
    ],
    unlockedSkills: ["Systems design", "Operational UX", "Firebase data modeling", "Workflow simplification"],
    tags: ["React", "Firebase", "Operations", "Dispatch", "Source of truth"],
    featured: true,
    Icon: Route,
  },
  {
    slug: "one-line-academy",
    number: "Q-02",
    title: "One Line Academy",
    category: "Teaching",
    status: "Active",
    description: "Teach game development through approachable, hands-on learning.",
    objective:
      "Create an approachable learning path that helps beginners understand game development by building small, playable things.",
    role: "Instructor, Curriculum Designer, Unity Mentor",
    tools: ["Unity", "C#", "Lesson planning", "Video instruction", "Project-based learning", "Student feedback"],
    obstacles: [
      "New developers can get overwhelmed by abstract systems before they see progress",
      "Tutorials often skip the reasoning behind design and code choices",
      "Learners need wins that feel real without hiding the craft",
    ],
    solution: [
      "Break concepts into compact lessons with immediate playable outcomes",
      "Use plain-language explanations that connect code, design, and player experience",
      "Design exercises that scale from first mechanics into stronger production habits",
    ],
    rewards: [
      "More confident beginners",
      "Reusable teaching patterns for future courses",
      "A learning brand grounded in clarity, momentum, and craft",
    ],
    unlockedSkills: ["Curriculum design", "Unity instruction", "Technical communication", "Learning experience design"],
    tags: ["Unity", "C#", "Curriculum", "Beginner education", "Video lessons"],
    featured: true,
    Icon: GraduationCap,
  },
  {
    slug: "p1-games-mentorship",
    number: "Q-03",
    title: "P1 Games Mentorship",
    category: "Mentorship",
    status: "Completed",
    description: "Guide teams toward stronger production habits and better outcomes.",
    objective:
      "Support student and early-career teams as they turn game ideas into scoped, playable, presentable projects.",
    role: "Mentor, Production Coach, Design Reviewer",
    tools: ["Unity", "Production rituals", "Playtesting", "Feedback frameworks", "Milestone planning"],
    obstacles: [
      "Teams often start with ambition larger than their production capacity",
      "Unclear ownership can slow progress and blur accountability",
      "Feedback needs to be honest without crushing momentum",
    ],
    solution: [
      "Help teams reduce ideas into playable cores and visible milestones",
      "Guide production habits around ownership, prioritization, and iteration",
      "Translate critique into concrete next actions teams could actually execute",
    ],
    rewards: [
      "Sharper project scopes",
      "Healthier team production patterns",
      "Better final presentations and stronger learning outcomes",
    ],
    unlockedSkills: ["Mentorship", "Production strategy", "Design critique", "Team facilitation"],
    tags: ["Mentorship", "Production", "Team process", "Game design", "Feedback"],
    featured: true,
    Icon: Trophy,
  },
  {
    slug: "brain-plunder",
    number: "Q-04",
    title: "Brain Plunder",
    category: "Game Dev",
    status: "Prototype",
    description: "A cartoony zombie pirate clicker adventure with crew-building systems.",
    objective:
      "Prototype a playful zombie pirate clicker where progression, crew collection, and upgrades create a satisfying loop.",
    role: "Game Designer, Unity Developer, Systems Designer",
    tools: ["Unity", "C#", "Game economy design", "Prototype art direction", "Progression systems"],
    obstacles: [
      "Clicker systems need simple rules that still feel rewarding over time",
      "The theme needed to stay funny and readable instead of noisy",
      "Crew and upgrade systems had to add depth without slowing the core loop",
    ],
    solution: [
      "Define a compact core loop around plundering, upgrading, and crew growth",
      "Use cartoony tone and readable feedback to keep interactions light",
      "Prototype upgrade paths that could expand into a larger idle adventure structure",
    ],
    rewards: [
      "A distinctive game concept with clear progression hooks",
      "Reusable thinking around idle/clicker economies",
      "A prototype foundation for future systems and visual polish",
    ],
    unlockedSkills: ["Progression design", "Unity prototyping", "Game economy tuning", "Playful theme development"],
    tags: ["Unity", "Prototype", "Idle systems", "Progression", "Game economy"],
    featured: true,
    Icon: Brain,
  },
  {
    slug: "portfolio-codex",
    number: "Q-05",
    title: "Portfolio Codex",
    category: "Toolsmith",
    status: "Active",
    description: "Shape a personal site into a navigable RPG-inspired portfolio system.",
    objective:
      "Turn a personal portfolio into a structured, memorable interface that communicates projects, skills, and identity quickly.",
    role: "Frontend Developer, UX Designer, Content Systems Designer",
    tools: ["React", "TypeScript", "Tailwind", "React Router", "Lucide", "Responsive design"],
    obstacles: [
      "Game-inspired presentation can become gimmicky if navigation stops feeling normal",
      "Portfolio content needs hierarchy without flattening the personality",
      "Reusable components need to support future pages and deeper case studies",
    ],
    solution: [
      "Create a routed site structure around Main Menu, Quest Log, Skill Tree, Codex, and Character Sheet",
      "Build reusable panels, quest cards, and profile elements with consistent visual rules",
      "Use the game metaphor as organization and tone rather than hiding information behind mechanics",
    ],
    rewards: [
      "A distinctive first impression",
      "Expandable structure for more projects and writing",
      "A portfolio that feels personal while staying professional",
    ],
    unlockedSkills: ["Design systems", "React routing", "Content architecture", "Interactive portfolio UX"],
    tags: ["Portfolio", "React", "Design system", "Routing", "Game UI"],
    Icon: Code2,
  },
  {
    slug: "handoff-playbook",
    number: "Q-06",
    title: "Handoff Playbook",
    category: "Writing",
    status: "Prototype",
    description: "Document repeatable handoff rituals for operational teams with messy shift boundaries.",
    objective:
      "Create a practical writing system for cleaner nightly updates, fewer missed details, and better cross-shift continuity.",
    role: "Technical Writer, Process Mapper, Operations Analyst",
    tools: ["Process documentation", "Workflow mapping", "Checklists", "Plain-language writing"],
    obstacles: [
      "Critical operational knowledge often lives in memory or chat threads",
      "Teams need documentation that is fast enough to use during real work",
      "Shift handoffs can bury exceptions, risks, and next actions",
    ],
    solution: [
      "Turn recurring handoff details into a reusable brief format",
      "Separate status, blockers, exceptions, and next actions into quick-scan sections",
      "Write templates that support accountability without adding heavy admin work",
    ],
    rewards: [
      "Cleaner shift transitions",
      "Less dependency on tribal knowledge",
      "Reusable writing patterns for operations tools",
    ],
    unlockedSkills: ["Technical writing", "Operational clarity", "Checklist design", "Process simplification"],
    tags: ["Writing", "Operations", "Documentation", "Handoffs", "Checklists"],
    Icon: FileText,
  },
  {
    slug: "unity-lesson-forge",
    number: "Q-07",
    title: "Unity Lesson Forge",
    category: "Teaching",
    status: "Prototype",
    description: "Design modular Unity lesson blocks that can become tutorials, workshops, or course chapters.",
    objective:
      "Build a reusable teaching kit for turning Unity concepts into small lessons with clear outcomes and useful exercises.",
    role: "Curriculum Designer, Unity Instructor, Learning Experience Designer",
    tools: ["Unity", "C#", "Lesson templates", "Exercise design", "Rubrics"],
    obstacles: [
      "Lessons need to be small enough to finish but meaningful enough to remember",
      "Students arrive with different levels of coding confidence",
      "Exercises must reveal design reasoning, not just code syntax",
    ],
    solution: [
      "Create a repeatable lesson pattern around concept, build step, playtest, and reflection",
      "Pair every technical idea with a visible game-design outcome",
      "Use optional challenge tiers so learners can keep advancing without getting stuck",
    ],
    rewards: [
      "Faster course planning",
      "More consistent learner experience",
      "A library of reusable Unity teaching modules",
    ],
    unlockedSkills: ["Instructional design", "Unity pedagogy", "Exercise scaffolding", "Assessment design"],
    tags: ["Unity", "Teaching", "Curriculum", "C#", "Workshops"],
    Icon: GraduationCap,
  },
  {
    slug: "prototype-lab",
    number: "Q-08",
    title: "Prototype Lab",
    category: "Experiment",
    status: "Prototype",
    description: "A sandbox for testing small interaction ideas, UI loops, and game-feel experiments.",
    objective:
      "Maintain a lightweight lab for exploring mechanics, microinteractions, and interface ideas before they become full projects.",
    role: "Prototyper, Interaction Designer, Systems Tester",
    tools: ["Unity", "React", "CSS", "Rapid prototyping", "Playtest notes"],
    obstacles: [
      "Good ideas can become too large before their core value is proven",
      "Small interaction tests need enough structure to produce useful decisions",
      "Experiments should be disposable without losing what they teach",
    ],
    solution: [
      "Keep experiments scoped around one question or feel target",
      "Record what worked, what failed, and what should be reused",
      "Move promising interaction patterns into production projects only after validation",
    ],
    rewards: [
      "Faster creative iteration",
      "Lower-risk exploration",
      "A growing library of tested interaction patterns",
    ],
    unlockedSkills: ["Rapid prototyping", "Interaction testing", "Game feel", "Experiment design"],
    tags: ["Prototype", "Experiment", "Game feel", "UI", "Iteration"],
    Icon: FlaskConical,
  },
  {
    slug: "systems-design-notes",
    number: "Q-09",
    title: "Systems Design Notes",
    category: "Writing",
    status: "Active",
    description: "Write short essays about systems, tools, games, and how people understand complexity.",
    objective:
      "Create a body of writing that explains how systems become clearer through good interfaces, rules, and teaching.",
    role: "Writer, Systems Designer, Technical Communicator",
    tools: ["Essays", "Diagrams", "Examples", "Revision", "Editorial planning"],
    obstacles: [
      "Systems writing can become abstract without concrete examples",
      "Professional readers need useful takeaways, not just theory",
      "The voice needs to feel thoughtful without becoming dense",
    ],
    solution: [
      "Anchor each piece around one practical system design idea",
      "Use games, operations, and teaching examples to make patterns visible",
      "Keep posts short enough to read and specific enough to apply",
    ],
    rewards: [
      "Clearer public point of view",
      "Reusable language for portfolio case studies",
      "A stronger bridge between games, tools, and teaching",
    ],
    unlockedSkills: ["Essay writing", "Systems thinking", "Editorial strategy", "Concept translation"],
    tags: ["Writing", "Systems", "UX", "Games", "Teaching"],
    Icon: PenTool,
  },
  {
    slug: "mentor-sprint-kit",
    number: "Q-10",
    title: "Mentor Sprint Kit",
    category: "Mentorship",
    status: "Prototype",
    description: "A lightweight kit for helping small game teams plan, review, and recover momentum.",
    objective:
      "Create reusable sprint rituals and review prompts that help teams turn uncertainty into concrete production moves.",
    role: "Mentor, Production Designer, Team Facilitator",
    tools: ["Sprint planning", "Retrospectives", "Review prompts", "Milestone boards", "Playtest notes"],
    obstacles: [
      "Early teams can confuse effort with progress",
      "Milestones often lack visible acceptance criteria",
      "Teams need guidance that respects their ownership of the project",
    ],
    solution: [
      "Design sprint prompts around playable outcomes and decision checkpoints",
      "Use review rituals that expose blockers, risks, and next actions",
      "Keep the kit adaptable for different team sizes and project scopes",
    ],
    rewards: [
      "More focused development cycles",
      "Better critique conversations",
      "Repeatable mentorship structure",
    ],
    unlockedSkills: ["Production coaching", "Team rituals", "Milestone design", "Mentorship systems"],
    tags: ["Mentorship", "Production", "Sprints", "Teams", "Games"],
    Icon: Trophy,
  },
  {
    slug: "waybill",
    number: "Q-11",
    title: "Waybill",
    category: "Main Quest",
    status: "Active",
    description: "A dispatch-focused waybill system for tracking route readiness and handoff details.",
    objective:
      "Create a practical waybill workflow that helps dispatch teams track route assignments, package flow, vehicle readiness, and shift handoffs from one place.",
    role: "Product Designer, Developer, Operations Analyst",
    tools: ["React", "TypeScript", "Firebase", "Firestore", "Tailwind", "Operations modeling"],
    obstacles: [
      "Route information changes quickly and needs to stay visible",
      "Paper or scattered notes can make exceptions hard to follow",
      "Dispatch workflows need speed more than decorative complexity",
    ],
    solution: [
      "Model waybills around the actual objects dispatchers use during a shift",
      "Surface route, vehicle, package, and exception details in quick-scan views",
      "Connect handoff notes to the operational record instead of leaving them loose",
    ],
    rewards: [
      "Faster route readiness checks",
      "Cleaner handoffs between dispatch roles",
      "A stronger operational layer for future Waypoint modules",
    ],
    unlockedSkills: ["Operational modeling", "Data-first UX", "Dispatch systems", "Workflow design"],
    tags: ["Dispatch", "Waybill", "React", "Firebase", "Operations"],
    featured: true,
    Icon: Route,
  },
  {
    slug: "breakroom-channel",
    number: "Q-12",
    title: "Breakroom Channel",
    category: "Toolsmith",
    status: "Prototype",
    description: "A lightweight internal channel concept for shift updates, reminders, and team signal.",
    objective:
      "Design a focused communication space for sharing breakroom updates, quick reminders, and team notices without burying them in noisy chat streams.",
    role: "UX Designer, Process Designer, Internal Tools Builder",
    tools: ["Content design", "Channel strategy", "Team workflows", "Notification patterns"],
    obstacles: [
      "Important team messages can disappear inside general chat",
      "Updates need to be timely without becoming another attention drain",
      "Different shifts need the same source of truth at different times",
    ],
    solution: [
      "Separate durable announcements from casual conversation",
      "Structure posts around short updates, owner, timing, and action needed",
      "Use a simple channel format that supports scanning before and after a shift",
    ],
    rewards: [
      "Less repeated communication",
      "Clearer team reminders",
      "A reusable pattern for low-friction internal updates",
    ],
    unlockedSkills: ["Communication design", "Internal tooling", "Information hierarchy", "Team operations"],
    tags: ["Internal tools", "Comms", "Operations", "Shift updates", "UX"],
    Icon: BookOpen,
  },
  {
    slug: "usw-weather-traffic-channel",
    number: "Q-13",
    title: "USW Weather / Traffic Channel",
    category: "Toolsmith",
    status: "Prototype",
    description: "A status channel concept for route-impacting weather, traffic, and field conditions.",
    objective:
      "Centralize weather, traffic, and road-condition awareness so operations teams can react to route risks earlier.",
    role: "Operations Analyst, UX Designer, Systems Mapper",
    tools: ["Workflow mapping", "Alert design", "Route context", "Status communication"],
    obstacles: [
      "Route-impacting conditions can arrive from multiple sources",
      "Not every weather or traffic update deserves the same urgency",
      "Drivers and dispatchers need shared context without information overload",
    ],
    solution: [
      "Organize updates by impact level, affected area, and likely operational action",
      "Distinguish passive awareness from updates that require dispatch decisions",
      "Frame the channel around route readiness and exception handling",
    ],
    rewards: [
      "Earlier visibility into route risks",
      "More consistent weather and traffic communication",
      "A stronger habit of turning outside signals into operational decisions",
    ],
    unlockedSkills: ["Alert design", "Operational triage", "Risk communication", "Route-aware UX"],
    tags: ["Weather", "Traffic", "Operations", "Routes", "Alerts"],
    Icon: Map,
  },
  {
    slug: "spotless-ops",
    number: "Q-14",
    title: "Spotless Ops",
    category: "Toolsmith",
    status: "Prototype",
    description: "An operations concept for tracking cleaning workflows, task ownership, and site readiness.",
    objective:
      "Build a clearer operations layer for cleaning teams that need task visibility, site status, and repeatable accountability.",
    role: "Product Designer, Workflow Mapper, Tool Builder",
    tools: ["React", "Task modeling", "Status boards", "Checklist design", "Service workflows"],
    obstacles: [
      "Cleaning work can be invisible until something is missed",
      "Recurring tasks need structure without becoming heavy admin work",
      "Teams need simple ownership signals across locations and shifts",
    ],
    solution: [
      "Create task cards organized by site, status, owner, and priority",
      "Use checklist patterns for recurring work and exception notes for unusual issues",
      "Design views that help managers see readiness without interrupting field work",
    ],
    rewards: [
      "Clearer task accountability",
      "Better site-readiness visibility",
      "A flexible pattern for service operations tooling",
    ],
    unlockedSkills: ["Service design", "Checklist UX", "Task systems", "Operational accountability"],
    tags: ["Operations", "Cleaning", "Task tracking", "Service design", "Toolsmith"],
    Icon: Sparkles,
  },
  {
    slug: "synnecticon",
    number: "Q-15",
    title: "Synnecticon",
    category: "Experiment",
    status: "Prototype",
    description: "A speculative systems concept about connecting ideas, tools, and team knowledge.",
    objective:
      "Explore a knowledge-interface concept that helps people connect related ideas, project notes, and operational decisions across a shared workspace.",
    role: "Systems Designer, UX Prototyper, Concept Designer",
    tools: ["Information architecture", "Node maps", "Concept modeling", "UX prototyping"],
    obstacles: [
      "Knowledge systems can become too abstract to use during real work",
      "Connections need meaning, not just visual lines between notes",
      "The interface has to invite exploration without slowing retrieval",
    ],
    solution: [
      "Frame connected knowledge as practical trails between decisions, artifacts, and outcomes",
      "Prototype node and relationship patterns around real project examples",
      "Keep the concept grounded in retrieval, explanation, and reuse",
    ],
    rewards: [
      "A clearer model for connected knowledge tools",
      "Reusable thinking for codex-style portfolio pages",
      "A test bed for future visual knowledge systems",
    ],
    unlockedSkills: ["Knowledge design", "Information architecture", "Concept prototyping", "Systems thinking"],
    tags: ["Knowledge graph", "Experiment", "Systems", "UX", "Concept"],
    Icon: TreePine,
  },
  {
    slug: "moms-candy-apples-website",
    number: "Q-16",
    title: "Mom's Candy Apples Website",
    category: "Toolsmith",
    status: "Completed",
    description: "A small business website concept for showcasing products, ordering, and seasonal offerings.",
    objective:
      "Create a warm, easy-to-scan website for a candy apple business that makes products, ordering info, and seasonal updates feel polished.",
    role: "Frontend Developer, Visual Designer, Small Business Consultant",
    tools: ["React", "Responsive design", "Content layout", "Product presentation", "Brand polish"],
    obstacles: [
      "Food product pages need to feel appetizing while staying practical",
      "Small business sites need clear contact and ordering paths",
      "Seasonal products require content that can be updated without redesigning the page",
    ],
    solution: [
      "Design product sections around clear photos, flavor names, and short descriptions",
      "Keep ordering and contact actions visible across desktop and mobile",
      "Structure content so seasonal offerings can rotate in easily",
    ],
    rewards: [
      "A more professional storefront presence",
      "Cleaner product communication",
      "A reusable small-business site pattern",
    ],
    unlockedSkills: ["Small business UX", "Product presentation", "Responsive layout", "Brand storytelling"],
    tags: ["Website", "Small business", "React", "Products", "Responsive"],
    Icon: PenTool,
  },
  {
    slug: "dispatch-simulator",
    number: "Q-17",
    title: "Dispatch Simulator",
    category: "Experiment",
    status: "Prototype",
    description: "A training-game concept for practicing dispatch decisions under operational pressure.",
    objective:
      "Prototype a simulator that turns dispatch scenarios into playable decision loops for training, reflection, and process improvement.",
    role: "Game Designer, Systems Designer, Training Experience Designer",
    tools: ["Unity", "Scenario design", "Operations modeling", "Decision trees", "Training UX"],
    obstacles: [
      "Real dispatch work has messy exceptions that are hard to teach from static docs",
      "Training needs pressure and consequence without punishing learners",
      "Scenarios must feel realistic while remaining manageable",
    ],
    solution: [
      "Model dispatch situations as timed decisions with visible tradeoffs",
      "Use scenario branches to teach route, vehicle, staffing, and handoff consequences",
      "Turn post-run feedback into coaching notes instead of simple pass/fail scoring",
    ],
    rewards: [
      "A more engaging operations training format",
      "Reusable scenario design for real workplace learning",
      "A bridge between game systems and business operations",
    ],
    unlockedSkills: ["Training simulation", "Scenario design", "Decision modeling", "Serious games"],
    tags: ["Simulator", "Dispatch", "Training", "Unity", "Operations"],
    featured: true,
    Icon: Swords,
  },
  {
    slug: "zug-zug",
    number: "Q-18",
    title: "Zug Zug",
    category: "Game Dev",
    status: "Prototype",
    description: "A playful prototype exploring quick commands, worker flow, and satisfying task loops.",
    objective:
      "Explore a compact game loop where simple commands, resource choices, and worker timing create readable strategic pressure.",
    role: "Game Designer, Prototype Developer, Systems Designer",
    tools: ["Unity", "C#", "Prototype loops", "Resource systems", "Playtest notes"],
    obstacles: [
      "Command systems need to feel immediate instead of fiddly",
      "Small prototypes can lose clarity if too many systems arrive at once",
      "Worker feedback has to make cause and effect obvious",
    ],
    solution: [
      "Focus the prototype around a small number of readable worker actions",
      "Tune timing and feedback so task completion feels satisfying",
      "Keep resource choices simple enough to understand but flexible enough to expand",
    ],
    rewards: [
      "A clear foundation for worker-management mechanics",
      "Better instincts around command feedback",
      "Reusable prototype notes for future systems games",
    ],
    unlockedSkills: ["Worker systems", "Input feedback", "Prototype scoping", "Resource loop design"],
    tags: ["Game Dev", "Unity", "Prototype", "Workers", "Systems"],
    Icon: Wrench,
  },
  {
    slug: "mummy-mayhem",
    number: "Q-19",
    title: "Mummy Mayhem",
    category: "Game Dev",
    status: "Prototype",
    description: "An arcade-style game prototype built around chaos, timing, and readable enemy behavior.",
    objective:
      "Prototype a playful arcade encounter where mummy movement, player timing, and escalating pressure create quick replayable sessions.",
    role: "Game Designer, Unity Developer, Gameplay Prototyper",
    tools: ["Unity", "C#", "Enemy behavior", "Level pacing", "Game feel tuning"],
    obstacles: [
      "Arcade chaos needs to stay readable at speed",
      "Enemy behavior must be simple enough to learn and varied enough to stay engaging",
      "Short-session games need fast restarts and immediate feedback",
    ],
    solution: [
      "Design enemy patterns around visible tells and learnable timing",
      "Use compact arenas and escalation rules to create pressure quickly",
      "Tune feedback moments so mistakes feel fair and recovery feels possible",
    ],
    rewards: [
      "A replayable arcade prototype direction",
      "Sharper enemy-behavior design practice",
      "Reusable pacing ideas for small action games",
    ],
    unlockedSkills: ["Enemy AI basics", "Arcade pacing", "Game feel", "Encounter design"],
    tags: ["Game Dev", "Unity", "Arcade", "Prototype", "Enemies"],
    Icon: Brain,
  },
  {
    slug: "kotlin-android-bootcamp",
    number: "Q-20",
    title: "Kotlin + Android Bootcamp",
    category: "Teaching",
    status: "Completed",
    description: "A bootcamp learning path for building Android fundamentals with Kotlin.",
    objective:
      "Help learners build practical Android foundations through Kotlin syntax, app structure, interface basics, and project-based exercises.",
    role: "Instructor, Curriculum Designer, Technical Mentor",
    tools: ["Kotlin", "Android Studio", "Jetpack basics", "Lesson planning", "Hands-on exercises"],
    obstacles: [
      "Mobile development introduces language, tooling, and platform concepts at the same time",
      "Learners need confidence with setup before they can focus on app logic",
      "Exercises need to connect fundamentals to visible app behavior",
    ],
    solution: [
      "Sequence lessons from Kotlin basics into small Android interface tasks",
      "Use guided projects to connect syntax, state, layout, and user interaction",
      "Build repetition into exercises so students can recognize patterns across apps",
    ],
    rewards: [
      "Stronger mobile-development foundations",
      "Clearer confidence with Android Studio and Kotlin",
      "Reusable bootcamp structure for future technical teaching",
    ],
    unlockedSkills: ["Android instruction", "Kotlin fundamentals", "Mobile UX basics", "Technical mentoring"],
    tags: ["Kotlin", "Android", "Teaching", "Bootcamp", "Mobile"],
    Icon: GraduationCap,
  },
];

export const skillTreeNodes: SkillNode[] = [
  {
    id: "root",
    label: "Design Engineer",
    title: "Design Engineer",
    description:
      "The central build: connecting game design, teaching, frontend tools, and operations systems into practical products.",
    Icon: Crown,
    x: 50,
    y: 14,
    tier: "core",
    abilities: [
      "Turn messy systems into readable interfaces",
      "Translate real workflows into product features",
      "Balance playful presentation with practical usability",
    ],
    relatedQuestSlugs: ["waypoint", "portfolio-codex", "dispatch-simulator"],
  },
  {
    id: "game-dev",
    label: "Game Development",
    title: "Game Development",
    description:
      "Gameplay prototypes, progression loops, enemy behavior, game-feel experiments, and readable player-facing systems.",
    Icon: Swords,
    x: 15,
    y: 58,
    tier: "branch",
    abilities: [
      "Prototype mechanics quickly",
      "Design readable core loops",
      "Tune feedback, pacing, and player motivation",
    ],
    relatedQuestSlugs: ["brain-plunder", "zug-zug", "mummy-mayhem", "prototype-lab"],
  },
  {
    id: "teaching",
    label: "Teaching",
    title: "Teaching & Curriculum",
    description:
      "Project-based lessons, technical mentoring, and learning paths that help people build confidence through visible progress.",
    Icon: GraduationCap,
    x: 32,
    y: 80,
    tier: "branch",
    abilities: [
      "Break complex ideas into approachable lessons",
      "Create exercises with immediate playable outcomes",
      "Coach learners through setup, practice, and iteration",
    ],
    relatedQuestSlugs: ["one-line-academy", "unity-lesson-forge", "kotlin-android-bootcamp"],
  },
  {
    id: "tools",
    label: "Web & Tools",
    title: "Web & Tools",
    description:
      "Frontend systems, internal tools, dashboards, and small-business websites built around clarity and useful action.",
    Icon: Code2,
    x: 68,
    y: 80,
    tier: "branch",
    abilities: [
      "Build reusable React components",
      "Model operational data for quick decisions",
      "Create interfaces that reduce friction",
    ],
    relatedQuestSlugs: [
      "waypoint",
      "waybill",
      "spotless-ops",
      "portfolio-codex",
      "moms-candy-apples-website",
    ],
  },
  {
    id: "systems",
    label: "Systems Design",
    title: "Systems Design",
    description:
      "Workflow mapping, operational clarity, knowledge structures, and decision systems for complex real-world problems.",
    Icon: Wrench,
    x: 85,
    y: 58,
    tier: "branch",
    abilities: [
      "Map real-world workflows into understandable models",
      "Identify data drift and handoff failure points",
      "Design source-of-truth systems around how people actually work",
    ],
    relatedQuestSlugs: [
      "waypoint",
      "dispatch-simulator",
      "handoff-playbook",
      "systems-design-notes",
      "synnecticon",
      "usw-weather-traffic-channel",
    ],
  },
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
