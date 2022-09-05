import React from "react";

const Layout: React.FC<any> = ({ children }: any) => {
    return (
        <main className="max-w-6xl w-11/12 my-0 mx-auto">
            {children}
        </main>
    )
}

export default Layout;