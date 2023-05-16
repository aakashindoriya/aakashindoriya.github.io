import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "./update/logo";
import {motion} from "framer-motion"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function HandleScroll(id){
    let ref=document.getElementById(id)
    console.log(ref)
    if(ref){ref.scrollIntoView({behavior:"smooth"})}

  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <motion.div
    animate={{
            y:0
        }}
        initial={{
            y:-250
        }}
        transition={{
            delay:0.2,
            type:"spring",
            stiffness:130
        }}
    className="navbar" id="nav-menu">
      <div  className="nav-link home"onClick={()=>HandleScroll("home")} >
        <Logo />
      </div>
      <div className="navbar-right">
        <button className="nav-link projects" onClick={()=>HandleScroll("projects")}>Projects</button>
        <button  className="nav-link about" onClick={()=>HandleScroll("about")}>About</button>
        <button className="nav-link skills" onClick={()=>HandleScroll("skills")}>Skills</button>
        <button   className="nav-link contact" onClick={()=>HandleScroll("contact")}>Contact</button>
        <a class="nav-link resume"  id="resume-button-1" href={require("../photos/Aakash_Indoriya_Resume.pdf")} download="myFile" >
          Resume
        </a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FaBars style={{color:"white"}}/>
      </div>
      {showMenu && (
        <div className="navbar-modal">
          <button  onClick={()=>
            {HandleScroll("skills") 
            closeMenu()}}>Skills</button>
        <button  onClick={()=>{HandleScroll("projects")
        closeMenu()
      }}>Projects</button>
        <button  onClick={()=>{HandleScroll("about")
      closeMenu()
      }}>About</button>
        <button  onClick={()=>{HandleScroll("contact")
      closeMenu()
      }}>Contact</button>
        <a id="resume-link-1" href={require("../photos/Aakash_Indoriya_Resume.pdf")} download="myFile" onClick={closeMenu}>
          Resume
        </a>
        </div>
      )}
    </motion.div>
  );
}

export default Navbar;
