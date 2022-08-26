import React from "react";
import { projects } from "../../../data/config";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsSection: React.FC<{}> = () => {
    if (projects.length === 0) {
        return null;
    } 

    return (
        <section>
            <h2>Projects</h2>

            <div>
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project}/>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;