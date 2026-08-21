import { motion } from "framer-motion";
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
      { name: "HTML", icon: FaHtml5, color: "text-orange-600" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-amber-500" },
      { name: "React", icon: FaReact, color: "text-cyan-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-emerald-600" },
      { name: "Express.js", icon: FaNodeJs, color: "text-emerald-600" },
      { name: "REST API", icon: MdApi, color: "text-cyan-600" },
    ],
  },
  {
    title: "Realtime",
    skills: [
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-slate-700" },
      { name: "WebRTC", icon: SiWebrtc, color: "text-orange-500" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: FaDatabase, color: "text-green-600" },
      { name: "MySQL", icon: FaDatabase, color: "text-cyan-600" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    ],
  },
];

const learningGroups = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "Python", icon: FaPython, color: "text-yellow-600" },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Django", icon: FaPython, color: "text-emerald-600" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: FaDatabase, color: "text-cyan-600" },
    ],
  },
];

const panelMotion = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const groupMotion = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function StackPanel({
  eyebrow,
  title,
  text,
  groups,
  accent = "cyan",
  mirror = false,
}) {
  const isCyan = accent === "cyan";

  const accentText = isCyan
    ? "text-cyan-600 dark:text-cyan-400"
    : "text-indigo-600 dark:text-indigo-400";

  const accentDot = isCyan ? "bg-cyan-500" : "bg-indigo-500";

  const accentHover = isCyan
    ? "group-hover:border-cyan-400/40 group-hover:bg-cyan-50/40 dark:group-hover:border-cyan-400/30 dark:group-hover:bg-cyan-950/20"
    : "group-hover:border-indigo-400/40 group-hover:bg-indigo-50/40 dark:group-hover:border-indigo-400/30 dark:group-hover:bg-indigo-950/20";

  return (
    <motion.div variants={panelMotion} className="relative">
      {/* Header */}
      <div className={`flex flex-col ${mirror ? "items-end text-right" : "items-start"}`}>
        <div className="flex items-center gap-3">
          {!mirror && <span className={`h-1.5 w-1.5 rounded-full ${accentDot}`} />}
          <p className={`font-mono text-xs font-semibold uppercase tracking-[0.18em] ${accentText}`}>
            {eyebrow}
          </p>
          {mirror && <span className={`h-1.5 w-1.5 rounded-full ${accentDot}`} />}
        </div>

        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
          {title}
        </h3>

        <p className={`mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400 ${mirror ? "text-right" : ""}`}>
          {text}
        </p>
      </div>

      {/* Skills */}
      <div className={`relative mt-9 ${mirror ? "pr-7 sm:pr-10" : "pl-7 sm:pl-10"}`}>
        {/* Vertical spine */}
        <div className={`absolute top-1 bottom-1 w-px bg-gradient-to-b ${isCyan ? "from-cyan-500/60" : "from-indigo-500/60"} to-transparent ${mirror ? "right-[4px] sm:right-[6px]" : "left-[4px] sm:left-[6px]"}`} />

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-7"
        >
          {groups.map((group) => (
            <motion.div key={group.title} variants={groupMotion} className="relative">
              {/* Spine node */}
              <span className={`absolute top-1.5 h-2.5 w-2.5 rounded-full ${accentDot} ring-4 ring-white dark:ring-slate-950 ${mirror ? "-right-7 translate-x-1/2 sm:-right-10" : "-left-7 -translate-x-1/2 sm:-left-10"}`} />

              <h4 className={`text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 ${mirror ? "text-right" : ""}`}>
                {group.title}
              </h4>

              <div className={`mt-3 flex flex-wrap gap-2 ${mirror ? "justify-end" : ""}`}>
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`group/skill flex items-center gap-2 rounded-lg border border-slate-200/70 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 ${accentHover}`}
                    >
                      <Icon className={`text-base ${skill.color} transition-transform duration-200 group-hover/skill:scale-110`} />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-4 py-20 text-slate-950 transition-colors duration-300 dark:text-white sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-500" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              02 / Skills
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Tools I use.
            <span className="text-slate-400 dark:text-slate-600">
              {" "}
              Things I'm learning.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            A practical collection of technologies I use to build projects,
            along with the tools and concepts I'm currently exploring.
          </p>
        </motion.div>

        {/* ================= PANELS ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="space-y-16 sm:space-y-20"
        >
          <StackPanel
            eyebrow="Currently using"
            title="My core stack"
            text="Technologies I regularly use when building full-stack applications and experimenting with real-world projects."
            groups={knownGroups}
            accent="cyan"
          />

          <StackPanel
            eyebrow="Currently learning"
            title="Expanding my stack"
            text="Technologies I'm actively exploring to strengthen my backend, database, and application development skills."
            groups={learningGroups}
            accent="indigo"
            mirror
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;