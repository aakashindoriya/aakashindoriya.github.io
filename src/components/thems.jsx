import { createContext, useState } from "react";

export let Theme=createContext()

let Light={
    name:"light",
    borderColor:"gray",
    textcolor:"black",
    bgColor:"white",



}
let dark={
    name:"dark",
    borderColor:"gray",
    textcolor:"white",
    bgColor:"rgb(33,36,40)",
}

export default function ThemeProvider({children}){
     let [theme,setthem]=useState(Light)
     function changeTheme(){
        setthem(theme.name==="light"?dark:Light)
     }
   return( <Theme.Provider value={{theme,changeTheme}}>{children}</Theme.Provider>)
}