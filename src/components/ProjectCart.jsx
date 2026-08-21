import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard({ project }) {
  const techStack = project.tech ?? project.techStack ?? project.tags ?? [];
  const image = project.image ?? project.projectImg ?? project.img;
  const description = project.description || "";

  // Helper to get status-specific styles
  const getStatusStyles = (status) => {
    const s = status?.toLowerCase();
    if (s === "completed") {
      return {
        badge: "bg-emerald-500/20 text-emerald-700 dark:bg-emerald-500/30 dark:text-emerald-300",
        dot: "bg-emerald-400",
        ping: "bg-emerald-400",
      };
    }
    if (s === "shutdown" || s === "archived") {
      return {
        badge: "bg-red-500/20 text-red-700 dark:bg-red-500/30 dark:text-red-300",
        dot: "bg-red-400",
        ping: "bg-red-400",
      };
    }
    if (s === "in progress" || s === "ongoing") {
      return {
        badge: "bg-yellow-500/20 text-yellow-700 dark:bg-yellow-500/30 dark:text-yellow-300",
        dot: "bg-yellow-400",
        ping: "bg-yellow-400",
      };
    }

    // fallback (neutral)
    return {
      badge: "bg-black/40 text-white dark:bg-white/10 dark:text-slate-300",
      dot: "bg-slate-400",
      ping: "bg-slate-400",
    };
  };

  const statusStyles = project.status ? getStatusStyles(project.status) : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:bg-slate-900 dark:hover:shadow-xl">
      <div className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        {image ? (
          <img
            src={image}
            alt={`${project.title} preview`}
            className="block aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-slate-200 dark:bg-slate-700">
            <span className="text-sm text-slate-400">No preview</span>
          </div>
        )}
      </div>

      {/* ===== CONTENT ===== */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-xl font-bold leading-tight text-slate-950 dark:text-white">
            {project.title}
          </h3>

          {project.status && statusStyles && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide backdrop-blur-md ${statusStyles.badge}`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${statusStyles.ping}`}
                />
                <span
                  className={`relative inline-flex h-1.5 w-1.5 rounded-full ${statusStyles.dot}`}
                />
              </span>
              {project.status}
            </span>
          )}
        </div>

        <p className="line-clamp-2 mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        {techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2.5 border-t border-slate-100 pt-5 dark:border-white/10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:scale-105 hover:border-slate-400 hover:bg-slate-100 hover:shadow-md dark:border-white/20 dark:text-slate-300 dark:hover:border-white/40 dark:hover:bg-white/10"
            >
              <FaGithub className="text-base" />
              <span>Code</span>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-slate-950 to-slate-950 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-gradient-to-l hover:from-slate-750 hover:to-slate-550 hover:shadow-md dark:from-slate-550 dark:to-cyan-300 dark:text-slate-900"
            >
              <HiOutlineExternalLink className="text-base" />
              <span>Live Demo</span>
            </a>
          )}

          {project.docs && (
            <a
              href={project.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:scale-105 hover:border-slate-400 hover:bg-slate-100 hover:shadow-md dark:border-white/20 dark:text-slate-300 dark:hover:border-white/40 dark:hover:bg-white/10"
            >
              <HiOutlineExternalLink className="text-base" />
              <span>Docs</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;