const projects = [
  {
    title: "Portfolio Website",
    description:
      "A fast personal portfolio with smooth sections, clean navigation, and responsive design.",
    tags: ["React", "Tailwind", "Motion"],
  },
  {
    title: "UI Component Practice",
    description:
      "Reusable interface pieces built to improve structure, spacing, and real frontend habits.",
    tags: ["Components", "CSS", "Design"],
  },
  {
    title: "Web App Experiments",
    description:
      "Small builds focused on forms, layouts, interactions, and practical JavaScript logic.",
    tags: ["JavaScript", "Vite", "UX"],
  },
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-16 text-slate-950 transition-colors duration-300 dark:text-white sm:px-6 sm:py-24 sm:scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-300">03 / Projects</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Selected projects
            </h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group min-w-0 rounded-xl border border-slate-300 bg-white p-5 shadow-xl shadow-slate-300/60 transition hover:-translate-y-1 hover:border-cyan-600/50 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900/50 dark:shadow-none dark:hover:border-cyan-300/40 dark:hover:bg-slate-900/80 sm:rounded-2xl sm:p-6"
            >
              <p className="font-mono text-sm font-semibold text-slate-500">
                0{index + 1}
              </p>
              <h3 className="mt-7 text-xl font-bold text-slate-950 dark:text-white sm:mt-8 sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-transparent dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
