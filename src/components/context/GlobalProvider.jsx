import React, { useState, useEffect } from 'react'



export const GlobalContext = React.createContext()

const dark = 
     {
        ModeBackground:'hsl(207, 26%, 17%)',
        ModeElements: 'hsl(209, 23%, 22%)', 
        ModeText: 'hsl(0, 0%, 100%)',
        ModeInput: "hsl(0, 0%, 52%)",
    }
    const light = 
    {
       ModeBackground:'hsl(0, 0%, 98%)',
       ModeElements: 'hsl(0, 0%, 100%)', 
       ModeText: 'hsl(200, 15%, 8%)',
       ModeInput: "hsl(0, 0%, 52%)",
   }

export const AppProvider = ({children})=>{
    const [theme, setTheme] = useState(light)
    const [datas, setDatas] = useState([])
    const [pending, setPending] = useState(false)
    const [error, setError] = useState('')
    const [query, setQuery] = useState('')
    const [region, setRegion] = useState('')
    const [darkmode, setDarkMode] = useState(true)

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>{
        if (!res.ok) {
            throw Error('Error while fetching data')
        }
        
        setPending(true)
        return res.json()
        })
        .then(data =>{
        setDatas(data)
        setPending(false)
        })
        .catch(err =>{
        setError(err.message)
        })
    }, [])

    const filterItems = [...new Set(datas.map(item => item.region))]

    function Search(data) {
        return data.filter(
            (data) => 
                data.region.includes(region) &&
                    data.name.common.toLowerCase().includes(query.toLowerCase())
        )
    }

    return(
        <GlobalContext.Provider
        value={{
            darkmode,
            setDarkMode,
            theme,
            dark,
            light,
            setTheme,
            datas,
            pending,
            query,
            setQuery,
            filterItems,
            region,
            setRegion,
            Search
        }}>
            {children}
        </GlobalContext.Provider>
    )
}