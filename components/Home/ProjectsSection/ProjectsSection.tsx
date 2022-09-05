import React from "react";
import { projects } from "../../../data/config";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsSection: React.FC<{}> = () => {
    if (projects.length === 0) {
        return null;
    } 

    return (
        <section id="projects">
            <h2 className="text-center font-bold text-xl text-bgText uppercase mb-2">Projects</h2>

            <div className="my-0 mx-auto grid grid-cols-auto-fit gap-10">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project}/>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;