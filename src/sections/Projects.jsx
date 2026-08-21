import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ProjectCard from "../components/ProjectCart";
import { projects } from "../utils/data/project";

function Projects() {
  const [index, setIndex] = useState(0);

  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const canPrev = index > 0;
  const canNext = index < projects.length - 1;

  const goPrev = () => {
    if (canPrev) setIndex((i) => i - 1);
  };

  const goNext = () => {
    if (canNext) setIndex((i) => i + 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    const SWIPE_THRESHOLD = 40;
    if (touchDeltaX.current < -SWIPE_THRESHOLD) {
      goNext();
    } else if (touchDeltaX.current > SWIPE_THRESHOLD) {
      goPrev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-4 py-20 text-slate-950 transition-colors duration-300 sm:px-6 sm:py-28 sm:scroll-mt-28 bg-slate-50/60"
    >
      <div className="mx-auto max-w-5xl">
        {/* ================= HEADER ================= */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-500" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
              03 / Projects
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Things{" "}
                <span className="text-slate-500">I've built.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                A selection of projects where I turn ideas into working
                products, experiment with new technologies, and solve
                practical problems through code.
              </p>
            </div>
          </div>
        </div>

        {/* ================= PROJECT AREA ================= */}
        <div className="mx-auto flex max-w-2xl items-center gap-4 sm:gap-6">
          {/* Previous */}
          <button
            type="button"
            onClick={goPrev}
            disabled={!canPrev}
            aria-label="Previous project"
            className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 sm:flex ${
              canPrev
                ? "hover:border-cyan-400 hover:text-cyan-600"
                : "cursor-not-allowed opacity-25"
            }`}
          >
            <FaChevronLeft className="text-xs" />
          </button>

          {/* ================= CARD CONTAINER ================= */}
          <div
            className="min-w-0 flex-1 overflow-hidden rounded-2xl touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {projects.map((project, i) => (
                <div
                  key={project.id ?? project.title}
                  className="w-full shrink-0 px-0.5"
                >
                  <ProjectCard project={project} index={i} />
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={goNext}
            disabled={!canNext}
            aria-label="Next project"
            className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 sm:flex ${
              canNext
                ? "hover:border-cyan-400 hover:text-cyan-600"
                : "cursor-not-allowed opacity-25"
            }`}
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>

        {/* ================= MOBILE CONTROLS ================= */}
        <div className="mt-5 flex items-center justify-between sm:hidden">
          <button
            type="button"
            onClick={goPrev}
            disabled={!canPrev}
            aria-label="Previous project"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors disabled:cursor-not-allowed disabled:opacity-25"
          >
            <FaChevronLeft className="text-xs" />
          </button>

          <span className="font-mono text-xs text-slate-400">
            <span className="text-slate-950">
              {String(index + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(projects.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={goNext}
            disabled={!canNext}
            aria-label="Next project"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors disabled:cursor-not-allowed disabled:opacity-25"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>

        {/* ================= INDICATORS ================= */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {projects.map((project, i) => (
            <button
              key={project.id ?? project.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to ${project.title}`}
              className="group flex h-4 items-center"
            >
              <span
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-7 bg-slate-950"
                    : "w-2 bg-slate-300 group-hover:bg-slate-400"
                }`}
              />
            </button>
          ))}
        </div>

        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-slate-400 sm:hidden">
          Swipe to explore
        </p>
      </div>
    </section>
  );
}

export default Projects;