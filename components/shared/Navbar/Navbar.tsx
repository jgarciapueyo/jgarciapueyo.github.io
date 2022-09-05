import Link from "next/link";
import React, { useState } from "react";
import { about, experience, projects } from "../../../data/config";
import { MdBrightness2 } from "react-icons/md";

const NavbarLink: React.FC<any> = ({href, children}: any) => {
    return (
        <Link href={href}>
            <a className="text-bgText pb-0.5 transition duration-4000 ease-in border-b-4 border-transparent hover:border-primary hover:text-primary">
                {children}
            </a>
        </Link>
    );
}

const Navbar: React.FC = () => {
    const [isLightTheme, setLightTheme] = useState<boolean>(true);

    return (
        <nav className="flex items-center">
            <ul className="flex mr-10">
                {about !== undefined && (
                    <li className="ml-10">
                        <NavbarLink href="#about">
                            About
                        </NavbarLink>
                    </li>
                )}

                {experience !== undefined && (
                    <li className="ml-10">
                        <NavbarLink href="#experience">
                            Experience
                        </NavbarLink>
                    </li>
                )}

                {projects.length > 0 && (
                    <li className="ml-10">
                        <NavbarLink href="#projects">
                            Projects
                        </NavbarLink>
                    </li>
                )}
                
                <li className="ml-10">
                    <NavbarLink href="#blog">
                        Blog
                    </NavbarLink>
                </li>
            </ul>
            <button
                type='button'
                aria-label='toggle theme'
                onClick={() => {
                    if(isLightTheme) {
                        document.documentElement.classList.remove('dark')
                    } else {
                        document.documentElement.classList.add('dark')
                    }
                    console.log(isLightTheme);
                    setLightTheme(!isLightTheme);
                }}
            >
                <MdBrightness2 />
            </button>
        </nav>
    );
}

export default Navbar;
