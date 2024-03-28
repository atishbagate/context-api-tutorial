import {  createContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value="green">
             {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;