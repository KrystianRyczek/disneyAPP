import { useContext } from "react";
import styled from "styled-components"
import { useTheme } from "styled-components";
import { appContext } from "../store/appContext";

export default function Card({character,openModalHandler}){
    
    const {darkMode} = useContext(appContext)
    const theme = useTheme()
    console.log(darkMode)
    const CardContainer = styled.li`
        width: 200px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 2px solid ${darkMode?theme.dark.textColor:theme.light.textColor};
        background-color: ${darkMode?theme.dark.backgroundColor:theme.light.backgroundColor};
        border-radius: 30px;
        color: ${darkMode?theme.dark.textColor:theme.light.textColor};
    `
    const CharacterImage = styled.img`
        width: 100%;
        max-height: 150px;
        object-fit:cover;
        border-top-right-radius: 30px;
         border-top-left-radius: 30px;
    `
    const CharacterName = styled.h2`
        width: 100%;
        height: 33px;
        font-size: 18px;
        text-align: center;
    `
    const ModeDetailsBtn = styled.button`
        margin: 0 auto;
        margin-bottom: 20px;
        background-color: dodgerblue;
        color: ${darkMode?theme.dark.textColor:theme.light.textColor};
        border-radius: 10px;
        text-transform: uppercase;
    `

    return(
        <CardContainer>
            <CharacterImage src={character.imageUrl}/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <CharacterName>{character.name}</CharacterName>
                <ModeDetailsBtn type="button" onClick={openModalHandler}>learn more</ModeDetailsBtn>
            </div>
        </CardContainer>
    )
}