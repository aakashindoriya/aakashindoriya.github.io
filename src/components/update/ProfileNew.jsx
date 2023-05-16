import { Box, HStack, Image } from '@chakra-ui/react'
import {motion} from "framer-motion"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import React from 'react'

export default function ProfileNew() {
  return (
    <div id='about' className='about section'>
        <h3>About Me</h3>
        <HStack  gap="20" m="auto" p="0% 5%" >
            <Box as={motion.div}
              initial={{boxShadow:"none"}}
              whileInView={{borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 2px"}}
              transition={{duration:3,delay:1}}
             w="60%" p="1%" 
             id="parent"
         
         >
                 <h2>" Aspiring Full Stack WEB DEVELOPER "</h2>
                 <p     id="user-detail-intro"> Hello, my name is Aakash Indoriya, and I am a certified MERN stack web developer from Masai School. I have been deeply involved in coding and learning data structures and algorithms for the past year, following a rigorous 9am to 9pm routine, six days a week. I have gained proficiency in HTML, CSS, JavaScript, React.js, Node.js, and MongoDB, and have developed several projects using these technologies. I am passionate about using my skills to create user-friendly and intuitive web applications that meet the needs of businesses and individuals. I am excited about new opportunities to apply my knowledge and contribute to innovative projects. Thank you for considering me for your next web development project.</p>
                 <div id="usefullinks">
                  <div>
                    <a href='https://github.com/aakashindoriya' target='blank'><AiFillGithub size={"40px"}/></a>
                  </div>
                  <div>
                   <a href='https://www.linkedin.com/in/aakashindoriya/' target='blank'> <AiFillLinkedin size={"40px"} /></a>
                  </div>
                  <div>
                   <a href='mailto:aakashindoriya12346@gmail.com'><AiOutlineMail size={"40px"}/> </a>
                  </div>
                  <div>
             <a id="resume-button-2" href={require("../../photos/Aakash_Indoriya_Resume.pdf")} download="myFile" >
          Resume
        </a>                  </div>
                 </div>
            </Box>
            <Box id="image" w="40%">
              <motion.img 
              initial={{scale:0.9,opacity:0.7,boxShadow:"none"}}
              whileInView={{scale:1,opacity:1,boxShadow:"rgba(224, 224, 228, 0.25) 0px 50px 100px -20px, rgba(255, 165, 165, 0.3) 0px 30px 60px -30px, rgba(112, 183, 255, 0.35) 0px -2px 6px 0px inset"}}
              transition={{duration:1}}
              className="home-img"
              src="https://avatars.githubusercontent.com/u/37771235?v=4" />
            </Box>
       </HStack>
    </div>
  )
}
