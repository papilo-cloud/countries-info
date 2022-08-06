import React, {useContext, useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { GlobalContext } from '../context/GlobalProvider';


const DetailedCountry = () => {

    const [detailedCountry, setDetailedCountry] = useState([])
    const [loading, setLoading] = useState(true);
    const {theme} = useContext(GlobalContext)
    const {ModeText,ModeElements} = theme

    let params = useParams();
    useEffect(() => {
      fetchName()
    }, [])
    
 
    
    const fetchName = async ()=>{
        const data = await fetch(`https://restcountries.com/v2/name/${params.id}`)
        const items = await data.json()
        setDetailedCountry(items)
        setLoading(false)
    }
    if (loading) {
        return <div className="loading"></div>
    }

  return (
    <>
    {detailedCountry.map((count,i) =>
    <div className='details' key={i}> 
        <div className='detail-img'>
            <Link to='/'>
                <button style={{backgroundColor: ModeElements, color: ModeText}}><FaArrowLeft style={{ fontSize: 12 }} /> back</button>
            </Link>
            
            <div className='img'>
                <img src={count.flags.png} alt="detail-img" />
            </div>
        </div>
        <div className="detail-text" style={{color: ModeText}}>
           <div className="text1">
                <h4>{count.name}</h4>
                <p>Native Name: <span>{count.nativeName}</span></p>
                <p>Population: <span>{count.population.toLocaleString()}</span></p>
                <p>Region: <span>{count.region}</span></p>
                <p>Sub Region: <span>{count.subregion}</span></p>
                <p>Capital: <span>{count.capital}</span></p>
           </div>
           <div className="text2">
                <p>Top Level Domain: <span>{count.topLevelDomain}</span></p>
                <p>Currencies: <span>{count.currencies[0].name}</span></p>
                <p>Language: {count.languages.map((lang,i) =>
                <span key={i} >{`${lang.name}, `}</span>)}</p>
           </div>
           <div className="border">
                <div>
                    <p>Border Countries:</p>
                </div>
                <div className='border-name' >
                    {count.borders && count.borders.map((br, x) => 
                    <button key={x}
                    style={{backgroundColor: ModeElements, color: ModeText}}>{br}</button>
                    )}
                </div>
           </div>
        </div>
        
    </div>
    )}
    </>
  )
}

export default DetailedCountry
