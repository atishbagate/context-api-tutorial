import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const prevTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(prevTheme);
    useEffect(()=>{
        localStorage.setItem("theme",theme);
    },[theme])
    const changeThemefun = () => {setTheme((theme) => (theme === "white" ? "dark" : "white"))}
    return (
        <ThemeContext.Provider
            value={{ theme, setTheme,changeThemefun }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;