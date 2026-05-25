import { ArrowUpRight, Clock, Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const prompts = [
  "What your team does and roughly how big it is",
  "The specific friction point you're trying to solve",
  "Whether you have a tool in mind or are starting from scratch",
  "Any timeline pressure or constraints worth knowing upfront",
];

const contactMethods = [
  {
    Icon: Mail,
    label: "Email",
    value: "tony@tzharoff.com",
    href: "mailto:tony@tzharoff.com",
    note: "Best for project inquiries",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/tzharoff",
    href: "https://www.linkedin.com/in/tzharoff/",
    note: "Connect or send a DM",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/tzharoff",
    href: "https://github.com/tzharoff",
    note: "See the code",
  },
];

export function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

        {/* Left — framing */}
        <div>
          <p className="section-kicker mb-4">
            <MessageSquare size={16} aria-hidden="true" />
            Get in Touch
          </p>
          <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-slate-100 md:text-5xl">
            Let's figure out<br />what you actually need.
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-slate-400">
            Not every problem needs a custom app. Not every fix needs months of work.
            Send me a note about what's breaking and we'll figure out the right next move together.
          </p>

          <div className="panel rounded-2xl p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Helpful to include in your message
            </h2>
            <ul className="space-y-3">
              {prompts.map((prompt) => (
                <li key={prompt} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-1 shrink-0 text-oldgold">→</span>
                  {prompt}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-cyan-300/10 bg-cyan-300/5 p-4 text-sm text-slate-400">
            <Clock size={16} className="mt-0.5 shrink-0 text-cyan-400" aria-hidden="true" />
            I typically respond within one business day.
          </div>
        </div>

        {/* Right — contact methods */}
        <div className="flex flex-col gap-4">
          {contactMethods.map(({ Icon, label, value, href, note }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="panel group flex items-center gap-5 rounded-2xl p-6 transition-colors hover:border-cyan-300/30"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/8 text-cyan-400 transition-colors group-hover:border-cyan-300/40 group-hover:bg-cyan-300/12">
                <Icon size={22} aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{label}</p>
                <p className="truncate font-medium text-slate-100">{value}</p>
                <p className="text-xs text-slate-500">{note}</p>
              </div>
              <ArrowUpRight size={18} className="shrink-0 text-slate-600 transition-colors group-hover:text-cyan-400" aria-hidden="true" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
