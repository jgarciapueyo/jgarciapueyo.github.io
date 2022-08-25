import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { about } from "../../data/config";

const About: React.FC<{}> = () => {
    const { name, role, description } = about;

    return (
        <div>
            <h1>
                Hi, I am <span>{name}</span>
            </h1>
            <h2>
                A {role}.
            </h2>
            <p>
                {description}
            </p>

            <div>
                <a>
                    <span>
                        Resume
                    </span>
                </a>

                <a>
                    <FaGithub />
                </a>
                <a>
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
}

export default About;