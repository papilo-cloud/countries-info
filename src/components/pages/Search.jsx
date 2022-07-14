import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalProvider'


const Search = () => {

  const {theme,setQuery,filterItems,region, setRegion} = useContext(GlobalContext)
  const {ModeInput,ModeElements} = theme;

  const handleChange = (e) =>{
    setRegion(e.target.value)
  }
 
  return (
    <form className='form-input'>
        <input type="text" 
         style={{color: ModeInput, backgroundColor:ModeElements }}
        onChange={e => setQuery(e.target.value)}
        placeholder='Search for a country...'
        />

        <select value={region} 
         style={{color: ModeInput, backgroundColor:ModeElements }}
        onChange={handleChange}>
          <option value=' '>Filter by region</option>
          { filterItems.map((region, i) => 
          <option value={region} key={i}>{region}</option>)}
          
        </select>
    </form>
  )
}

export default Search