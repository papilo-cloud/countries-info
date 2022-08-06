import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalProvider'

const Country = () => {

  const {theme,datas,pending,Search} = useContext(GlobalContext)
  const {ModeText} = theme
    if (pending) {
        return <div className='loading'></div>
    }

  return (
    <div className="container" style={{color:ModeText}}>
        
      {Search(datas).map((data, i) => 
      <div className='country' key={i}>
      <div className='flag'>
          <img src={data.flags.png} alt="image2" />
      </div>
      <div className='text'>
        <Link to={`/${data.name.common}`}>
          <h4>{data.name.common}</h4>
        </Link>
          <p>Population: <span>{data.population.toLocaleString()}</span></p>
          <p>Region: <span>{data.region}</span></p>
          <p>Capital: <span>{data.capital}</span></p>
      </div>
  </div>)}
  
    </div>
  )
}

export default Country
