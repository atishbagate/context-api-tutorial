import React, { useContext } from 'react'
import ThemeContext from "../context/ThemContext"
import Test from './Test';

export default function ChangeThemeBtn() {
    const data = useContext(ThemeContext);

    console.log("data", data);
    return (
        <div>
            <h2>data : {data}</h2>
            <button>Change</button> 
        </div>
    )
}
