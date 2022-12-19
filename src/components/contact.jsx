import { Box, Flex, Link, SimpleGrid, Text, useMediaQuery } from "@chakra-ui/react";
import { useContext } from "react";
import { Theme } from "./thems";
import {MdEmail } from "react-icons/md"
import { GoMarkGithub } from "react-icons/go"
import {FiLinkedin} from "react-icons/fi"
import {AiOutlineFileImage,AiOutlinePhone,AiOutlineLink} from "react-icons/ai"
import { motion } from "framer-motion";
export default function Contact(){
    const {theme,Contact} =useContext(Theme)
    console.log(theme.textcolor)
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    return (
        <Box bgColor={theme.bgColor} ref={Contact} borderTop={"2px solid"} borderTopColor={theme.borderColor} color={theme.textcolor} pt={20}>
            <Text ml="10%" as="b" fontSize={"30px"}>Contact</Text>
            <SimpleGrid columns={isMobile?[1, 1]:[2]}   gap={30} p={20} w="70%" m="auto" >
            <Flex alignItems={"center"} gap={20}
                as={motion.div} 
                initial={{x:"10vh",opacity:0.5 }}
                viewport={{ once: false }}
                whileInView={{x:0,opacity:1}}
                transition={{ delay:1.4}}
                whileHover={{scale:1.1,color:"red"}}
                >
                  <GoMarkGithub size={50} />
                  <Link href="https://github.com/aakashindoriya"> <Text as={"b"} fontSize={"2xl"} >aakashindoriya<AiOutlineLink mx='2px' /></Text></Link>
                </Flex>
                <Flex alignItems={"center"} gap={20} 
                
                as={motion.div} 
                initial={{x:"10vh",opacity:0.5 }}
                viewport={{ once: false }}
                whileInView={{x:0,opacity:1}}
                transition={{ delay:1}}
                whileHover={{scale:1.1,color:"red"}}
                >
                  <MdEmail size={50} />
                <Text as={"b"} fontSize={"2xl"} >aakashindoriya12346@gmail.com</Text>
                </Flex>
                
                <Flex alignItems={"center"} gap={20}
                as={motion.div} 
                initial={{x:"10vh",opacity:0.5 }}
                viewport={{ once: false }}
                whileInView={{x:0,opacity:1}}
                transition={{ delay:1.8}}
                whileHover={{scale:1.1,color:"red"}}
                >
                  <FiLinkedin size={50} />
                  <Link  href="https://www.linkedin.com/in/aakashindoriya/" isExternal><Text as={"b"} fontSize={"2xl"} >Aakash Indoriya</Text></Link>
                </Flex>
                
                <Flex alignItems={"center"} gap={20}
                as={motion.div} 
                transition={{ delay:2.8}}
                initial={{x:"10vh",opacity:0.5 }}
                viewport={{ once: false }}
                whileInView={{x:0,opacity:1}}
                whileHover={{scale:1.1,color:"red"}}
                >
                  <AiOutlinePhone size={50} />
                <Text as={"b"} fontSize={"2xl"} >+91-7014440217</Text>
                </Flex>
                <Flex alignItems={"center"} gap={20}
                as={motion.div} 
                initial={{x:"10vh",opacity:0.5 }}
                viewport={{ once: false}}
                whileInView={{x:0,opacity:1}}
                transition={{ delay:2.2}}
                whileHover={{scale:1.1,color:"red"}}
                >
                  <AiOutlineFileImage size={50} />
                <Link  href="https://drive.google.com/file/d/1Xf0rUjuZ6l0d375_uDfreeFO0zW5yd-W/view?usp=sharing" isExternal><Text as={"b"} fontSize={"2xl"} >My Resume</Text></Link>
                </Flex>
            </SimpleGrid>
        </Box>
    )
}  