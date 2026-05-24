import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard({ project, index }) {
  const techStack = project.tech ?? project.techStack ?? project.tags ?? [];
  const features = project.features ?? [];

  return (
    <article className="group flex h-full min-w-0 flex-col rounded-xl border border-slate-300 bg-white p-4 shadow-lg shadow-slate-300/40 transition  hover:border-cyan-600/50 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900/50 dark:shadow-none dark:hover:border-cyan-300/40 dark:hover:bg-slate-900/80 sm:rounded-2xl sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-xs font-semibold text-slate-500">
          {String(index + 1).padStart(2, "0")}
        </p>
        {project.category && (
          <span className="rounded-full border border-cyan-700/20 px-2.5 py-0.5 text-[0.65rem] font-semibold text-cyan-700 dark:border-cyan-300/20 dark:text-cyan-300">
            {project.category}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white sm:mt-6 sm:text-xl">
        {project.title}
      </h3>
      <p className="mt-3 leading-6 text-slate-700 dark:text-slate-400 text-sm">
        {project.description}
      </p>

      {features.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm leading-5 text-slate-700 dark:text-slate-300">
          {features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-300 bg-slate-100 px-2.5 py-0.5 text-[0.7rem] font-medium text-slate-700 dark:border-white/10 dark:bg-transparent dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:-translate-y-0.5 gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 transition hover:border-cyan-600 hover:text-cyan-700 dark:border-white/10 dark:text-cyan-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
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
            className="inline-flex items-center gap-2 hover:-translate-y-0.5 rounded-full bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
          >
            <HiOutlineExternalLink aria-hidden="true" />
            Demo
          </a>
        )}
        {project.docs && (
          <button
            onClick={(e) => {
              e.preventDefault();
              alert("We are working on it. Please keep touch with us.");
            }}
            className="inline-flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer rounded-full bg-slate-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
          >
            <HiOutlineExternalLink aria-hidden="true" />
            Documentation
          </button>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
