import React, { useContext } from 'react'
import ThemeContext from '../context/ThemContext';

const Main = () => { 
  const {theme,changeThemefun} = useContext(ThemeContext);
  return (
    <div>
      <hr/>
      Theme : {theme}
      <button onClick={changeThemefun}>Change</button> 
    </div>
  )
}

export default Main;