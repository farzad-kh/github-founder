import React, { createContext, useState,useEffect } from 'react';
export const ThemeContext = createContext()
const ThemeContextPro = ({ children }) => {
   
  
    const [theme, setTheme] = useState(() => {
        const isDark = localStorage.getItem('isDark');
        // if showBanner null/undefined fallback to true
        return JSON.parse(isDark) ?? true;
      });
      const nightModeHandler = () => {
       
        if (theme) {
            document.documentElement.dataset.theme = "night"
        } else {
            document.documentElement.dataset.theme = "light"
        }
        setTheme(!theme)
    }

    
    useEffect(() => {
        localStorage.setItem('isDark', theme);
        
     
       
        if (theme) {
            document.documentElement.dataset.theme = "light"
        } else {
            document.documentElement.dataset.theme = "night"
        }
       
      }, [theme]);

  
  

        return (
            <ThemeContext.Provider value={{theme,nightModeHandler}}>
                {children}
            </ThemeContext.Provider>
        );
    };

    export default ThemeContextPro;