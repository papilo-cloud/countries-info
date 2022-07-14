import React, { useContext ,useState} from 'react'
import { GlobalContext } from '../context/GlobalProvider';
import { FaCloudMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";




export const SwitchButton = () => {
  const {theme,setTheme,dark,light,darkmode,setDarkMode,} = useContext(GlobalContext)
  const {ModeText} = theme

  return (<>
        <button 
        style={{color: darkmode? ModeText:ModeText}}
        onClick={()=>{darkmode ? setTheme(dark): setTheme(light); setDarkMode(!darkmode)}}
         >
           {darkmode? <FaCloudMoon />: <FaSun />}
              Mode
        </button>
  </>)
}
