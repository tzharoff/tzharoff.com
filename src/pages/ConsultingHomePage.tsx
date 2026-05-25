import {
  ArrowUpRight,
  CheckCircle2,
  GitBranch,
  LayoutDashboard,
  Map,
  MessageSquare,
  Search,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { quests } from "../data/portfolioData";

const automationSlugs = ["waypoint", "waybill", "spotless-ops", "breakroom-channel", "usw-weather-traffic-channel"];
const automationProjects = automationSlugs
  .map((slug) => quests.find((q) => q.slug === slug))
  .filter((q): q is NonNullable<typeof q> => Boolean(q));

const painPoints = [
  "Your team runs on spreadsheets that nobody fully trusts",
  "Critical info lives in one person's head — and they're off today",
  "Handoffs between shifts keep breaking down in the same spot",
  "You've outgrown your current tools but custom software feels too big a leap",
];

const services = [
  {
    Icon: Search,
    title: "A clear picture of where things break",
    body: "Before anything gets built, we map how your operation actually runs. You'll see exactly where information slips, who's carrying too much in their head, and what a fix would look like.",
  },
  {
    Icon: Map,
    title: "Handoffs your team can run without you",
    body: "The knowledge that lives in one person's head gets turned into something the whole team can use — checklists, handoff docs, and playbooks written for how shifts actually work.",
  },
  {
    Icon: LayoutDashboard,
    title: "One place for the info your team needs",
    body: "A custom tool built around your real workflow — not a generic SaaS you'll spend months configuring. Something your team actually opens because it shows them exactly what they need.",
  },
  {
    Icon: GitBranch,
    title: "The repetitive stuff, handled",
    body: "The manual updates, the copy-paste between systems, the reminders nobody remembers to send — automated so your team can focus on the work that actually needs a human.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "You talk, I listen",
    body: "We start with a conversation about how things run today — including the parts that are held together with habit and goodwill. No intake forms.",
  },
  {
    number: "02",
    title: "I find the gaps",
    body: "I map the actual workflow and identify where things slip. You get a clear diagnosis — not a vague recommendation to \"improve your processes.\"",
  },
  {
    number: "03",
    title: "We build what the problem needs",
    body: "Sometimes that's a doc. Sometimes it's a dashboard. Sometimes it's a few automations. We build the right thing, not the most impressive thing.",
  },
  {
    number: "04",
    title: "Your team can run it without me",
    body: "Everything gets documented and handed off clean. The goal is a team that doesn't need me on speed dial — a system that works even when I'm not around.",
  },
];

const outcomes = [
  "Handoffs that don't require a 10-minute debrief to survive",
  "One place to check status instead of three group chats",
  "New people who can get up to speed without a week of shadowing",
  "An operation that doesn't fall apart when the wrong person is out",
];

export function ConsultingHomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              <Zap size={13} aria-hidden="true" />
              Workflow Automation Consulting
            </div>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-slate-100 md:text-5xl lg:text-6xl">
              You know what's breaking.<br />
              You just haven't had<br />
              time to fix it.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
              I help small operations teams close the gaps — the handoffs that keep missing,
              the info that lives in one person's head, the tools everyone works around instead of with.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="game-button primary">
                Let's Talk
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <a href="#projects" className="game-button secondary">
                See the Work
              </a>
            </div>
          </div>
          <div className="relative hidden overflow-hidden rounded-2xl lg:block">
            <img
              src="https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?auto=format&fit=crop&w=900&q=80"
              alt="Operations dashboard showing team metrics and workflow data"
              className="h-[480px] w-full object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────── */}
      <section className="border-y border-white/8 bg-[#080d18]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-10 max-w-xl">
            <p className="section-kicker mb-3">
              <MessageSquare size={16} aria-hidden="true" />
              The Gaps Don't Announce Themselves
            </p>
            <h2 className="font-display text-2xl font-bold text-slate-100 md:text-3xl">
              Most operational friction isn't dramatic. It just compounds quietly until someone drops the ball.
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <li key={point} className="panel flex items-start gap-3 rounded-xl p-5 text-sm text-slate-300">
                <span className="mt-0.5 shrink-0 text-lg leading-none text-oldgold">✗</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-lg text-slate-400">
            These aren't signs of a bad team. They're signs of a team that's outgrown the way
            it's been managing information.
          </p>
        </div>
      </section>

      {/* ── VISUAL STRIP ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              id: "1677506048148-0c914dd8197b",
              label: "The current state",
              caption: "Sticky notes, group chats, and spreadsheets holding it all together",
            },
            {
              id: "1532622785990-d2c36a76f5a6",
              label: "The work",
              caption: "Mapping how things actually flow and where the gaps are",
            },
            {
              id: "1551288049-bebda4e38f71",
              label: "The result",
              caption: "One place for the information your team needs to operate",
            },
          ].map(({ id, label, caption }) => (
            <figure key={id} className="group overflow-hidden rounded-xl">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`}
                  alt={caption}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b13]/80 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-slate-300 backdrop-blur-sm">
                  {label}
                </span>
              </div>
              <figcaption className="mt-3 text-sm text-slate-500">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-12 max-w-xl">
          <p className="section-kicker mb-3">
            <Workflow size={16} aria-hidden="true" />
            What You Get
          </p>
          <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl">
            The right fix for where things are actually breaking.
          </h2>
          <p className="mt-3 text-slate-400">
            Not every problem needs a custom app. Not every problem is solved by a better spreadsheet.
            We figure out which one you actually need.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ Icon, title, body }) => (
            <article key={title} className="panel rounded-xl p-7">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/8 text-cyan-400">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="border-t border-white/8 bg-[#080d18]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-12 max-w-xl">
            <p className="section-kicker mb-3">
              <Wrench size={16} aria-hidden="true" />
              How It Works
            </p>
            <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl">
              Straight from "here's what's broken" to something that works.
            </h2>
            <p className="mt-3 text-slate-400">
              No discovery questionnaires the size of an RFP. No six-week kickoff before anything gets built.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ number, title, body }) => (
              <article key={number} className="panel rounded-xl p-6">
                <span className="mb-4 block font-display text-3xl font-bold text-oldgold/40">{number}</span>
                <h3 className="mb-2 font-semibold text-slate-100">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-8 max-w-xl">
          <p className="section-kicker mb-3">
            <CheckCircle2 size={16} aria-hidden="true" />
            What Changes
          </p>
          <h2 className="font-display text-2xl font-bold text-slate-100 md:text-3xl">
            The goal isn't a better tool. It's an operation that doesn't depend on heroics.
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-cyan-400" aria-hidden="true" />
              {outcome}
            </li>
          ))}
        </ul>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────── */}
      <section id="projects" className="border-t border-white/8 bg-[#080d18]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-kicker mb-3">
                <LayoutDashboard size={16} aria-hidden="true" />
                The Work
              </p>
              <h2 className="font-display text-3xl font-bold text-slate-100 md:text-4xl">Projects</h2>
              <p className="mt-2 text-slate-400">
                Real operational problems. Real tools built to solve them.
              </p>
            </div>
            <Link to="/portfolio" className="game-button ghost text-sm">
              Full Portfolio
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {automationProjects.map((project) => (
              <article key={project.slug} className="panel flex flex-col rounded-xl p-6">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg border border-oldgold/30 bg-oldgold/8 text-oldgold">
                  <project.Icon size={22} aria-hidden="true" />
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {project.category}
                </p>
                <h3 className="mb-2 text-lg font-semibold text-slate-100">{project.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-0.5 text-xs text-slate-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/portfolio/quest-log/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  View Project
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex items-center justify-center lg:min-h-80">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-oldgold/20 blur-2xl" aria-hidden="true" />
              <img
                src="/tony.png"
                alt="Tony Zharoff"
                className="relative w-64 drop-shadow-2xl lg:w-80"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="section-kicker mb-3">
              <Zap size={16} aria-hidden="true" />
              Why Me
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-slate-100 md:text-4xl">
              Tony Zharoff
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-300">
              I've managed operations and built software for operations teams. That combination
              means I understand the problem before I open a code editor — and I know the difference
              between a fix that looks good in a demo and one your team will actually use on a Tuesday night.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="game-button primary">
                Work With Me
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/portfolio" className="game-button ghost">
                See the Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-white/8 bg-[#080d18]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="panel rounded-2xl p-10 text-center md:p-16">
            <h2 className="mb-4 font-display text-3xl font-bold text-slate-100 md:text-4xl">
              Tell me what's slowing your team down.
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-slate-400">
              We'll figure out together whether the fix is a process doc, a custom tool, or
              something in between. No pitch deck — just a conversation.
            </p>
            <Link to="/contact" className="game-button primary">
              Get in Touch
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
