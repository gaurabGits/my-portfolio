import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import ProjectCard from "../components/ProjectCart";
import { projects } from "../data/project";

function Projects() {
  const [index, setIndex] = useState(0);

  const canPrev = index > 0;
  const canNext = index < projects.length - 1;

  const goPrev = () => canPrev && setIndex((i) => i - 1);
  const goNext = () => canNext && setIndex((i) => i + 1);

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

        <div className="mx-auto flex max-w-2xl items-center justify-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canPrev}
            aria-label="Previous project"
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-600 shadow-lg backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300 ${
              canPrev
                ? "hover:border-cyan-500 hover:text-cyan-600 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                : "cursor-not-allowed opacity-30"
            }`}
          >
            <FaChevronLeft className="text-sm" />
          </button>

          <div className="min-w-0 flex-1 overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {projects.map((project, i) => (
                <div key={project.id ?? project.title} className="w-full shrink-0 px-0.5">
                  <ProjectCard project={project} index={i} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={!canNext}
            aria-label="Next project"
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-600 shadow-lg backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300 ${
              canNext
                ? "hover:border-cyan-500 hover:text-cyan-600 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                : "cursor-not-allowed opacity-30"
            }`}
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>

        {/* Position indicator */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {projects.map((project, i) => (
            <button
              key={project.id ?? project.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-cyan-600 dark:bg-cyan-300" : "w-1.5 bg-slate-300 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;