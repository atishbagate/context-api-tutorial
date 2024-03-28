import React, { useContext } from 'react'
import ThemeContext from "../context/ThemContext"
import Test from './Test';

export default function ChangeThemeBtn() {
    const {theme,changeThemefun} = useContext(ThemeContext);

    // console.log("data", data);
    return (
        <div>
            <h2>data :  {theme}</h2>
            <button onClick={changeThemefun}>Change</button> 
        </div>
    )
}
