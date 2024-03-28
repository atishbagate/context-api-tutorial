import { createContext, useEffect, useState } from "react";
import useTheme from "./useThemeHook";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => { 
    const {theme,setTheme,changeThemefun} = useTheme();
    useEffect(()=>{
        localStorage.setItem("theme",theme);
    },[theme])
      return (
        <ThemeContext.Provider
            value={{ theme, setTheme,changeThemefun }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;