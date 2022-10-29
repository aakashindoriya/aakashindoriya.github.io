import { Box, Divider, Flex,  Grid,  Image, Link, List,  ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import { FcLink ,FcAlarmClock,FcGraduationCap} from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { GiTechnoHeart } from "react-icons/gi";
import { Theme } from "./thems";
import { useContext } from "react";
import cultfit from "../photos/cultfit.png"
export default function Projects(){
    let {theme}=useContext(Theme)
return (
    <Box>
        <SimpleGrid minChildWidth='120px' spacing='40px' >
        <Box border={"1px solid "} boxShadow='outline' p='20' rounded='md' bg='white' >
            <Image src={cultfit} w={"100%"}/>
            <Flex justifyContent={"space-around"} alignItems={"center"}>
                <Box>
                <Text as={"b"} color={"red"} fontSize={40}>Cult-fit Clone</Text>
                </Box>
                <Box>
                    <Link><FcLink size={40} m={2} /></Link>
                    
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
        
        </SimpleGrid>
    </Box>
)
}