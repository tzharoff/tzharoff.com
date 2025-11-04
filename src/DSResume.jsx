import React from "react";
import profilePic from "./images/Profile_Pic_Circle.png"

/**
 * Cory-in-the-House (Nintendo DS) inspired resume
 * -------------------------------------------------
 * • Dual-screen DS frame (top screen: hero + summary, bottom screen: sections)
 * • Patriotic red/white/blue palette with star accents
 * • Rounded capsules, subtle gloss, chunky UI buttons (A/B/X/Y)
 * • Print-friendly (Letter) — use browser Print > Save as PDF
 *
 * Edit the DATA object to customize fields.
 */

const DATA = {
  name: "TONY ZHAROFF",
  title: "GAME / XR DEVELOPER & EDUCATOR",
  phone: "+1 (253) 223–8069",
  email: "tony.zharoff@gmail.com",
  site: "tzharoff.com",
  location: "Seattle, WA",
  summary:
    "Designer/developer blending rapid prototyping with playful, family‑friendly sensibilities. Ships vertical slices, mentors teams, and builds memorable interactive experiences.",
  skills: [
    { label: "Unity / C#", level: 95 },
    { label: "Prototyping", level: 95 },
    { label: "Project Management", level: 90 },
    { label: "Level Design", level: 90 },
    { label: "VR/AR (XR)", level: 85 },
    { label: "C++ Basics", level: 70 },
    { label: "Blender", level: 75 },
  ],
  links: [
    { label: "LinkedIn", value: "linkedin.com/in/tzharoff" },
    { label: "GitHub", value: "github.com/tony" },
    { label: "Portfolio", value: "tzharoff.com" },
  ],
  education: [
    {
      school: "WGU — B.S. Software Development",
      year: "2023",
    },
    {
      school: "ITT Tech — B.A. Game Design",
      year: "2010",
    },
  ],
  experience: [
    {
      company: "[P1] Games (Volunteer Mentor)",
      years: "2024–Present",
      points: [
        "Led teams to ship award‑winning prototypes and improve schedules.",
        "Answered dev questions and embedded industry practices.",
      ],
    },
    {
      company: "Coding Dojo — Unity/C# Instructor",
      years: "2022–2023",
      points: [
        "Taught fundamentals, design patterns, and project delivery.",
        "Guided capstone teams through vertical slices.",
      ],
    },
    {
      company: "Cerulean Games / Iron Belly / Cypher Kids Club — Unity Dev",
      years: "2011–2014",
      points: [
        "R&D prototypes for AR/interactive experiences with major brands.",
        "Multi‑user experiences, performance tuning, asset pipelines.",
      ],
    },
    {
        company: "blah",
        years: "xxxx-yyyy",
        points: ["#1", "#2"],
    },
  ],
  awards: [
    "Mentor leadership awards (student showcases)",
    "Local community STEM outreach speaker",
  ],
  languages: ["English (native)"]
};

export default function CoryDSResume() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 p-6 print:bg-white print:p-0">
      {/* DS Shell Shadow */}
      <div className="mx-auto max-w-4xl rounded-[28px] bg-gradient-to-b from-slate-100 to-slate-200 p-3 shadow-2xl print:shadow-none">
        <div className="rounded-[22px] bg-[#2c2f39] p-2">
          {/* Hinged Dual Screens */}
          <TopScreen />
          <Hinge />
          <BottomScreen />
        </div>
        {/* Footer label */}
        <div className="mt-2 flex items-center justify-center gap-2 text-xs tracking-widest text-slate-600 print:hidden">
          <span className="font-semibold">NINTENDO‑STYLE RESUMÉ UI</span>
          <span>•</span>
          <span>PRINT ➜ SAVE AS PDF (LETTER)</span>
        </div>
      </div>
    </div>
  );
}

function TopScreen() {
  return (
    <section className="relative rounded-[18px] border border-slate-800 bg-gradient-to-b from-[#1f2330] to-[#0f1320] p-4">
      {/* Status lights */}
      <div className="mb-3 flex gap-2">
        <Lamp color="bg-red-500" />
        <Lamp color="bg-yellow-400" />
        <Lamp color="bg-green-500" />
      </div>

      {/* Title Capsule */}
      <div className="relative grid grid-cols-7 gap-4">
        <div className="col-span-2">
          <div className="aspect-[3/4] overflow-hidden rounded-xl border border-white/20 bg-gradient-to-b from-blue-700 to-blue-900">
            {/* Placeholder portrait */}
            <div className="flex h-full items-center justify-center text-white/80"><img src={profilePic} alt="Tony Zharoff Cartoon Profile Picture"/></div>
          </div>
        </div>

        <div className="col-span-5 flex flex-col justify-center">
          <TitleBadge text={DATA.name} />
          <div className="mt-3 text-sm text-white/80">{DATA.title}</div>

          <p className="mt-4 text-[13px] leading-relaxed text-slate-200">
            {DATA.summary}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4 text-[12px] text-slate-200">
            <InfoPill label="Phone" value={DATA.phone} />
            <InfoPill label="Email" value={DATA.email} />
            <InfoPill label="Website" value={DATA.site} />
            <InfoPill label="Location" value={DATA.location} />
          </div>
        </div>
      </div>

      {/* Star border accents */}
      <Stars deco className="pointer-events-none absolute inset-0" />
    </section>
  );
}

function BottomScreen() {
  return (
    <section className="mt-2 rounded-[18px] border border-slate-800 bg-gradient-to-b from-[#1a1e2a] to-[#0d111d] p-4">
      {/* Tabs mimic — simple grid */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card title="SKILLS" icon="⭐">
          <div className="space-y-3">
            {DATA.skills.map((s) => (
              <SkillBar key={s.label} label={s.label} value={s.level} />
            ))}
          </div>
        </Card>

        <Card title="EXPERIENCE" icon="🎮">
          <div className="space-y-4">
            {DATA.experience.map((job) => (
              <div key={job.company}>
                <div className="flex items-baseline justify-between text-[13px] text-white">
                  <span className="font-semibold">{job.company}</span>
                  <span className="text-white/70">{job.years}</span>
                </div>
                <ul className="mt-2 list-disc pl-5 text-[12px] text-white/80">
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card title="EDUCATION" icon="🎓">
          <ul className="space-y-2 text-[13px] text-white/90">
            {DATA.education.map((e, i) => (
              <li key={i} className="flex items-center justify-between">
                <span>{e.school}</span>
                <span className="text-white/60">{e.year}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="LINKS & EXTRAS" icon="🔗">
          <div className="grid grid-cols-2 gap-3 text-[12px] text-white/90">
            <div>
              <h4 className="mb-1 text-[11px] uppercase tracking-widest text-white/60">Links</h4>
              <ul className="space-y-1">
                {DATA.links.map((l) => (
                  <li key={l.label} className="truncate">
                    <span className="font-medium text-white">{l.label}: </span>
                    <span className="text-white/80">{l.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-1 text-[11px] uppercase tracking-widest text-white/60">Awards</h4>
              <ul className="list-disc pl-4 text-white/80">
                {DATA.awards.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
              <h4 className="mt-3 mb-1 text-[11px] uppercase tracking-widest text-white/60">Languages</h4>
              <ul className="list-disc pl-4 text-white/80">
                {DATA.languages.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* DS Buttons */}
      <div className="mt-6 grid grid-cols-4 gap-3 print:hidden">
        {[
          { k: "A", c: "bg-red-600" },
          { k: "B", c: "bg-blue-600" },
          { k: "X", c: "bg-white text-slate-900" },
          { k: "Y", c: "bg-sky-400" },
        ].map((b) => (
          <div
            key={b.k}
            className={`select-none rounded-full ${b.c} px-4 py-2 text-center font-bold shadow-inner`}
          >
            {b.k}
          </div>
        ))}
      </div>
    </section>
  );
}

function Card({ title, icon, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="mb-3 flex items-center gap-2">
        <div className="rounded-md bg-gradient-to-b from-red-500 to-red-700 px-2 py-1 text-[11px] font-extrabold tracking-widest text-white shadow">
          {icon} {title}
        </div>
      </div>
      {children}
    </div>
  );
}

function SkillBar({ label, value }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[12px] text-white/80">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-sky-400 via-white to-red-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function TitleBadge({ text }) {
  return (
    <div className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-white/20 bg-gradient-to-b from-white/20 to-white/10 px-4 py-2 text-white shadow-lg backdrop-blur">
      <span className="text-xl font-extrabold tracking-widest">{text}</span>
      <span className="rounded-md bg-gradient-to-b from-red-500 to-red-700 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest">Player 1</span>
    </div>
  );
}

function InfoPill({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 shadow-inner">
      <div className="text-[10px] uppercase tracking-widest text-white/60">{label}</div>
      <div className="truncate text-[12px] text-white">{value}</div>
    </div>
  );
}

function Stars({ className = "", deco = false }) {
  return (
    <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity={0.35} />
          <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
        </radialGradient>
      </defs>
      {[...Array(14)].map((_, i) => (
        <circle key={i} cx={(i * 13) % 100} cy={((i * 29) % 100)} r={2} fill="url(#g)" />
      ))}
    </svg>
  );
}

function Lamp({ color = "bg-green-500" }) {
  return (
    <div className={`h-3 w-3 rounded-full ${color} shadow`}></div>
  );
}

function Hinge() {
  return (
    <div className="my-2 flex items-center justify-between rounded-lg border border-slate-900/80 bg-gradient-to-b from-slate-800 to-slate-950 px-4 py-1 text-slate-400">
      <span className="text-[10px] tracking-widest">CORY‑STYLE DS HINGE</span>
      <div className="flex gap-1">
        <div className="h-2 w-8 rounded-sm bg-slate-700" />
        <div className="h-2 w-8 rounded-sm bg-slate-700" />
        <div className="h-2 w-8 rounded-sm bg-slate-700" />
      </div>
    </div>
  );
}
