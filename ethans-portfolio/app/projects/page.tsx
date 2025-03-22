import Project from "@/components/Project";

export default function Projects() {
    return (
        <section id="home" className="animate-fadeIn animation-delay-2 selection:bg-blue-100 dark:selection:bg-blue-500 pt-12">
            <div className="flex flex-col text-center items-center justify-center my-6 py-10 sm:py-20 md:py-20 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-0 md:w-3/5 animate-fadeIn animation-delay-4">
                    <h1 className="font-sans text-3xl font-bold mt-4 md:mt-0 md:text-5xl pb-4">
                        Projects
                    </h1>
                    {/* Personal Projects Section */}
                    <div className="my-6">
                        <h2 className="font-mono text-2xl font-semibold">Personal Projects</h2>
                        <div className="mt-4">
                            <Project
                                title="Basic Needs Center Food Pantry Web App"
                                description="Lead a team to develop new features for and maintain web application for Berkeley’s high-traffic food pantry serving thousands of students and staff weekly."
                                githubLink="https://github.com/CalNourish/pantry-webapp"
                                techStack="React.js, Javascript, Firebase, HTML, TailwindCSS, Next.js"
                            />
                        </div>
                    </div>


                    {/* Hackathon Projects Section */}
                    <div className="my-6">
                        <h2 className="font-mono text-2xl font-semibold">Hackathon Projects</h2>
                        <div className="mt-4">
                            {/* Example of a hackathon project */}
                            <Project
                                title="TreeHacks 2025: Hearti"
                                description="Developed an AI-powered web application for visualizing and diagnosing congenital heart disease (CHD) using 3D representations of CMRI scans, multi-classification models, and custom heart segmentation. Optimized the model for accuracy, real-time querying with VespaAI, and integrated a user-friendly AI voice chat for doctor-patient interactions."
                                githubLink="https://devpost.com/software/hearti"
                                award="Won Most Impactful Grand Prize Award!"
                                techStack="React.js, Javascript, Firebase, HTML, TailwindCSS, Next.js"
                            />
                            {/* Add more hackathon projects here */}
                        </div>
                    </div>

                    {/* Class Projects Section */}
                    <div className="my-6">
                        <h2 className="font-mono text-2xl font-semibold">Class Projects</h2>
                        <div className="mt-4">
                            <Project
                                title="CS 180: Colorizing the Prokudin-Gorskii Photo Collection"
                                description="Developed a solution for colorizing the Prokudin-Gorskii photo collection by implementing single-scale and multiscale pyramid search algorithms for image alignment. Enhanced alignment accuracy using edge detection via Hessian filters and optimized image cropping with an automated algorithm to remove borders and artifacts."
                                docLink="https://ethan-tam-cs180.notion.site/Project-1-Images-of-the-Russian-Empire-Colorizing-the-Prokudin-Gorskii-Photo-Collection-1f0de417ebd14ba29ef2325232ae9846?pvs=4"
                                techStack="Python, Numpy, Scikit-Image"
                            />

                            <Project
                                title="CS 180: Fun with Filters and Frequencies"
                                description="Implemented edge detection and noise reduction techniques using gradient magnitude, DoG filters, and finite difference operators. Developed hybrid images by applying Fourier transforms and multiresolution blending for enhanced image processing."
                                docLink="https://ethan-tam-cs180.notion.site/Project-2-Fun-with-Filters-and-Frequencies-10aa85eeb3ab806c9916c48a27fcea96?pvs=4"
                                techStack="Python, Numpy, Scikit-Image, Matplotlib, OpenCV"
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
