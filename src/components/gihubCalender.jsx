import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { Theme } from "./thems";
import {motion}from "framer-motion"

export default function GithubCalender(){
    const [isMobile] = useMediaQuery("(max-width: 768px)") 
let {theme} =useContext(Theme)
    return(
        <Box bg={theme.bgColor} color={theme.textcolor} border="1px solid transparent" >
            <Text ml="10%" mt={50} mb={10} as="b" fontSize={"30px"}>GitHub Calendar</Text>
            <Box  display="grid" justifyContent={"center"} p={15} mt={20}>
          
         <Box w="90%" m="auto"> <GitHubCalendar id="react-activity-calendar" username="aakashindoriya" 
        blockSize={19}
        blockMargin={7}
        fontSize={21}
        
        /></Box> 
        <Text ml="10%" mt={50} mb={10} as="b" fontSize={"30px"}>GitHub Graph</Text>
        <Image
        as={motion.img}
        initial={{x:"10px",opacity:0 }}
        viewport={{ once: false }}
        whileInView={{x:0,opacity:1}}
        transition={{ delay:1.8}}
        w="99%" src={`https://github-readme-activity-graph.cyclic.app/graph?username=aakashindoriya&bg_color=${theme.bgColor}&color=898ed7&line=7b7fe5&point=001eff&area=true&hide_border=true`} p={2}/>
        <Flex w="90%" flexDirection={isMobile?"column":"row"} alignItems="center" justifyContent={"space-around"} p={2} m="auto">
            <Image
            id="github-stats-card"
            w={isMobile?"90%":"30%"} src="https://github-readme-stats.vercel.app/api?username=aakashindoriya&show_icons=true&theme=gruvbox&hide_border=true" />
            <Image
            id="github-top-langs"
            w={isMobile?"90%":"30%"} src="https://github-readme-stats.vercel.app/api/top-langs/?username=aakashindoriya&theme=gruvbox&hide_border=true"/>
            <Image
            id="github-streak-stats"
            w={isMobile?"90%":"30%"} src="https://github-readme-streak-stats.herokuapp.com/?user=aakashindoriya&theme=gruvbox&hide_border=true"/>
        </Flex>
        </Box>
        </Box>
    )
} 