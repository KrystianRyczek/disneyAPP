import { useContext } from "react"
import styled, { useTheme } from "styled-components"
import { appContext } from "../store/appContext"

export default function Spinner(){
    const {darkMode} = useContext(appContext)
    const theme = useTheme()

    const Spiner = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: ${darkMode?theme.dark.backgroundColor:theme.light.backgroundColor};
        color: ${darkMode?theme.dark.textColor:theme.light.textColor};
    `
    return(
        <Spiner>
           <h2>Loading...</h2>     
        </Spiner>
        
    )
}