import React from "react";
import { useAppContext } from "../AppWrapper/AppWrapper";

const Layout: React.FC<any> = ({ children }: any) => {
  const { theme } = useAppContext();
  
    return (
        <main className={`${theme === "light" ? "theme-light" : "theme-dark"}`}>
            <div className="max-w-6xl w-11/12 my-0 mx-auto ">
                {children}
            </div>
        </main>
    )
}

export default Layout;