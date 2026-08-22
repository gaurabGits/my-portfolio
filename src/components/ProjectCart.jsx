import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard({ project }) {
    const [isExpanded, setIsExpanded] = useState(false);

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

    const statusStyles = project.status
        ? getStatusStyles(project.status)
        : null;

    // Only show Read More when description is long enough
    const shouldShowReadMore = description.length > 120;

    return (
        // Added w-full to make the card span the entire container width
        <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:bg-slate-900 dark:hover:shadow-xl">
            {/* ===== IMAGE – no hover scale ===== */}
            <div className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                {image ? (
                    <img
                        src={image}
                        alt={`${project.title} preview`}
                        className="block aspect-[16/9] w-full object-cover transition-none"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex aspect-[16/9] w-full items-center justify-center bg-slate-200 dark:bg-slate-700">
                        <span className="text-xs text-slate-400 sm:text-sm">
                            No preview
                        </span>
                    </div>
                )}
            </div>

            {/* ===== CONTENT ===== */}
            <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2 sm:mb-4">
                    <h3 className="text-lg font-bold leading-tight text-slate-950 dark:text-white sm:text-xl">
                        {project.title}
                    </h3>

                    {project.status && statusStyles && (
                        <span
                            className={`inline-flex flex-shrink-0 items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-md sm:px-2.5 sm:py-1 sm:text-[11px] ${statusStyles.badge}`}
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

                {/* ===== DESCRIPTION ===== */}
                <div className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:mt-2">
                    <p className={!isExpanded ? "line-clamp-2" : ""}>
                        {description}
                    </p>

                    {shouldShowReadMore && (
                        <button
                            type="button"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-1 text-sm font-medium text-slate-900 transition-colors hover:text-slate-600 dark:text-slate-200 dark:hover:text-white"
                        >
                            {isExpanded ? "Read less" : "Read more"}
                        </button>
                    )}
                </div>

                {techStack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300 sm:px-2.5 sm:py-1 sm:text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* ===== BUTTONS ===== */}
                <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4 dark:border-white/10 sm:mt-5 sm:flex-row sm:flex-wrap sm:gap-2.5 sm:pt-5 md:mt-6">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:scale-105 hover:border-slate-400 hover:bg-slate-100 hover:shadow-md dark:border-white/20 dark:text-slate-300 dark:hover:border-white/40 dark:hover:bg-white/10 sm:w-auto sm:flex-1"
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
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-slate-950 to-slate-950 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-gradient-to-l hover:from-slate-750 hover:to-slate-550 hover:shadow-md dark:from-slate-550 dark:to-cyan-300 dark:text-slate-900 sm:w-auto sm:flex-1"
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
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:scale-105 hover:border-slate-400 hover:bg-slate-100 hover:shadow-md dark:border-white/20 dark:text-slate-300 dark:hover:border-white/40 dark:hover:bg-white/10 sm:w-auto sm:flex-1"
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