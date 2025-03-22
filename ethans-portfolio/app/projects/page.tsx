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
                                title="ACE NY Energy Project Web App"
                                description="Building a full-stack web app for a non-profit to visualize real-time data of all proposed and ongoing energy projects on Google Maps for the state of New York."
                                githubLink="https://github.com/calblueprint/ace-ny"
                                techStack="React.js, Google Maps API, Typescript, Supabase, HTML, CSS, Next.js"
                            />
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
                            <Project
                                title="TreeHacks 2025: Hearti"
                                description="Developed an AI-powered web application for visualizing and diagnosing congenital heart disease (CHD) using 3D representations of CMRI scans, multi-classification models, and custom heart segmentation. Optimized the model for accuracy, real-time querying with VespaAI, and integrated a user-friendly AI voice chat for doctor-patient interactions."
                                githubLink="https://devpost.com/software/hearti"
                                award="Won Most Impactful Grand Prize Award!"
                                techStack="React.js, PyTorch, FastAPI, Python, Typescript, VespaAI, HTML, TailwindCSS, Next.js"
                            />
                            <Project
                                title="HackMIT 2024: Mindscape"
                                description="Created a web app to render 3D interactive visualizations of brain MRI scans, enabling precise tumor localization. Developed a NeRF-generated data pipeline to transform 2D slices into real-time, instant volumetric data."
                                githubLink="https://github.com/arjun-banerjee/Mindscape"
                                award="Won Best Healthcare Hack Award!"
                                techStack="React.js, PyTorch, Python, Typescript, HTML, TailwindCSS, Next.js"
                            />
                        </div>
                    </div>

                    {/* Class Projects Section */}
                    <div className="my-6">
                        <h2 className="font-mono text-2xl font-semibold">Class Projects</h2>
                        <div className="mt-4">

                            <Project
                                title="CS 180: Diffusion-Based Image Denoising with UNet"
                                description="Developed and trained a UNet-based denoising model on the MNIST dataset, implementing time-conditioned diffusion models to iteratively improve image denoising. Enhanced the model with class-conditioning and classifier-free guidance to generate high-quality images, exploring advanced techniques for improved performance."
                                docLink="https://ethan-tam-cs180.notion.site/Project-5-Fun-With-Diffusion-Models-13ca85eeb3ab80c99d3aec85b03b7303?pvs=4"
                                techStack="PyTorch, Python, Numpy, Scikit-Image, OpenCV, Matplotlib"
                            />

                            <Project
                                title="CS 180: Face Morphing"
                                description="Developed a face morphing algorithm using Delaunay triangulation and affine transformations to create a mid-way face by warping and cross-dissolving images of Iñaki Godoy and Mackenyu Maeda (Luffy and Zoro of the amazing live-action One Piece). Generated a 45-frame GIF with dynamic morphing, adjusting the weights of each image across frames to create a smooth transition."
                                docLink="https://ethan-tam-cs180.notion.site/Project-3-Face-Morphing-118a85eeb3ab8020bfe6eb5a8cea511a?pvs=4"
                                techStack="Python, Numpy, Scikit-Image, OpenCV, Matplotlib"
                            />

                            <Project
                                title="CS 180: [Auto]Stitching Photo Mosaics"
                                description="Developed an image warping and mosaicing system by implementing homography recovery, image rectification, and projective warping techniques. Successfully created seamless mosaics by blending images using weighted averaging and advanced blending techniques like Laplacian pyramids."
                                docLink="https://ethan-tam-cs180.notion.site/Project-4-Auto-Stitching-Photo-Mosaics-126a85eeb3ab802e9837e61eea3bcdf4?pvs=4"
                                techStack="Python, Numpy, Scikit-Image, OpenCV, Matplotlib"
                            />

                            <Project
                                title="CS 180: Fun with Filters and Frequencies"
                                description="Implemented edge detection and noise reduction techniques using gradient magnitude, DoG filters, and finite difference operators. Developed hybrid images by applying Fourier transforms and multiresolution blending for enhanced image processing."
                                docLink="https://ethan-tam-cs180.notion.site/Project-2-Fun-with-Filters-and-Frequencies-10aa85eeb3ab806c9916c48a27fcea96?pvs=4"
                                techStack="Python, Numpy, Scikit-Image, OpenCV, Matplotlib"
                            />

                            <Project
                                title="CS 180: Colorizing the Prokudin-Gorskii Photo Collection"
                                description="Developed a solution for colorizing the Prokudin-Gorskii photo collection by implementing single-scale and multiscale pyramid search algorithms for image alignment. Enhanced alignment accuracy using edge detection via Hessian filters and optimized image cropping with an automated algorithm to remove borders and artifacts."
                                docLink="https://ethan-tam-cs180.notion.site/Project-1-Images-of-the-Russian-Empire-Colorizing-the-Prokudin-Gorskii-Photo-Collection-1f0de417ebd14ba29ef2325232ae9846?pvs=4"
                                techStack="Python, Numpy, Scikit-Image"
                            />

                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
