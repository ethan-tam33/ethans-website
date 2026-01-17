import Typewriter from "./Typewriter";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

const Main = () => {
    const linkedinLink = "https://www.linkedin.com/in/ethantam5133/";
    const githubLink = "https://github.com/ethan-tam33";
    
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center animate-fadeIn animation-delay-2 selection:bg-blue-100 dark:selection:bg-blue-500">
            <div className="flex flex-col text-center items-center justify-center md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-0 md:w-1/2 animate-fadeIn animation-delay-4">
                    <Image
                        src="/headshot2.jpeg"
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
                            I'm a fourth-year CS undergraduate at UC Berkeley, software engineer, and researcher. 
                        </div>

                        <br></br>

                        <div>
                            I'm currently interested in full-stack + backend development, machine learning in the biology domain, and equitable CS education. Outside of school, I'm a baker, a hackathon enthusiast, and a One Piece fan.
                        </div>

                        <br></br>

                        <div>email: ethantam [at] berkeley [dot] edu</div>

                        <br></br>

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
