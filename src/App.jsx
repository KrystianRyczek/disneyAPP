
import './App.css'
import Theme from './components/Theme';
import { useContext } from 'react'
import { appContext } from './store/appContext'
import CharactersList from './components/CharactersList'
import Header from './components/Header'
import Error from './components/Error'
import Spinner from './components/Spinner'
import styled from 'styled-components';
import Pagination from './components/Pagination';

function App() {
  const {error, isLoading} = useContext(appContext)

  const Main = styled.main`
    min-height:100vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  `
  return (
    <Theme>
      <Main>
        {error&&<Error/>}
        {!error&&
          <>
            <Header/>
            {!isLoading
              ?<CharactersList/>
              :<Spinner/>
            }
            <Pagination/>
          </>
        }
      </Main>
    </Theme>
  )
}

export default App
