import Link from "next/link";
import React from "react";
import { about, experience, projects } from "../../../data/config";
import { MdBrightness2, MdClose, MdMenu } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { useAppContext } from "../AppWrapper/AppWrapper";

const NavbarLink: React.FC<any> = ({href, children, onClick}: any) => {
    return (
        <Link href={href}>
            <a onClick={onClick}
               className="text-bgText pb-0.5 border-b-4 border-transparent hover:border-primary hover:text-primary">
                {children}
            </a>
        </Link>
    );
}

const Navbar: React.FC = () => {
    const { theme, toggleTheme, showNavList, setShowNavList } = useAppContext();

    const toggleNavList = () => setShowNavList(!showNavList);

    return (
        <nav className="flex items-center">
            <ul className={`
                ${ showNavList ? 'flex' : 'invisible' }
                flex flex-col justify-center content-center items-center top-0 bottom-0 left-0 right-0 fixed w-full h-screen z-10 
                md:flex md:visible md:flex md:mr-10
                md:flex-row md:justify-end md:content-end md:relative md:w-auto md:h-auto
                `}>
                {about !== undefined && (
                    <li className="my-2 md:my-0 md:ml-10">
                        <NavbarLink href="/#about" onClick={toggleNavList}>
                            About
                        </NavbarLink>
                    </li>
                )}

                {experience !== undefined && (
                    <li className="my-2 md:my-0 md:ml-10">
                        <NavbarLink href="/#experience" onClick={toggleNavList}>
                            Experience
                        </NavbarLink>
                    </li>
                )}

                {projects.length > 0 && (
                    <li className="my-2 md:my-0 md:ml-10">
                        <NavbarLink href="/#projects" onClick={toggleNavList}>
                            Projects
                        </NavbarLink>
                    </li>
                )}
                
                <li className="my-2 md:my-0 md:ml-10">
                    <NavbarLink href="/blog" onClick={toggleNavList}>
                        Blog
                    </NavbarLink>
                </li>
            </ul>
            <button
                type='button'
                aria-label='toggle theme'
                onClick={() => {toggleTheme(theme == "light" ? "dark" : "light")}}
                className="mr-4 md:mr-0 z-20"
            >
                {
                    theme == "light" ?
                        <MdBrightness2 className="text-primary text-xl sm:text-2xl" /> :
                        <IoMdSunny className="text-primary text-xl sm:text-2xl"/>
                }
            </button>

            <button
                type='button'
                aria-label='toggle navigation'
                onClick={toggleNavList}
                className="md:hidden z-20"
            >
                {
                    showNavList ?
                        <MdClose className="text-primary text-xl sm:text-2xl"/> :
                        <MdMenu className="text-primary text-xl sm:text-2xl" />
                }
            </button>
        </nav>
    );
}

export default Navbar;
