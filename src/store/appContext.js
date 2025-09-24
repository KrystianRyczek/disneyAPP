import { createContext } from "react";


const init={
            darkMode:false, 
            setDarkMode:()=>{},
            characters:[],
            error:null,
            isLoading:false,
            setIsLoading:()=>{},
            pageNumber:1,
            setPageNumber:()=>{},
            maxPages:1
  };

export const appContext = createContext(init)