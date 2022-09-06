import Link from "next/link";
import React from "react";
import { about, experience, projects } from "../../../data/config";
import { MdBrightness2 } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { useAppContext } from "../AppWrapper/AppWrapper";

const NavbarLink: React.FC<any> = ({href, children}: any) => {
    return (
        <Link href={href}>
            <a className="text-bgText pb-0.5 border-b-4 border-transparent hover:border-primary hover:text-primary">
                {children}
            </a>
        </Link>
    );
}

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useAppContext();

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
                onClick={() => {toggleTheme(theme == "light" ? "dark" : "light")}}
            >
                {
                    theme == "light" ?
                        <MdBrightness2 className="text-primary text-xl sm:text-2xl" /> :
                        <IoMdSunny className="text-primary text-xl sm:text-2xl"/>
                }
            </button>
        </nav>
    );
}

export default Navbar;
