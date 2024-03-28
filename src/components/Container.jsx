import React, { useContext } from 'react'
import ChangeThemeBtn from './ChangeThemeBtn'
import Main from './Main'
import LanChange from './LanChange'
import ThemeContext from '../context/ThemContext';

function Container() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme}>
            <ChangeThemeBtn />
            <Main />
            <LanChange />
        </div>
    )
}

export default Container