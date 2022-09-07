import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    theme: "light",
    toggleTheme: (theme: "light" | "dark") => {},
    showNavList: false,
    setShowNavList: (activate: boolean) => {}
});


export const AppWrapper: React.FC<any> = ({children} : any) => {
    const [ theme, toggleTheme ] = useState("light");
    const [ showNavList, setShowNavList ] = useState(false);
    return (
        <AppContext.Provider value={{ theme, toggleTheme, showNavList, setShowNavList }}>
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}

export const useNavbarState = () => {
    return useState(false);
}