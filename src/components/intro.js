import { Box, Flex, Image, Text, useMediaQuery, } from "@chakra-ui/react";
import Profile from "../photos/Snapchat-1231045421-removebg-preview.png";
import {motion} from "framer-motion"
import TypinText from "./typingText";
import backround from "../photos/wp8903994-mern-stack-wallpapers.png"
export default function Intro(){
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    return(
        <motion.div animate={{
            opacity:1,
            scale:1
        }}
        initial={{
            opacity:0,
            scale:0
        }}
        transition={{
            delay:0.3,duration:0.7
        }}
        style={{marginBottom:"-22px"}}
        >
        
        <Box  p={10}   bgImage={backround}   backgroundPosition="center"
      backgroundRepeat="no-repeat">
            
            <Box  mt={60} mb={60} > 
            
                <Flex flexDirection={isMobile?"column":"row"}justifyContent={"space-around"} alignItems="center"  >
                    <Box  w="43%"  filter='auto' brightness='90%'>
                    <Box display={"flex"}><Text as={"h1"} fontSize="50px" color="white">Hello,I'm Aakash </Text><motion.h1 
                    initial={{rotateZ:"-50deg"}}
                    animate={{rotateZ:"0deg"}}
                    transition={{repeat:10}}
                    
                    >👋</motion.h1></Box>
                    <TypinText paragraph={"A MERN Stack Web Devloper"} />
                    <Text as={isMobile?"h4":"h3"} color="white">Passionate Full-Stack Developer and hands-on experience in developing scalable websites using a wide range of Front-end and Back-end skills like Mongo-DB, CSS, JavaScript,Node Js, React,Express and knowledge of Data Structures and Algorithms(DSA)</Text>
                    </Box>
                    <motion.div
                    initial={{x:1200,opacity:0}}
                    animate={{x:0,opacity:1}}
                    whileHover={{scale:1.3,color:"red"}}
                    transition={{delay:1}}
                    >
                    <Box border={"2px solid white"} boxShadow='dark-lg' p='6' rounded='md' bg='white' borderRadius="10%">
                        <Image  src={Profile} borderRadius="10%"/>
                    </Box>
                    </motion.div>
                </Flex>
            </Box>
        </Box>
        </motion.div>

    )
}