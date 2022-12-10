import {createContext, useContext, useState} from "react";

const ThemeContext = createContext()

export const ThemeProvider = props => {

    const themeLocalStorage = localStorage.getItem("theme")
    const [theme, setTheme] = useState(themeLocalStorage === null ? "dark" : themeLocalStorage)


    const changeTheme = themeReceived => {

        if (themeReceived !== theme) {
            setTheme(themeReceived)
            localStorage.setItem("theme", themeReceived)
        }

    }

    return (
        <ThemeProvider.Provider value={{theme, changeTheme}}>
            {props.children}
        </ThemeProvider.Provider>
    )

    export function useTheme() {
        return useContext(ThemeContext)
    }

}