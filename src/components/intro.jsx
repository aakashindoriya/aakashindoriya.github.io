import { Box, Center, Flex, Image, Text, useMediaQuery, } from "@chakra-ui/react";
import Profile from "../photos/Snapchat-1231045421-removebg-preview.png";
import {motion} from "framer-motion"
import backround from "../photos/wp8903994-mern-stack-wallpapers.png"
import dark from "../photos/darkwall.png"
import { useContext } from "react";
import { Theme } from "./thems";
export default function Intro(){
    const {theme,Home}=useContext(Theme)
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    return(
        <motion.div 
         id="home"
        animate={{
            opacity:1,
            
        }}
        initial={{
            opacity:0,
            
        }}
        transition={{
            delay:1,duration:1.5
        }}
        style={{marginBottom:"-22px" ,width:"100%"}}
        ref={Home}
        >
        
        <Box  p={10}   bgImage={theme.name==="dark"?dark:backround}   backgroundPosition="center"
      backgroundRepeat="no-repeat"
        id="about" className="about section"
      >
            
            <Box  mt={60} mb={60} > 
            
                <Flex flexDirection={isMobile?"column":"row"}justifyContent={isMobile?"space-between":"space-around"}  >
                    <Box  w={isMobile?"90%":"43%"}  filter='auto' brightness='90%'>
                    <Box display={"flex"}><Text as={"h1"} fontSize="40px" color="white" id="user-detail-name">Hello,I'm Aakash </Text><motion.h1 
                    initial={{rotateZ:"-50deg"}}
                    animate={{rotateZ:"0deg"}}
                    transition={{repeat:10,duration:0.3}}
                    
                    >👋</motion.h1></Box>
                    {/* <TypinText paragraph={"A MERN Stack Web Devloper"} /> */}
                    <Text  as={isMobile?"h5":"h3"} color="white">Passionate Full-Stack Developer and hands-on experience in developing scalable websites using a wide range of Front-end and Back-end skills like Mongo-DB, CSS, JavaScript,Node Js, React,Express and knowledge of Data Structures and Algorithms(DSA)</Text>
                    </Box>
                    <motion.div
                    initial={{x:20,opacity:0}}
                    animate={{x:0,opacity:1}}
                    whileHover={{scale:1.1,opacity:1}}
                    transition={{delay:1.7,duration:1}}
                    >
                    <Center>
                    <Box border={`2px solid ${theme.borderColor}`} boxShadow='dark-lg' p='6' rounded='md' bg={theme.bgColor} borderRadius="10%">
                        <Image  className="home-img" src={Profile} borderRadius="10%" m={"auto"}/>
                    </Box>
                   
                    </Center>
                    </motion.div>
                </Flex>
            </Box>
        </Box>
        </motion.div>

    )
}
