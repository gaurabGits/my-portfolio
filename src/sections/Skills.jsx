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
    skills: [
      { name: "Python", icon: FaPython, color: "text-yellow-600 dark:text-yellow-300" },
    ],
  },
  {
    title: "Database",
    skills: [{ name: "PostgreSQL", icon: FaDatabase, color: "text-cyan-600 dark:text-cyan-300" }],
  },
];


function GroupedColumn({ label, title, text, groups }) {
  return (
    <article className="rounded-lg border border-slate-300 bg-white p-5 shadow-xl shadow-slate-300/60 transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/[0.55] dark:shadow-none sm:p-6">
      <p className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-300">{label}</p>
      {title && <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">{title}</h3>}
      {text && <p className="mt-2 text-sm text-slate-700 dark:text-slate-400">{text}</p>}

      <div className="mt-5 space-y-4">
        {groups.map((group) => (
          <div key={group.title}>
            <h4 className="mb-2 font-mono text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              {group.title}
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 dark:border-white/10 dark:bg-slate-950/[0.45]"
                  >
                    <Icon className={`shrink-0 text-xl ${skill.color}`} />
                    <span className="font-medium leading-tight text-slate-700 dark:text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function LearningColumn() {
  return (
    <GroupedColumn
      label="Learning right now"
      title="What I'm learning"
      text="Skills and tools I'm currently exploring and improving."
      groups={learningGroups}
    />
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 px-6 py-16 text-slate-950 transition-colors duration-300 dark:text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-300">02 / Skills</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Skills and learning.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <GroupedColumn
            label="Knowledge about"
            title="What I use"
            text="Tools I use to build clean web projects."
            groups={knownGroups}
          />

          <LearningColumn />
        </div>
      </div>
    </section>
  );
}

export default Skills;
