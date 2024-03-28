import React, { useContext } from 'react'
import ThemeContext from '../context/ThemContext'

export default function Test() {
    const data = useContext(ThemeContext);
    console.log("data in test component",data);
  return (
    <div>Test</div>
  )
}
