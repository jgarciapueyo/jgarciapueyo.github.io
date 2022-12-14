import React from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";

const ProjectCard: React.FC<{project: any}> = ({ project }: any) => (
    <div className="p-8 my-0 mx-auto text-center shadow-primaryShadow shadow-xl
                    hover:scale-105">
        <h3 className="text-center font-bold text-l text-primary uppercase mb-4">{project.name}</h3>

        <p className="text-bgText mb-4 text-sm">{project.description}</p>
        {project.stack !== undefined && (
            <ul className="flex flex-wrap justify-center mb-4">
                {project.stack.map((technology: any) => (
                    <li className="text-sm text-primaryText m-2 font-bold" key={technology}>{technology}</li>
                ))}
            </ul>
        )}

        <div className="mx-auto max-w-xs flex justify-evenly">
            {project.sourceCode !== undefined && (
                <a href={project.sourceCode} target="_blank"
                className="flex font-semibold text-bgText pb-0.5 
                              border-b-4 border-transparent 
                              hover:border-primary hover:text-primary">
                    <IconContext.Provider value={{className: "my-auto text-xl sm:text-2xl"}}>
                        <FaGithub />
                    </IconContext.Provider>
                </a>
            )}
        </div>
    </div>
);

export default ProjectCard;