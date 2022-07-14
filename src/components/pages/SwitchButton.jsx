import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider';

const SwitchButton = () => {
  const {theme,setTheme} = useContext(GlobalContext)
  const {ModeBackground} = theme
  console.log(ModeBackground);
  return (
    <button> <li>Dark Mode</li></button>
  )
}

// export default SwitchButton