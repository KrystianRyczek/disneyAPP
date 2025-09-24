import { useState, useEffect, useRef} from "react"
import { appContext } from "./appContext"
import { fetchGetDataFunction } from "../helpers/fetch"

export default function AppContextProvider({children}){
    const maxPages = useRef(0)
    const [error, setError] = useState(null)
    const [darkMode, setDarkMode] = useState(localStorage.darkMode==="true"?true:false)
    const [pageNumber, setPageNumber] = useState(1)
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=>{ 
        (async ()=>{
            setIsLoading(true)
            const url =`https://api.disneyapi.dev/character?page=${pageNumber}&pageSize=50`
            const msgOnFail= 'Could not fetch characters!'
            const dataRespons = await fetchGetDataFunction({url, msgOnFail})
            if(!dataRespons.fetchSucceed){
                setError(dataRespons.serverErrorMessage)
                setIsLoading(false)
            }
            if(dataRespons.fetchSucceed){
                setCharacters(dataRespons.serverData.data)
                maxPages.current=dataRespons.serverData.info.count
                setError(null)
                setIsLoading(false)
            }
        })()
    },[pageNumber])

    const contextValue={
        darkMode,
        setDarkMode,
        characters,
        error,
        isLoading,
        setIsLoading,
        pageNumber,
        setPageNumber,
        maxPages,
    }

    return(
        <appContext.Provider value={contextValue}>
        {children}
        </appContext.Provider>

    )
}