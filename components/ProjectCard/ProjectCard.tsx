import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard: React.FC<{project: any}> = ({ project }: any) => (
    <div>
        <h3>{project.name}</h3>

        <p>{project.description}</p>
        {project.stack !== undefined && (
            <ul>
                {project.stack.map((technology: any) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>
        )}

        {project.sourceCode !== undefined && (
            <a>
                <FaGithub />
            </a>
        )}
    </div>
);

export default ProjectCard;