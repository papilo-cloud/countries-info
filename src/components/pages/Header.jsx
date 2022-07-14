import React, { useContext } from 'react'
import { SwitchButton } from '../context/ChageThemes'
import { GlobalContext } from '../context/GlobalProvider'
// import SwitchButton from './SwitchButton'

const Header = () => {
  const {theme} = useContext(GlobalContext)
  const {ModeText,ModeElements} = theme

  return (
    <header style={{backgroundColor: ModeElements, color: ModeText}}>
        <ul>
            <li>Where in the world?</li>
            <SwitchButton />
        </ul>
    </header>
  )
}

export default Header