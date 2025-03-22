import Typewriter from "./Typewriter";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

const Main = () => {
    const resumeLink = "https://drive.google.com/file/d/1cIoVZyTKobMiYLllEYkcVO6ajqW8XPJO/view?usp=sharing";
    const linkedinLink = "https://www.linkedin.com/in/ethantam5133/";
    const githubLink = "https://github.com/ethan-tam33";
    
    return (
        <section id="home" className="animate-fadeIn animation-delay-2 selection:bg-blue-100 dark:selection:bg-blue-500 pt-12">
            <div className="flex flex-col text-center items-center justify-center my-6 py-10 sm:py-20 md:py-20 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-0 md:w-1/2 animate-fadeIn animation-delay-4">
                    <Image
                        src="/headshot.png"
                        alt=""
                        width={325}
                        height={325}
                        className="rounded-full transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400"
                    />
                </div>

                <div className="md:mt-0 md:w-3/5 animate-fadeIn animation-delay-4">
                    <h1 className="font-sans text-4xl font-bold mt-4 md:mt-0 md:text-7xl"> 
                        <Typewriter text={"Hi, I'm Ethan."} delay={100}></Typewriter>
                    </h1>
                    <br></br>
                    <h2 className="font-mono mt-2">
                        <div>
                            I'm a third-year CS undergraduate at UC Berkeley, software engineer, and researcher. 
                        </div>

                        <br></br>

                        <div>
                            I'm currently interested in full-stack + backend development, machine learning in the biology domain, and equitable CS education.
                        </div>

                        <br></br>

                        <div>
                            This summer I'll be interning @ Uber as a SWE Intern and teaching an Intro to CS course @ SSF.
                        </div>

                        <br></br>

                        <div>
                            You can find my&nbsp;
                            <a className="font-semibold hover:bg-blue-100 hover:dark:bg-blue-500 transition ease-in-out duration-300 rounded-full" href={resumeLink} target="_blank">resume here</a>
                            .
                        </div>

                        <br></br>

                        <div>email: ethantam [at] berkeley [dot] edu</div>
                        <div>&nbsp;</div>
                        <div className="flex items-center space-x-8">
                            <a href={linkedinLink} target="_blank">
                                <CiLinkedin className="text-4xl" />
                            </a>
                            <a href={githubLink} target="_blank">
                                <FaGithubSquare className="text-3xl" />
                            </a>
                        </div>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Main;
