import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { about } from "../../../data/config";

const AboutSection: React.FC<{}> = () => {
    const { name, role, description } = about;

    return (
        <section id="about">
            <h1 className="text-center font-bold text-4xl mb-8">
                Hi, I am <span className="text-primary">{name}</span>
            </h1>
            <h2 className="text-center font-bold text-2xl mb-8">
                A {role}.
            </h2>
            <p className="text-justify text-bgText mb-8 mx-auto w-4/5">
                {description}
            </p>

            <div className="mx-auto max-w-xs flex justify-evenly">
                <a>
                    <span className="block py-2 px-4 font-semibold 
                                     transition duration-200 ease-in-out
                                     border-2 text-primary border-primary
                                     hover:text-bg hover:bg-primary">
                        resume
                    </span>
                </a>
                <a className="flex font-semibold text-bgText pb-0.5 
                              transition ease-in 
                              border-b-4 border-transparent 
                              hover:border-primary hover:text-primary">
                    <IconContext.Provider value={{className: "my-auto text-xl sm:text-2xl"}}>
                        <FaGithub />
                    </IconContext.Provider>
                </a>
                <a className="flex font-semibold text-bgText pb-0.5 
                              transition ease-in 
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