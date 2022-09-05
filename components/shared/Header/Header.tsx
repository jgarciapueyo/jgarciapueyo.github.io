import React from "react";
import Navbar from "../Navbar/Navbar";

const Header: React.FC<{}> = () => {
    return (
        <header className="h-20 w-full flex items-center justify-end">
            <Navbar />
        </header>
    );
}

export default Header;