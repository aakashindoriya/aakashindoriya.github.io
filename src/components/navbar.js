import {Box, Button, Flex,  Image,  Link,  Text,  useMediaQuery} from  "@chakra-ui/react"
import hamburger from "../photos/icons8-hamburger-menu-91.png"
import {BsFillBrightnessHighFill } from "react-icons/bs";
import {FcNightPortrait } from "react-icons/fc";
import {motion} from "framer-motion"

import { useContext } from "react"
import { Theme } from "./thems"
import DrawerExample from "./profile";

export default function Navbar(){
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    const {theme,changeTheme,executeScroll}=useContext(Theme)
    return(
       
        <Box pos={"sticky"} backgroundColor={theme.bgColor} top="0px" zIndex={10000} >
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
            <Box  borderBottom={"2px solid gray"} >
            <Flex justify={"space-between"} h={"80px"} alignItems={"center"}  >
                <Box h={"70px"} display="flex" alignItems={"center"} >
                    <Image src="https://logos.textgiraffe.com/logos/logo-name/Akash-designstyle-boots-m.png" h={"100%"} mr={10} />
                    <motion.div initial={{opacity:0.8,scale:0.9}} animate={{opacity:1,scale:1}} transition={{repeat:1000}}>
                    
                    {theme.name==="light"?<BsFillBrightnessHighFill color={theme.textcolor} size={40} onClick={changeTheme} />: <FcNightPortrait size={40} onClick={changeTheme} />}
                    </motion.div >
                </Box>

                {isMobile?<DrawerExample />:<Box  w="50%" >
                 <Flex w="100%" justifyContent={"space-evenly"}>
                    
                 <Button as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}><Text as={"b"} color={theme.textcolor}  onClick={()=>executeScroll("home")}>HOME</Text></Button>
                 <Button as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}><Text as={"b"}  color={theme.textcolor} onClick={()=>executeScroll("skill")}>SKILLS</Text></Button>
                 <Button as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}> <Text as={"b"}  color={theme.textcolor} onClick={()=>executeScroll("project")}>PROJECTS</Text></Button>
                 <Button as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}><Text as={"b"}  color={theme.textcolor}>CONTECT</Text></Button>
                 </Flex>
                
                    </Box>}
            </Flex>
            </Box>
            </motion.div>
        </Box>
       
    )
}