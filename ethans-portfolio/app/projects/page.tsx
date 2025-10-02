import Project from "@/components/Project";
import { projects } from "./projects";

export default function Projects() {
  return (
    <section
      id="home"
      className="animate-fadeIn animation-delay-2 selection:bg-blue-100 dark:selection:bg-blue-500 pt-12"
    >
      <div className="flex flex-col text-center items-center justify-center my-6 py-10 sm:py-20 md:py-20 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-0 md:w-3/5 animate-fadeIn animation-delay-4">
          <h1 className="font-sans text-3xl font-bold mt-4 md:mt-0 md:text-5xl pb-4">
            Projects
          </h1>

          {projects.map(({ section, projects }) => (
            <div key={section} className="my-6">
              <h2 className="font-mono text-2xl font-semibold">{section}</h2>
              <div className="mt-4">
                {projects.map((p) => (
                  <Project key={p.title} {...p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
