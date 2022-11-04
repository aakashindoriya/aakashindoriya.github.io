import { createContext, useRef, useState } from "react";


export let Theme=createContext()

let Light={
    name:"light",
    borderColor:"gray",
    textcolor:"black",
    bgColor:"white",
    shadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"



}
let dark={
    name:"dark",
    borderColor:"white",
    textcolor:"white",
    bgColor:"rgb(33,36,40)",
    shadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
}

export default function ThemeProvider({children}){
    const Home = useRef(null)
     const Skill = useRef(null)
     const Contact = useRef(null)
     const Project=useRef(null)

     const executeScroll = (arg) =>{
        switch(arg){
            case "home":Home.current.scrollIntoView({behavior: "smooth"});break;
            case "skill":Skill.current.scrollIntoView({behavior: "smooth"}); break;
            case "contact":Contact.current.scrollIntoView({behavior: "smooth"}); break;
            case "project":Project.current.scrollIntoView({behavior: "smooth"}); break;
            default  :return;
        }
    } 

     let [theme,setthem]=useState(dark)
     function changeTheme(){
        setthem(theme.name==="light"?dark:Light)
     }
   return( <Theme.Provider value={{theme,changeTheme,Home,Skill,Contact,Project,executeScroll}}>{children}</Theme.Provider>)
}