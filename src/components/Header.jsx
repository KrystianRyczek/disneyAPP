import { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { appContext } from "../store/appContext";
import useHeader from "../hooks/useHeader"
export default function Header(){
    
    const theme = useTheme()
    const {changeThemeHamdler} =useHeader()
    const {darkMode} = useContext(appContext)

    const Header = styled.div`
        width: 1280px;
        height:150px;
        background-color: ${darkMode?theme.dark.backgroundColor:theme.light.backgroundColor};
        display:flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        border-bottom: 2px solid ${darkMode?theme.dark.textColor:theme.light.textColor};
        `;
    const Logo = styled.h1`
        color: ${darkMode?theme.dark.textColor:theme.light.textColor};
        margin:0;
    `
    const Label = styled.label`
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    `
    const Switch =styled.div`
        position: relative;
        width: 60px;
        height: 28px;
        background: black;
        border-radius: 32px;
        padding: 4px;
        transition: 300ms all;

        &:before {
            transition: 300ms all;
            content: "";
            position: absolute;
            width: 28px;
            height: 28px;
            border-radius: 35px;
            top: 50%;
            left: 4px;
            background: ${darkMode?theme.dark.backgroundColor:theme.light.backgroundColor};
            transform: translate(0, -50%);
        }
    `
    const Input = styled.input`
        opacity: 0;
        position: absolute;
        display: none;
        &:checked + ${Switch } {
            background: white;
            &:before {
            transform: translate(32px, -50%);
            }
        }
    `
    return(

        <Header>
            <Logo>DisneyAPP</Logo>
            <Label>
                <Input type = 'checkbox' defaultChecked={darkMode} onChange={changeThemeHamdler}/>
                <Switch />
            </Label>
        </Header>
    )

}