import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("white");
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