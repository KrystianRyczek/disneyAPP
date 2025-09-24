import { useContext} from "react";
import { appContext } from "../store/appContext";

export default function useHeader(){
    const {setDarkMode} = useContext(appContext)

    const changeThemeHamdler = ()=>{
        setDarkMode(prevModeState=>{

            localStorage.darkMode=!prevModeState
            
            return !prevModeState})
    }

    return {changeThemeHamdler}
}