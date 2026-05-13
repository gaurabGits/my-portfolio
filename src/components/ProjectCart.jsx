import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard({ project, index }) {
  const techStack = project.tech ?? project.techStack ?? project.tags ?? [];
  const features = project.features ?? [];

  return (
    <article className="group flex h-full min-w-0 flex-col rounded-xl border border-slate-300 bg-white p-5 shadow-xl shadow-slate-300/60 transition hover:-translate-y-1 hover:border-cyan-600/50 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900/50 dark:shadow-none dark:hover:border-cyan-300/40 dark:hover:bg-slate-900/80 sm:rounded-2xl sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-sm font-semibold text-slate-500">
          {String(index + 1).padStart(2, "0")}
        </p>
        {project.category && (
          <span className="rounded-full border border-cyan-700/20 px-3 py-1 text-xs font-semibold text-cyan-700 dark:border-cyan-300/20 dark:text-cyan-300">
            {project.category}
          </span>
        )}
      </div>

      <h3 className="mt-7 text-xl font-bold text-slate-950 dark:text-white sm:mt-8 sm:text-2xl">
        {project.title}
      </h3>
      <p className="mt-4 leading-7 text-slate-700 dark:text-slate-400">
        {project.description}
      </p>

      {features.length > 0 && (
        <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
          {features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-transparent dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-3 pt-7">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-cyan-600 hover:text-cyan-700 dark:border-white/10 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
          >
            <HiOutlineExternalLink aria-hidden="true" />
            Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
