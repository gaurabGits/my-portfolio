import { motion } from "framer-motion";
import {
  FaCartShopping,
  FaVideo,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa6";

const experienceData = [
  {
    id: "01",
    period: "2025 — Present",
    title: "MERN E-Commerce Platform",
    description:
      "A full-stack e-commerce platform focused on authentication, product management, payments, and order management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    status: "Live",
    statusStyle: "bg-emerald-500",
    icon: FaCartShopping,
  },
  {
    id: "02",
    period: "2026 — Present",
    title: "Real-Time Video Chat App",
    description:
      "A real-time video conferencing platform using WebRTC and Socket.IO with room creation, screen sharing, and messaging.",
    tech: ["React", "WebRTC", "Socket.IO", "Tailwind CSS"],
    status: "Building",
    statusStyle: "bg-cyan-500",
    icon: FaVideo,
  },
  {
    id: "03",
    period: "2026 — Present",
    title: "Open Source Contributions",
    description:
      "Exploring open-source development through documentation, issue solving, code contributions, and understanding larger codebases.",
    tech: ["Git", "GitHub", "Markdown", "Open Source"],
    status: "Contributing",
    statusStyle: "bg-purple-500",
    icon: FaGithub,
  },
  {
    id: "04",
    period: "2025 — Present",
    title: "Personal Portfolio",
    description:
      "Designed and developed this portfolio to showcase my projects, technical skills, experiments, and progress as a developer.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    status: "Refining",
    statusStyle: "bg-amber-500",
    icon: FaLaptopCode,
  },
];

const containerMotion = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemMotion = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-4 py-20 text-slate-950 dark:text-white sm:px-6 sm:py-28 lg:scroll-mt-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-500" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              01 / Experience
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Building through{" "}
            <span className="text-slate-500 dark:text-slate-400">
              experience.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            My experience is currently shaped by building real projects,
            experimenting with modern technologies, contributing to open
            source, and continuously improving how I write software.
          </p>
        </motion.div>

        {/* ================= EXPERIENCE LIST ================= */}
        <motion.div
          variants={containerMotion}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline */}
          <div className="absolute left-[19px] top-6 hidden h-[calc(100%-48px)] w-px bg-slate-200 dark:bg-slate-800 sm:block" />

          <div className="space-y-5">
            {experienceData.map((experience) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.id}
                  variants={itemMotion}
                  className="group relative"
                >
                  <div className="flex gap-5 sm:gap-7">
                    {/* ================= TIMELINE ICON ================= */}
                    <div className="relative z-10 hidden shrink-0 sm:block">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white ring-8 ring-white transition-all duration-300 group-hover:bg-cyan-600 group-hover:ring-cyan-50 dark:bg-white dark:text-slate-950 dark:ring-slate-950 dark:group-hover:bg-cyan-400 dark:group-hover:ring-cyan-950">
                        <Icon className="text-sm" />
                      </div>
                    </div>

                    {/* ================= CARD ================= */}
                    <div className="w-full rounded-2xl bg-slate-50/80 p-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-slate-100 sm:p-6 dark:bg-slate-900/70 dark:group-hover:bg-slate-900">
                      {/* Top row */}
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="mb-2 flex items-center gap-3">
                            <span className="font-mono text-xs font-medium text-slate-400">
                              {experience.id}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="font-mono text-[11px] text-slate-400">
                              {experience.period}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400">
                            {experience.title}
                          </h3>
                        </div>

                        {/* Status */}
                        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${experience.statusStyle}`}
                          />
                          {experience.status}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {experience.description}
                      </p>

                      {/* Tech */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white px-2.5 py-1 font-mono text-[10px] font-medium text-slate-500 transition-colors duration-200 group-hover:text-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* ================= FOOTER ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex items-center gap-3 font-mono text-xs text-slate-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
          <span>Still learning. Still building.</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;