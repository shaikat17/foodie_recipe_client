import { createContext, useEffect, useState } from "react";


const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    useEffect(() => {
      localStorage.setItem('theme', theme)
      const localTheme = localStorage.getItem('theme')
      
    //   set the theme
    document.querySelector('html').setAttribute('data-theme', localTheme)
    },[theme])

    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider}