import { Box, Divider, Fade, Flex,  Grid,  Image, Link, List,  ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import { FcLink ,FcAlarmClock,FcGraduationCap} from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { GiTechnoHeart } from "react-icons/gi";
import { Theme } from "./thems";
import { useContext } from "react";
import cultfit from "../photos/cultfit.png"
import kfc from "../photos/kfc.png"
import gearbest from "../photos/gearbest.png"
import ssens from "../photos/ssens.png"
import {motion} from "framer-motion"
export default function Projects(){
    let {theme}=useContext(Theme)
return (
    <Box w="100%"   bgColor={theme.bgColor} border="1px solid ">
    <Text as={"h1"} color={theme.textcolor} mt={100} ml={70} mb={30} >Projects</Text>
        <SimpleGrid minChildWidth='330px' spacing='40px' m={10} color={theme.textcolor}  >
        <Box border={`1px solid ${theme.borderColor}`} boxShadow='outline' p='20' rounded='md'  bgColor={theme.bgColor} >
            <Box as={motion.div} whileHover={{scale:1.1, border:`4px solid ${theme.borderColor}`}} >
            <Image src={cultfit} w={"100%"}/>
            </Box>
            <Flex justifyContent={"space-around"} alignItems={"center"}>
                <Box>
                <Text as={"b"} color={"red"} fontSize={30}>Cult-fit Clone</Text>
                </Box>
                <Box>
                    <Link href="https://astounding-scone-73c2d5.netlify.app/"><FcLink size={40} m={2} /></Link>
                    
                   <Link href="https://github.com/aakashindoriya/acrid-land-8684" > <AiFillGithub size={40} m={2} /></Link>
                </Box>
                
            </Flex>
            <Text color={theme.textcolor} fontSize={20} as={"b"}>cult.fit (formerly cure.fit or Curefit) is a health and fitness company</Text>
            <List spacing={3} color={theme.textcolor}>
                <ListItem >
                 <Flex alignItems={"center"} gap={2} >
                 < FcAlarmClock size={30} />
                  <Text  fontSize='md' as={"sub"}>date : 07/2022</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <GiTechnoHeart size={30}/>
                  <Text fontSize='md' as={"sub"}>Tech Stack : Java-Script,HTML,CSS</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <FcGraduationCap size={70}/>
                  <Text fontSize='md' as={"sub"}> area of resposiblities : Executed in under one week, worked as team lead, with a team of 5, I performed navbar, location, Care page </Text>
                 </Flex>
                 <Divider />
                </ListItem>
                
            </List>

            
        </Box>
        
       


        <Box border={`1px solid ${theme.borderColor}`} boxShadow='outline' p='20' rounded='md'  bgColor={theme.bgColor}>
        <Box as={motion.div} whileHover={{scale:1.1, border:`4px solid ${theme.borderColor}`}} >
            <Image src={kfc} w={"100%"}/>
            </Box>
            <Flex justifyContent={"space-around"} alignItems={"center"}>
                <Box>
                <Text as={"b"} color={"red"} fontSize={30}>kfc.com</Text>
                </Box>
                <Box>
                    <Link href="https://clonekfc-aakashindoriya.vercel.app/"><FcLink size={40} m={2} /></Link>
                    
                   <Link href="https://github.com/aakashindoriya/polite-teeth-64/tree/main/clonekfc" > <AiFillGithub size={40} m={2} /></Link>
                </Box>
                
            </Flex>
            <Text color={theme.textcolor} fontSize={20} as={"b"}>KFC is the US bashed well-known restaurant chain</Text>
            <List spacing={3} color={theme.textcolor}>
                <ListItem >
                 <Flex alignItems={"center"} gap={2} >
                 < FcAlarmClock size={30} />
                  <Text  fontSize='md' as={"sub"}>date : 9/2022</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <GiTechnoHeart size={30}/>
                  <Text fontSize='md' as={"sub"}>Tech Stack : react,react-router-dom,chakra-UI,npm JSON server,react-scroll</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <FcGraduationCap size={70}/>
                  <Text fontSize='md' as={"sub"}> area of resposiblities : Executed in under one week ,An individual project with end-to-end functionalities. like scrolling automatically to a point where products are listed.</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                
            </List>

            
        </Box>




        <Box border={`1px solid ${theme.borderColor}`} boxShadow='outline' p='20' rounded='md'  bgColor={theme.bgColor} >
        <Box as={motion.div} whileHover={{scale:1.1, border:`4px solid ${theme.borderColor}`}} >
            <Image src={gearbest} w={"100%"}/>
            </Box>
            <Flex justifyContent={"space-around"} alignItems={"center"}>
                <Box>
                <Text as={"b"} color={"red"} fontSize={30}>Gearbest.com</Text>
                </Box>
                <Box>
                    <Link href="https://various-skirt-2667.vercel.app/"><FcLink size={40} m={2} /></Link>
                    
                   <Link href="https://github.com/aakashindoriya/various-skirt-2667" > <AiFillGithub size={40} m={2} /></Link>
                </Box>
                
            </Flex>
            <Text color={theme.textcolor} fontSize={20} as={"b"}>Gearbest is USA based e-commerce website</Text>
            <List spacing={3} color={theme.textcolor}>
                <ListItem >
                 <Flex alignItems={"center"} gap={2} >
                 < FcAlarmClock size={30} />
                  <Text  fontSize='md' as={"sub"}>date : 8/2022</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <GiTechnoHeart size={30}/>
                  <Text fontSize='md' as={"sub"}>Tech Stack : react,react-router-dom,chakra-UI,npm JSON server</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <FcGraduationCap size={70}/>
                  <Text fontSize='md' as={"sub"}> area of resposiblities : Executed in under one week ,An individual project with end-to-end functionalities. like navbar / login-signup /home-page /cart.</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                
            </List>

            
        </Box>





        <Box border={`1px solid ${theme.borderColor}`} boxShadow='outline' p='20' rounded='md'  bgColor={theme.bgColor}>
        <Box as={motion.div} whileHover={{scale:1.1, border:`4px solid ${theme.borderColor}`}} >
            <Image src={ssens} w={"100%"}/>
            </Box>
            <Flex justifyContent={"space-around"} alignItems={"center"}>
                <Box>
                <Text as={"b"} color={"red"} fontSize={30}>ssense.com</Text>
                </Box>
                <Box>
                    <Link href="https://suraj-996.github.io/ssense_unit2_project/"><FcLink size={40} m={2} /></Link>
                    
                   <Link href="https://github.com/suraj-996/ssense_unit2_project" > <AiFillGithub size={40} m={2} /></Link>
                </Box>
                
            </Flex>
            <Text color={theme.textcolor} fontSize={20} as={"b"}>ssens is e-commerce website</Text>
            <List spacing={3} color={theme.textcolor}>
                <ListItem >
                 <Flex alignItems={"center"} gap={2} >
                 < FcAlarmClock size={30} />
                  <Text  fontSize='md' as={"sub"}>date : 6/2022</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <GiTechnoHeart size={30}/>
                  <Text fontSize='md' as={"sub"}>Tech Stack : html,css,localStorage,java-script</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <FcGraduationCap size={70}/>
                  <Text fontSize='md' as={"sub"}>  area of resposiblities : Executed in under one week,  with a team of 5, I performed homePage & fotter</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                
            </List>

            
        </Box>
        
        </SimpleGrid>
    </Box>
)
}