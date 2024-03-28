import React, { useContext } from 'react'
import ThemeContext from '../context/ThemContext';
import LanContext from '../context/LanContext';

const Main = () => {
  const { theme, changeThemefun } = useContext(ThemeContext);
  const { lan } = useContext(LanContext);
  return (
    <div>
      <hr />
      <p>Theme : {theme}</p>
      <p>Language : {lan}</p>
      <button onClick={changeThemefun}>Change</button>
    </div>
  )
}

export default Main;