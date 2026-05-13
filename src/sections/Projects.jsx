import ProjectCard from "../components/ProjectCart"
import { projects } from "../data/project";

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
            <ProjectCard key={project.id ?? project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
