import { classes } from "./classes";

export default function Classes() {
  return (
    <section
      id="home"
      className="animate-fadeIn animation-delay-2 selection:bg-blue-100 dark:selection:bg-blue-500 pt-12"
    >
      <div className="flex flex-col text-center items-center justify-center my-6 py-10 sm:py-20 md:py-20 md:flex-row md:space-x-4 md:text-left md:pl-20">
        <div className="md:mt-0 animate-fadeIn animation-delay-4">
          <h1 className="font-sans text-3xl font-bold mt-4 md:mt-0 md:text-5xl pb-4">
            Classes
          </h1>

          <div className="my-6 font-mono">
            {classes.map(({ semester, courses }) => (
              <div key={semester} className="mb-6">
                <span className="font-bold">{semester}</span>
                <ul className="list-disc pl-5">
                  {courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}