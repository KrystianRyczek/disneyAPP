import { useContext } from "react"
import styled, { useTheme } from "styled-components"
import { appContext } from "../store/appContext"

export default function(){
    const theme = useTheme()
    const {darkMode} = useContext(appContext)

    const ErrorContainer = styled.div`
        width: 100vh;
        height: 100vw;
        display: flex;
        justify-content: center;
        background-color: ${darkMode?theme.dark.backgroundColor:theme.light.backgroundColor};
        color: ${darkMode?theme.dark.textColor:theme.light.textColor};
    `
    const Error = styled.h1`
        background-color: ${darkMode?theme.dark.backgroundColor:theme.light.backgroundColor};
        color: ${darkMode?theme.dark.textColor:theme.light.textColor};
        display: flex;
        margin-top: 200px;
    `
    
    return(
        <ErrorContainer>
            <Error>Something went wrong, please try later...</Error>
        </ErrorContainer>

    )
}