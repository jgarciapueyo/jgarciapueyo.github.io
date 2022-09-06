import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    theme: "light",
    toggleTheme: (theme: "light" | "dark") => {},
});

export const AppWrapper: React.FC<any> = ({children} : any) => {
    const [ theme, toggleTheme ] = useState("light");
    return (
        <AppContext.Provider value={{theme, toggleTheme }}>
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext= () => {
    return useContext(AppContext);
}