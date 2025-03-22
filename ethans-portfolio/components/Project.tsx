import { FaGithubSquare } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

interface ProjectType {
    title: string;
    description: string;
    githubLink?: string;
    docLink?: string;
    award?: string;
    techStack: string;
}

export default function Project({ title, description, githubLink, docLink, award, techStack }: ProjectType) {
    return (
        <div className="border p-4 mb-4 rounded-md">
            <h3 className="text-2xl font-semibold flex justify-between items-start">
                <span className="flex-1">{title}</span>
                {githubLink ? (
                    <a 
                        target="_blank" 
                        href={githubLink} 
                        rel="noopener noreferrer" 
                        className="text-3xl"
                    >
                        <FaGithubSquare />
                    </a>
                ) : docLink ? (
                    <a 
                        target="_blank" 
                        href={docLink} 
                        rel="noopener noreferrer" 
                        className="text-3xl"
                    >
                        <CgFileDocument />
                    </a>
                ) : null}
            </h3>
            {award && <p className="text-[16px] italic">🌟 {award}</p>}
            <p className="text-[14px]">{description}</p>
            <br />
            <p className="font-mono text-xs">Tech Stack: {techStack}</p>
        </div>
    );
}
