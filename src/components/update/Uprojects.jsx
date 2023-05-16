import React, { useState } from 'react'
import TechStack from './TechAvtar'
import { AiFillGithub } from "react-icons/ai";
import { FcLink } from "react-icons/fc";
import { Link, Tooltip } from '@chakra-ui/react';
import {motion} from "framer-motion"

export default function Uprojects() {
    let projects=[
    {
         title:"Kfc.com",
        image:"https://user-images.githubusercontent.com/37771235/235348489-16e778a1-eadc-4e0f-8d12-d0c3782111ff.png",
        techStack:["https://cdn1.iconfinder.com/data/icons/unicons-line-vol-5/24/react-256.png",
        "https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-2/15/nextjs-256.png",
        "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
        "https://cdn.iconscout.com/icon/free/png-512/free-redux-3445829-2878755.png?f=avif&w=256",
        "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=avif&w=256",
        "https://cdn.iconscout.com/icon/free/png-512/free-nodejs-2-226035.png?f=avif&w=256",
        "https://cdn.iconscout.com/icon/free/png-512/free-express-8-1175029.png?f=avif&w=256"

    ],
        github:"https://github.com/aakashindoriya/kfcnext",
        live:"https://akfc-aakashindoriya.vercel.app/",
        description:"KFC - a solo project built with Next.js and MERN stack, offers fast food delivery service with admin and client features. Order food with ease and manage your restaurant efficiently."
    },{
        title:"Zara.com",
        image:"https://camo.githubusercontent.com/4459d63c16f07ca9ca7be3359ff18d37069477e85ec03c0b85967cc8a1994cf8/68747470733a2f2f692e6962622e636f2f6b58396a58646b2f73637265656e636170747572652d7a6172612d696e647370756e6b2d323032322d31322d31392d31332d31392d34362d31317a6f6e2e6a7067",
        techStack:["https://cdn1.iconfinder.com/data/icons/unicons-line-vol-5/24/react-256.png",
        "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
        "https://cdn.iconscout.com/icon/free/png-512/free-redux-3445829-2878755.png?f=avif&w=256",
        "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=avif&w=256",
        "https://cdn.iconscout.com/icon/free/png-512/free-nodejs-2-226035.png?f=avif&w=256",
        "https://cdn.iconscout.com/icon/free/png-512/free-express-8-1175029.png?f=avif&w=256"

    ],
        github:"https://github.com/aakashindoriya/nebulous-unit-9563",
        live:"zara.indspunk.com/",
        description:"Zara is a Spanish multi-national retail clothing chain. It specialises in fast fashion, and sells clothing, accessories, shoes, beauty products and perfumes"
    
    }
   ,{
        title:"Cult.fit",
        image:"https://user-images.githubusercontent.com/37771235/235348477-b85ebd47-f86a-42ff-9181-d421f1f73c91.png",
        techStack:["https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-256.png",
        "https://cdn2.iconfinder.com/data/icons/Qetto___icons_by_ampeross-d4njobq/256/css.png",
        "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"],
        github:"https://github.com/aakashindoriya/acrid-land-8684",
        live:"https://astounding-scone-73c2d5.netlify.app/",
        description:"Cult Fit - The Ultimate Health and Fitness Companion, a group project created by five members.Shop for health supplements and gym equipment with ease on Cult Fit, an ecommerce platform dedicated to your fitness needs"
    },
    {
        title:"Ssense.com",
        image:"https://user-images.githubusercontent.com/37771235/235348515-2c4825eb-b9ca-4c29-8287-05d66610d944.png",
        techStack:["https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-256.png",
        "https://cdn2.iconfinder.com/data/icons/Qetto___icons_by_ampeross-d4njobq/256/css.png",
        "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"],
        github:"https://github.com/suraj-996/ssense_unit2_project",
        live:"https://suraj-996.github.io/ssense_unit2_project/index.html",
        description:"Cult Fit - The Ultimate Health and Fitness Companion, a group project created by five members.Shop for health supplements and gym equipment with ease on Cult Fit, an ecommerce platform dedicated to your fitness needs"
    }
]
    let [active,setActive]=useState(true)
  return (
    <div id="projects">
        <h3>Projects</h3>
        <div>
        { 
            projects.map((e,index)=>
            <motion.div className="project-card" 

            >
                <motion.div 
                initial={{zIndex:0,opacity:0.9,x:-100}}
                whileInView={{x:0}}
                whileHover={{zIndex:[1,1.5,2,2.5,3],opacity:1}}
                transition={{type:"spring",mass:2}}
                style={{zIndex:active?3:0,transition: 'z-index 1s ease-in-out'}}>
                    <img src={e.image} onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)} />
                </motion.div>
                <motion.div style={{zIndex:1}}
                initial={{x:100}}
                whileInView={{x:0}}
                transition={{type:"spring",mass:2}}
                >
                    <h1 className='.project-title'>{e.title}</h1>
                    <p className='project-description'>{e.description}</p>
                     <TechStack stack={[...e.techStack]} />
                     <div id="links">
                        <Tooltip label="Live Link"
                         bg="white" border={"1px solid white"}
                         p="1" 
                         borderRadius={"5%"}
                         fontWeight={"bold"}
                         >
                        <Link className="project-deployed-link" href={e.live} isExternal><FcLink color='white'  size={50}  /></Link> 
                        </Tooltip>
                        <Tooltip label="Git-Hub Link"
                         bg="white" border={"1px solid white"}
                         p="1" 
                         borderRadius={"5%"}
                         fontWeight={"bold"}
                         >
                        <Link className="project-github-link" href={e.github} isExternal > <AiFillGithub color='blue'  size={50}  /></Link>
                         </Tooltip>
                     </div>
                </motion.div>
            </motion.div>)
        }
        </div>
    </div>
  )
}
