// export default function Projects() {
//     return (
//         <section id="home" className="animate-fadeIn animation-delay-2 selection:bg-blue-100 dark:selection:bg-blue-500 pt-12">
//             <div className="flex flex-col text-center items-center justify-center my-6 py-10 sm:py-20 md:py-20 md:flex-row md:space-x-4 md:text-left">
//                 <div className="md:mt-0 md:w-3/5 animate-fadeIn animation-delay-4">
//                     <h1 className="font-sans text-3xl font-bold mt-4 md:mt-0 md:text-5xl pb-4"> 
//                         Projects
//                     </h1>

              

//                     <h2 className="font-mono mt-2">
//                         TreeHacks 2025
//                     </h2>
//                 </div>
//             </div>
//         </section>
//     )
// }

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
                            {/* Example of a personal project */}
                            <div className="border p-4 mb-4 rounded-md shadow-lg">
                                <h3 className="text-xl font-semibold">AI-Based Content Moderation API</h3>
                                <p className="text-sm text-gray-600">Developed a content moderation API to filter toxic, violent, and NSFW content using deep learning models. Built using Flask/FastAPI and Redis for fast processing.</p>
                            </div>
                            {/* Add more personal projects here */}
                        </div>
                    </div>

                    {/* Class Projects Section */}
                    <div className="my-6">
                        <h2 className="font-mono text-2xl font-semibold">Class Projects</h2>
                        <div className="mt-4">
                            {/* Example of a class project */}
                            <div className="border p-4 mb-4 rounded-md">
                                <h3 className="text-xl font-semibold">Neural Rendering DataLoader</h3>
                                <p className="text-sm text-gray-600">Implemented a DataLoader class for ray sampling in a neural rendering project, using a dataset of 100 images (200x200px) for training models.</p>
                            </div>
                            {/* Add more class projects here */}
                        </div>
                    </div>

                    {/* Hackathon Projects Section */}
                    <div className="my-6">
                        <h2 className="font-mono text-2xl font-semibold">Hackathon Projects</h2>
                        <div className="mt-4">
                            {/* Example of a hackathon project */}
                            <div className="border p-4 mb-4 rounded-md">
                                <h3 className="text-xl font-semibold">TreeHacks 2025</h3>
                                <p className="text-sm text-gray-600">Developed a real-time collaboration tool for hackathon teams, enabling seamless communication and project tracking.</p>
                            </div>
                            {/* Add more hackathon projects here */}

                            <div className="border p-4 mb-4 rounded-md">
                                <h3 className="text-xl font-semibold">TreeHacks 2025</h3>
                                <p className="text-sm text-gray-600">Developed a real-time collaboration tool for hackathon teams, enabling seamless communication and project tracking.</p>
                            </div>

                            <div className="border p-4 mb-4 rounded-md">
                                <h3 className="text-xl font-semibold">TreeHacks 2025</h3>
                                <p className="text-sm text-gray-600">Developed a real-time collaboration tool for hackathon teams, enabling seamless communication and project tracking.</p>
                            </div>
                            <div className="border p-4 mb-4 rounded-md">
                                <h3 className="text-xl font-semibold">TreeHacks 2025</h3>
                                <p className="text-sm text-gray-600">Developed a real-time collaboration tool for hackathon teams, enabling seamless communication and project tracking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
