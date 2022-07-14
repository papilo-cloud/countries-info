import React from 'react'
import { AppProvider } from './components/context/GlobalProvider'
import Home from './components/pages/Home'

const App = () => {
  return (
    <AppProvider>
        <Home />
    </AppProvider>
  )
}

export default App