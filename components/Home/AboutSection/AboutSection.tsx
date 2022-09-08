import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { about } from "../../../data/config";

const AboutSection: React.FC<{}> = () => {
    const { name, role, description, social } = about;

    return (
        <section id="about">
            <h1 className="text-center text-primaryText font-bold text-4xl leading-snug mb-8">
                Hi, I am <span className="text-primary">{name}</span>
            </h1>
            <h2 className="text-center text-primaryText font-bold text-2xl mb-8">
                A {role}.
            </h2>
            <p className="text-justify text-bgText mb-8 mx-auto w-4/5">
                {description}
            </p>

            <div className="mx-auto max-w-xs flex justify-evenly">
                <a href="/2022_JorgeGarciaPueyo_CV_EN.pdf" target="_blank">
                    <span className="block py-2 px-4 font-semibold 
                                     border-2 text-primary border-primary
                                     hover:text-bg hover:bg-primary">
                        resume
                    </span>
                </a>
                <a href={social.github} target="_blank"
                className="flex font-semibold text-bgText pb-0.5 
                              border-b-4 border-transparent 
                              hover:border-primary hover:text-primary">
                    <IconContext.Provider value={{className: "my-auto text-xl sm:text-2xl"}}>
                        <FaGithub />
                    </IconContext.Provider>
                </a>
                <a href={social.linkedin} target="_blank"
                className="flex font-semibold text-bgText pb-0.5 
                              border-b-4 border-transparent 
                              hover:border-primary hover:text-primary">
                    <IconContext.Provider value={{className: "my-auto text-xl sm:text-2xl"}}>
                        <FaLinkedin />
                    </IconContext.Provider>
                </a>
            </div>
        </section>
    );
}

export default AboutSection;