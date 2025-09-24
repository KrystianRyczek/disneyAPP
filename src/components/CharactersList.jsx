import { useContext, useRef } from "react"
import { appContext } from "../store/appContext"
import Card from "./Card"
import styled, { useTheme } from "styled-components"
import CustomModal from "./CustomModal"
import useCharactersList from "../hooks/useCharactersList"

export default function CharactersList(){

    const theme = useTheme()
    const modal =useRef()
    const selectedCharacter = useRef(null)
    const {characters, darkMode}= useContext(appContext)
    const  {openModalHandler,closeBtnClickHandler} =useCharactersList(modal)

    const CharactersSection = styled.section`
        width: 1280px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 15px 20PX;
        background-color: ${darkMode?theme.dark.backgroundColor:theme.light.backgroundColor};
    `
    const CardList = styled.ul`
        width: 100%;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
    `
    console.log(characters)
    return(
        <>
            <CustomModal ref={modal} closeBtnClickHandler={closeBtnClickHandler} selectedCharacter={selectedCharacter}/>
            <CharactersSection>
                <CardList>
                    {characters.map(character=>
                        <Card
                            key={character.imageUrl+character.name} 
                            openModalHandler={()=>{openModalHandler(character)}} 
                            character={character}
                        />
                    )}
                </CardList>
            </CharactersSection>
        </>
    )
}