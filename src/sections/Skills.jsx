import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";

import { MdApi } from "react-icons/md";

import {
  SiJavascript,
  SiNextdotjs,
  SiPostman,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";


const knownGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-600 dark:text-orange-300" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-600 dark:text-blue-300" },
      { name: "JavaScript", icon: SiJavascript, color: "text-amber-600 dark:text-amber-300" },
      { name: "React", icon: FaReact, color: "text-cyan-600 dark:text-cyan-300" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-600 dark:text-sky-300" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-emerald-600 dark:text-emerald-400" },
      { name: "Express.js", icon: FaNodeJs, color: "text-emerald-600 dark:text-emerald-400" },
      { name: "REST API", icon: MdApi, color: "text-cyan-600 dark:text-cyan-300" },
    ],
  },
  {
    title: "Realtime & Communication",
    skills: [
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-slate-600 dark:text-slate-200" },
      { name: "WebRTC", icon: SiWebrtc, color: "text-orange-600 dark:text-orange-300" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: FaDatabase, color: "text-green-600 dark:text-green-300" },
      { name: "MySQL", icon: FaDatabase, color: "text-cyan-600 dark:text-cyan-300" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600 dark:text-orange-300" },
      { name: "Postman", icon: SiPostman, color: "text-orange-600 dark:text-orange-300" },
    ],
  },
];

const learningGroups = [
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600 dark:text-blue-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-slate-700 dark:text-slate-100" },
      { name: "Django", icon: FaPython, color: "text-emerald-600 dark:text-emerald-400" },
    ],
  },
  {
    title: "Languages",
    skills: [{ name: "Python", icon: FaPython, color: "text-yellow-600 dark:text-yellow-300" }],
  },
  {
    title: "Database",
    skills: [{ name: "PostgreSQL", icon: FaDatabase, color: "text-cyan-600 dark:text-cyan-300" }],
  },
];


const ACCENTS = {
  blue: {
    dot: "bg-[#0E6EFF] dark:bg-[#5b9bff]",
    ring: "ring-[#0E6EFF]/25 dark:ring-[#5b9bff]/25",
    text: "text-[#0E6EFF] dark:text-[#5b9bff]",
    line: "from-[#0E6EFF]/60 dark:from-[#5b9bff]/60",
    hoverBorder: "hover:border-[#0E6EFF]/50 dark:hover:border-[#5b9bff]/50",
  },
  indigo: {
    dot: "bg-[#4f46e5] dark:bg-[#8b85f0]",
    ring: "ring-[#4f46e5]/25 dark:ring-[#8b85f0]/25",
    text: "text-[#4f46e5] dark:text-[#8b85f0]",
    line: "from-[#4f46e5]/60 dark:from-[#8b85f0]/60",
    hoverBorder: "hover:border-[#4f46e5]/50 dark:hover:border-[#8b85f0]/50",
  },
};

function StackPanel({ eyebrow, title, text, groups, accent, mirror = false }) {
  const a = ACCENTS[accent];

  return (
    <div className={`min-w-0 ${mirror ? "text-right" : ""}`}>
      <div className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 ${mirror ? "flex-row-reverse " : ""}`}>
        <div>
          <p className={`font-mono text-sm font-semiboldfloat-end ${a.text}`}>{eyebrow}</p>
          <h3 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">{title}</h3>
        </div>
      </div>
      <p
        className={`mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl ${
          mirror ? "ml-auto text-right " : ""
        }`}
      >
        {text}
      </p>

      {/* Spine diagram */}
      <div className={`relative mt-8 ${mirror ? "pr-7 sm:pr-9" : "pl-7 sm:pl-9"}`}>
        <div
          className={`absolute top-1 bottom-1 w-px bg-gradient-to-b ${a.line} to-transparent ${
            mirror ? "right-[5px] sm:right-[7px]" : "left-[5px] sm:left-[7px]"
          }`}
        />

        <div className="space-y-7">
          {groups.map((group) => (
            <div key={group.title} className="relative">
              <span
                className={`absolute top-1 h-2.5 w-2.5 rounded-full ${a.dot} ring-4 ring-white dark:ring-slate-900 ${
                  mirror ? "-right-7 translate-x-1/2 sm:-right-9" : "-left-7 -translate-x-1/2 sm:-left-9"
                }`}
              />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {group.title}
              </h4>
              <div className={`mt-2.5 flex flex-wrap gap-2 ${mirror ? "justify-end" : ""}`}>
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className={`flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 transition-colors duration-200 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-200 ${a.hoverBorder} ${
                        mirror ? "flex-row-reverse" : ""
                      }`}
                    >
                      <Icon className={`shrink-0 text-base ${skill.color}`} />
                      <span className="font-medium leading-none">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-16 text-slate-950 transition-colors duration-300 dark:text-white sm:px-6 sm:scroll-mt-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-300">02 / Skills</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Skills and learning.
          </h2>
        </div>

        <div className="space-y-16">
          <StackPanel
            eyebrow="Knowledge about"
            title="What I use"
            text="Tools I reach for by default to build clean, production-ready web projects."
            groups={knownGroups}
            accent="blue"
          />

          <StackPanel
            eyebrow="Learning right now"
            title="What I'm learning"
            text="Skills and tools I'm currently exploring and folding into new projects."
            groups={learningGroups}
            accent="indigo"
            mirror
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;