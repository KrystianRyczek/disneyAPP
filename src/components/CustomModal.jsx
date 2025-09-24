import { useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled, { useTheme } from "styled-components"
import { appContext } from '../store/appContext';
import useCustomModal from '../hooks/useCustomModal';


export default function CustomModal({ref, closeBtnClickHandler}) {
  const {darkMode}=useContext(appContext)
  const theme = useTheme()
  const dialog = useRef();
  const {character} = useCustomModal(ref, dialog)

  const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: ${darkMode?theme.dark.backgroundColor:theme.light.backgroundColor};
    border: 2px solid ${darkMode?theme.dark.textColor:theme.light.textColor};
  `
  const Image = styled.img`
    height: 280px;
    width: 280px;
    object-fit: cover;
    border-radius: 100%;
    margin: 20px auto 0 ;
  `
  const Name = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 40px;
    margin: 20px 0 0 0;
    color: ${darkMode?theme.dark.textColor:theme.light.textColor};
  `
  const CloseBtn = styled.button`
    background-color: dodgerblue;
    width: 160px;
    height: 60px;
    margin: 10px auto 20px;
    border-radius: 30px;
    color: ${darkMode?theme.dark.textColor:theme.light.textColor};
  `
  const Title = styled.h2`
    margin: 5px 0 0 0;
    color: ${darkMode?theme.dark.textColor:theme.light.textColor};
  `
  const List = styled.ul`
    margin: 0 ;
  `
  const ItemList =styled.li`
    margin: 0;
    list-style: none;
    color: ${darkMode?theme.dark.textColor:theme.light.textColor};
  `

  return createPortal(
    <dialog style={{width: "400px", padding:"0"}}ref={dialog} onClose={closeBtnClickHandler}>
      <ModalContainer>
        <Image src={ref?.current?.value?.imageUrl}/>
        <Name>{ref?.current?.value?.name}</Name>
        {character?.films.length>0&&
          <>
            <Title>Films:</Title>
            <List>
              {character.films.map(film=><ItemList key={film}>{film}</ItemList>)}
            </List>
          </>
        }
        {character?.shortFilms.length>0&&
          <>
            <Title>Short films:</Title>
            <List>
              {character.shortFilms.map(shortFilm=><ItemList key={shortFilm}>{shortFilm}</ItemList>)}
            </List>
          </>
        }
        {character?.tvShows.length>0&&
          <>
            <Title>TV show:</Title>
            <List>
              {character.tvShows.map(tvShow=><ItemList key={tvShow}>{tvShow}</ItemList>)}
            </List>
          </>
        }
        {character?.videoGames.length>0&&
          <>
            <Title>Video games:</Title>
            <List>
              {character.videoGames.map(videoGame=><ItemList key={videoGame}>{videoGame}</ItemList>)}
            </List>
          </>
        }
        <CloseBtn type="button" onClick={closeBtnClickHandler}>Close</CloseBtn>
      </ModalContainer>
    </dialog>,
    document.getElementById('modal')
  );
}
