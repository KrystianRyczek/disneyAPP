import { appContext } from "../store/appContext";
import { useContext} from "react";

export default function usePagination(){
    
    const {setIsLoading, setPageNumber, maxPages} = useContext(appContext)
   
    const clickBtnHandler = (newPageNumber)=>{
        setIsLoading(true)
        if(newPageNumber === "start"){
            setPageNumber(1)
        }else if(newPageNumber === "end"){
            setPageNumber(maxPages.current)
        }else{
            setPageNumber(prevPage=>prevPage+newPageNumber)
        }
    }

    return{clickBtnHandler}
}