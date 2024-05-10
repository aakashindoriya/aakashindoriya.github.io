import {Box, Button, Flex,  Image,   Text,  useMediaQuery} from  "@chakra-ui/react"

import {BsFillBrightnessHighFill } from "react-icons/bs";
import {FcNightPortrait } from "react-icons/fc";
import {motion} from "framer-motion"

import { useContext } from "react"
import { Theme } from "./thems"
import DrawerExample from "./profile";

export default function Navbar(){
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const {theme,changeTheme,executeScroll}=useContext(Theme)
    function downloadResume() {
        // Download the resume file
        console.log("yoyo")
        var resumeLink = document.createElement("a");
        resumeLink.href = require("../photos/Aakash_Indoriya_Resume.pdf");
        resumeLink.download = "Aakash_Indoriya_Resume.pdf";
        resumeLink.click();
    
        // Open the Google Drive link in a new tab
        window.open("https://drive.google.com/file/d/1Xf0rUjuZ6l0d375_uDfreeFO0zW5yd-W/view?usp=sharing", "_blank");
      }
    return(
       
        <Box pos={"sticky"} backgroundColor={theme.bgColor} top="0px" zIndex={1} >
                 <motion.div animate={{
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
        >
            <Box  borderBottom={"2px solid gray"} id="nav-menu">
            <Flex justify={"space-between"} h={"80px"} alignItems={"center"}  >
                <Box h={"70px"} display="flex" alignItems={"center"} gap={20} >
                    <Image src="https://logos.textgiraffe.com/logos/logo-name/Akash-designstyle-boots-m.png" h={"100%"} mr={10} />
                    <motion.div initial={{opacity:0.2}}  animate={{opacity:1}} transition={{repeat:1000,duration:2}}>
                    
                    {theme.name==="light"?<BsFillBrightnessHighFill color={theme.textcolor} size={40} onClick={changeTheme} />: <FcNightPortrait size={40} onClick={changeTheme} />}
                    </motion.div >
                </Box>

                {isMobile?<Box mr={10}><DrawerExample /></Box>:<Box  w="50%" >
                 <Flex w="100%" justifyContent={"space-evenly"}>
                    
                 <Button className="nav-link about" as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}><Text as={"b"} color={theme.textcolor} className="nav-link home"  onClick={()=>executeScroll("home")}>ABOUT</Text></Button>
                 <Button as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}><Text as={"b"}  color={theme.textcolor} className="nav-link skills"  onClick={()=>executeScroll("skill")}>SKILLS</Text></Button>
                 <Button as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}> <Text as={"b"}  color={theme.textcolor} className="nav-link projects" onClick={()=>executeScroll("project")}>PROJECTS</Text></Button>
                 <Button as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}><Text as={"b"}  color={theme.textcolor} className="nav-link contact" onClick={()=>executeScroll("contact")}>CONTACT</Text></Button>
                 <Button as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}><Text as={"b"}  color={theme.textcolor}>
                
                 <a href="javajavascript:void(0);"  className="nav-link resume" onClick={downloadResume}>RESUME</a>
                    
                    </Text></Button>
                 </Flex>
                
                    </Box>}
            </Flex>
            </Box>
            </motion.div>
        </Box>
       
    )
}
