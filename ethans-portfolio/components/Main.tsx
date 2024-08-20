"use client"
import React, { useState, useEffect } from "react";
import Typewriter from "./Typewriter";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

const Main = () => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
      let theme = localStorage.getItem('theme') || 'light';
      setTheme(theme);
    }, []);

    if (!theme) {
        return null; // `theme` is null in the first render
    }

    const resumeLink = "https://drive.google.com/file/d/15Xm5d1Qzm0Vqqc_8LoB3GUYGKfJZf10W/view?usp=sharing";
    const linkedinLink = "https://www.linkedin.com/in/ethantam5133/";
    const githubLink = "https://github.com/ethan-tam33";
    
    return (
        <section id="home" className="animate-fadeIn animation-delay-2 selection:bg-blue-100 dark:selection:bg-blue-500">
            <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-28 md:py-28 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2 animate-fadeIn animation-delay-4 ">
                    <Image
                        src="/headshot.png"
                        alt=""
                        width={325}
                        height={325}
                        className="rounded-full transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
                    />
                </div>

                <div className="md:mt-2 md:w-3/5 animate-fadeIn animation-delay-4">
                    <h1 className="font-sans text-4xl font-bold mt-6 md:mt-0 md:text-7xl"> 
                        <Typewriter text={"Hi, I'm Ethan."} delay={100}></Typewriter>
                    </h1>
                    <h2 className="font-mono mt-3">
                        <div>
                            I'm a student, software engineer, and baker. 
                        </div>

                        <div>
                            You can find my&nbsp;
                            <a className="font-semibold hover:bg-blue-100 hover:dark:bg-blue-500 transition ease-in-out duration-300 rounded-full" href={resumeLink} target="_blank">resume here</a>
                            .
                        </div>
                        <div>&nbsp;</div>
                        <div className="flex items-center space-x-5">
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