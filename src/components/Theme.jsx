import { ThemeProvider } from 'styled-components';



export default function Theme({ children }) {

  const themeMode = {
        light:{    
            backgroundColor:"white",
            textColor:"black",
            borderColor:"black",
        },
        dark:{
            backgroundColor:"black",
            textColor:"white",
            borderColor:"white",
        }
  };

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
}