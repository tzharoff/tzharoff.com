import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { DialogueBox } from "../components/DialogueBox";

const inquiryTypes = [
  { title: "Collaboration", body: "Videos, games, or educational projects worth building together." },
  { title: "Classrooms", body: "Using episodes and guides with students, or shaping teacher resources." },
  { title: "Workshops & speaking", body: "Game-development literacy sessions, talks, and training." },
  { title: "Consulting", body: "Workflow tools, operational systems, and professional inquiries." },
];

const contactMethods = [
  {
    Icon: Mail,
    label: "Email",
    value: "tony@tzharoff.com",
    href: "mailto:tony@tzharoff.com",
    note: "Best for project and classroom inquiries",
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
    <section className="mx-auto max-w-7xl px-5 py-14 md:py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left — framing */}
        <div>
          <p className="tig-kicker mb-4">
            <MessageSquare size={14} aria-hidden="true" />
            Contact
          </p>
          <h1 className="tig-title mb-5 text-4xl text-white md:text-5xl">
            Start a conversation
          </h1>
          <p className="mb-8 max-w-xl text-lg font-semibold leading-relaxed text-tigsky">
            Collaboration, classrooms, workshops, speaking, and professional inquiries all land in the same inbox —
            tell me which quest you're on.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            {inquiryTypes.map(({ title, body }) => (
              <div key={title} className="tig-panel p-5">
                <h2 className="mb-1 text-base font-black uppercase tracking-wide text-tigink">{title}</h2>
                <p className="text-sm font-semibold leading-relaxed text-tigink/80">{body}</p>
              </div>
            ))}
          </div>

          <DialogueBox
            heading="Helpful to include"
            lines={[
              "Who you are and what you're working on.",
              "What you're hoping Tony can help with.",
              "Any timeline worth knowing up front.",
            ]}
            showPortrait={false}
          />
        </div>

        {/* Right — contact methods */}
        <div className="flex flex-col gap-4">
          {contactMethods.map(({ Icon, label, value, href, note }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="tig-panel group flex items-center gap-5 p-6 no-underline"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-[3px] border-tigframe bg-tigred text-white">
                <Icon size={22} aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-black uppercase tracking-widest text-tigred">{label}</p>
                <p className="truncate font-extrabold text-tigink">{value}</p>
                <p className="text-xs font-semibold text-tigink/70">{note}</p>
              </div>
              <ArrowUpRight size={18} className="shrink-0 text-tigink/40 group-hover:text-tigred" aria-hidden="true" />
            </a>
          ))}
          <p className="mt-2 px-2 text-sm font-semibold text-tigsky">
            I typically respond within one business day.
          </p>
        </div>
      </div>
    </section>
  );
}
