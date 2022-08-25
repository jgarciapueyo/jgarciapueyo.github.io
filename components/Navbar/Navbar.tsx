import React from "react";
import { about, experience, projects } from "../../data/config";

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul className="flex">
                {about !== undefined && (
                    <li>
                        About
                    </li>
                )}

                {experience !== undefined && (
                    <li>
                        Experience
                    </li>
                )}

                {projects.length > 0 && (
                    <li>
                        Projects
                    </li>
                )}
                
                <li>
                    Blog
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
