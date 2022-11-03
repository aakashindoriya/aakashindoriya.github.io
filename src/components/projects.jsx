import { Box, Divider, Flex,  Grid,  Image, Link, List,  ListItem,  Text, useMediaQuery } from "@chakra-ui/react";
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
    let {theme,Project}=useContext(Theme)
    const [isMobile] = useMediaQuery("(max-width: 768px)")
return (
    <Box w="100%"   bgColor={theme.bgColor} border="1px solid " ref={Project}>
    <Text as={"h1"} color={theme.textcolor} mt={70} ml={70} mb={20} >Projects</Text>
    <Grid w="95%" templateColumns={isMobile?'repeat(1, 1fr)':'repeat(3, 1fr)'}  m={"auto"} color={theme.textcolor} gap={20} >
       
        <Box border={`1px solid ${theme.borderColor}`}   bgColor={theme.bgColor}   p='15' borderEndColor={"blue"} borderBlockStartColor={"blue"}>
            <Box as={motion.div} whileHover={{scale:1.1, border:`4px solid ${theme.borderColor}`}} >
            <Image src={cultfit} w={"100%"}/>
            </Box>
            <Flex justifyContent={"space-around"} alignItems={"center"}>
                <Box>
                <Text as={"b"} color={"red"} fontSize={30}>Cult.fit</Text>
                </Box>
                <Box>
                    <Link href="https://astounding-scone-73c2d5.netlify.app/"><FcLink size={40} m={2} /></Link>
                    
                   <Link href="https://github.com/aakashindoriya/acrid-land-8684" > <AiFillGithub size={40} m={2} /></Link>
                </Box>
                
            </Flex>
            <Text color={theme.textcolor} fontSize={20} as={"b"}>Cult.fit (formerly cure.fit or Curefit) is a health and fitness company</Text>
            <List spacing={3} color={theme.textcolor} ml={-25}>
                <ListItem >
                 <Flex alignItems={"center"} gap={2} >
                 < FcAlarmClock size={30} />
                  <Text  fontSize='md' as={"b"}>Date : 07/2022</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <GiTechnoHeart size={30}/>
                <Text fontSize='sm' as={"b"}><Text fontSize='20px' as={"b"} color={"red"} >Tech Stack :</Text><br/>• Java-Script<br/>• HTML<br/>• CSS</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <FcGraduationCap size={70}/>
                <Text fontSize='sm' as={"b"}><Text fontSize='20px' as={"b"} color={"red"} >Area of responsibility :</Text> Worked as team lead , executed in under one week, with a team of 5, I performed Navbar / Location / Care-Page </Text>
                 </Flex>
                 <Divider />
                </ListItem>
                
            </List>

            
        </Box>
        
       


        <Box border={`1px solid ${theme.borderColor}`} boxShadow='outline' p='20' rounded='md'  bgColor={theme.bgColor} borderEndColor={"blue"} borderBlockStartColor={"blue"}>
        <Box as={motion.div} whileHover={{scale:1.1, border:`4px solid ${theme.borderColor}`}} >
            <Image src={kfc} w={"100%"}/>
            </Box>
            <Flex justifyContent={"space-around"} alignItems={"center"}>
                <Box>
                <Text as={"b"} color={"red"} fontSize={30}>Kfc.com</Text>
                </Box>
                <Box>
                    <Link href="https://clonekfc-aakashindoriya.vercel.app/"><FcLink size={40} m={2} /></Link>
                    
                   <Link href="https://github.com/aakashindoriya/polite-teeth-64/tree/main/clonekfc" > <AiFillGithub size={40} m={2} /></Link>
                </Box>
                
            </Flex>
            <Text color={theme.textcolor} fontSize={20} as={"b"}>KFC is the US based well-known restaurant chain</Text>
            <List spacing={1} color={theme.textcolor} ml={-25}>
                <ListItem >
                 <Flex alignItems={"center"} gap={2} >
                 < FcAlarmClock size={30} />
                  <Text  fontSize='md' as={"b"}>Date : 9/2022</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <GiTechnoHeart size={30}/>
                    
                <Text fontSize='sm' as={"b"}><Text fontSize='20px' as={"b"} color={"red"} >Tech Stack :</Text><br/>• React <br/>• React-router-dom <br/>• Chakra-UI<br/>• JSON Server <br/>• React-scroll</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <FcGraduationCap size={70}/>
                <Text fontSize='sm' as={"b"}><Text fontSize='20px' as={"b"} color={"red"} >Features :</Text><br/>• Users can signup/login<br/>
                  • The menu page will automatically scroll to the user-selected category <br/>
                  • Users can add items to the cart and manage the quantity<br/>
                  • Users can not order without a login<br/></Text>
                 </Flex>
                 <Divider />
                </ListItem>
                
            </List>

            
        </Box>




        <Box border={`1px solid ${theme.borderColor}`} boxShadow='outline' p='20' rounded='md'  bgColor={theme.bgColor} borderEndColor={"blue"} borderBlockStartColor={"blue"} >
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
            <List spacing={3} color={theme.textcolor} ml={-25}>
                <ListItem >
                 <Flex alignItems={"center"} gap={2} >
                 < FcAlarmClock size={30} />
                  <Text  fontSize='md' as={"b"}>Date : 8/2022</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <GiTechnoHeart size={30}/>
                <Text fontSize='sm' as={"b"}><Text fontSize='20px' as={"b"} color={"red"} >Tech Stack :</Text><br/>• React <br/>• React-router-dom <br/>• Chakra-UI<br/>• JSON-Server</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <FcGraduationCap size={70}/>
                <Text fontSize='sm' as={"b"}><Text fontSize='20px' as={"b"} color={"red"} >Features :</Text><br/>• Users can signup/login .user can select an item that will lead to a different page
                  <br/>• Page information gets tracked by URL
                  <br/>• Users can add items to the cart and manage the quantity
                  <br/>• Users can not order without a login</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                
            </List>

            
        </Box>





        <Box border={`1px solid ${theme.borderColor}`} boxShadow='outline' p='20' rounded='md'  bgColor={theme.bgColor} borderEndColor={"blue"} borderBlockStartColor={"blue"}>
        <Box as={motion.div} whileHover={{scale:1.1, border:`4px solid ${theme.borderColor}`}} >
            <Image src={ssens} w={"100%"}/>
            </Box>
            <Flex justifyContent={"space-around"} alignItems={"center"}>
                <Box>
                <Text as={"b"} color={"red"} fontSize={30}>Ssense.com</Text>
                </Box>
                <Box>
                    <Link href="https://suraj-996.github.io/ssense_unit2_project/"><FcLink size={40} m={2} /></Link>
                    
                   <Link href="https://github.com/suraj-996/ssense_unit2_project" > <AiFillGithub size={40} m={2} /></Link>
                </Box>
                
            </Flex>
            <Text color={theme.textcolor} fontSize={20} as={"b"}>Ssens is e-commerce website</Text>
            <List spacing={3} color={theme.textcolor} ml={-25}>
                <ListItem >
                 <Flex alignItems={"center"} gap={2} >
                 < FcAlarmClock size={30} />
                  <Text  fontSize='md' as={"b"}>Date : 6/2022</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <GiTechnoHeart size={30}/>
                  <Text fontSize='sm' as={"b"}><Text fontSize='20px' as={"b"} color={"red"} >Tech Stack :</Text> <br/>• HTML <br/>• CSS <br/>• LocalStorage <br/>• Java-Script</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                <ListItem>
                <Flex alignItems={"center"} gap={2} >
                <FcGraduationCap size={70}/>
                <Text fontSize='sm' as={"b"}><Text fontSize='20px' as={"b"} color={"red"} >Area of responsibility :</Text> Executed in under one week,  with a team of 5, I performed homePage & fotter</Text>
                 </Flex>
                 <Divider />
                </ListItem>
                
            </List>

            
        </Box>
        </Grid>
    
    </Box>
)
}