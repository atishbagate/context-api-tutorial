import { useState } from "react";

const prevTheme = localStorage.getItem("theme");

const useTheme = () => {
    const [theme, setTheme] = useState(prevTheme);
    const changeThemefun = () => {setTheme((theme) => (theme === "white" ? "dark" : "white"))}

    return {theme,setTheme,changeThemefun};
}
export default useTheme;

