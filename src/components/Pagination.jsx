import { useContext} from "react";
import styled, { useTheme } from "styled-components";
import { appContext } from "../store/appContext";
import usePagination from "../hooks/usePagination"

export default function Pagination(){
    const theme = useTheme()
    const {isLoading, setIsLoading, pageNumber, darkMode, maxPages} = useContext(appContext)
    const {clickBtnHandler} = usePagination()

    const Pagination = styled.div`
        width: 1280px;
        height:100px;
        background-color: ${darkMode?theme.dark.backgroundColor:theme.light.backgroundColor};
        display:flex;
        justify-content: center;
        padding: 30px 20px 0 20px;
        border-top: 2px solid ${darkMode?theme.dark.textColor:theme.light.textColor};
        gap:10px;
        `;
    const ButtonContainerLeft = styled.div`
        width: 250px;
        display: flex;
        justify-content: end;
        gap:10px;
    `
    const ButtonContainerRight = styled.div`
        width: 250px;
        display: flex;
        justify-content: start;
        gap:10px;
    `    
    const Button = styled.button`
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: dodgerblue;
        color: ${darkMode?theme.dark.textColor:theme.light.textColor};
    `
    const Pharagrath =styled.p`
        color: ${darkMode?theme.dark.textColor:theme.light.textColor};
    `
    return(
        <>
            <Pagination>
                <ButtonContainerLeft>
                    {(pageNumber-1>0)&&<Button onClick={()=>{clickBtnHandler(-1)}} disabled={isLoading}>{'<<'}</Button>}
                    {(pageNumber-3>0)&&<Button onClick={()=>{clickBtnHandler("start")}}>{1}</Button>}
                    {(pageNumber-3>0)&&<Pharagrath>...</Pharagrath>}
                    {(pageNumber-2>0)&&<Button onClick={()=>{clickBtnHandler(-2)}} disabled={isLoading}>{pageNumber-2}</Button>}
                    {(pageNumber-1>0)&&<Button onClick={()=>{clickBtnHandler(-1)}} disabled={isLoading}>{pageNumber-1}</Button>}
                </ButtonContainerLeft>
                    <Button style={{backgroundColor:"lightblue"}}>{pageNumber}</Button>
                <ButtonContainerRight>
                    {(pageNumber+1<=maxPages.current)&&<Button onClick={()=>{clickBtnHandler(1)}} disabled={isLoading}>{pageNumber+1}</Button>}
                    {(pageNumber+2<maxPages.current)&&<Button onClick={()=>{clickBtnHandler(2)}} disabled={isLoading}>{pageNumber+2}</Button>}
                    {(pageNumber+3<maxPages.current)&&<Pharagrath>...</Pharagrath>}
                    {(pageNumber+3<maxPages.current)&&<Button onClick={()=>{clickBtnHandler("end")}}>{maxPages.current}</Button>}
                    {(pageNumber+1<=maxPages.current)&&<Button onClick={()=>{clickBtnHandler(1)}} disabled={isLoading}>{'>>'}</Button>}
                </ButtonContainerRight>
            </Pagination>
        </>
    )
}