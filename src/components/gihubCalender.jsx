import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { Theme } from "./thems";

export default function GithubCalender(){
    const [isMobile] = useMediaQuery("(max-width: 768px)") 
let {theme} =useContext(Theme)
    return(
        <Box bg={theme.bgColor} color={theme.textcolor} border="1px solid transparent" >
            <Text ml="10%" mt={50} mb={10} as="b" fontSize={"30px"}>GitHub Calendar</Text>
            <Box  display="grid" justifyContent={"center"} p={15} mt={20}>
          
         <Box w="90%" m="auto"> <GitHubCalendar username="aakashindoriya" 
        blockSize={19}
        blockMargin={7}
        fontSize={21}
        
        /></Box> 
        <Text ml="10%" mt={50} mb={10} as="b" fontSize={"30px"}>GitHub Graph</Text>
        <Image w="100%" src={`https://activity-graph.herokuapp.com/graph?username=aakashindoriya&custom_title=Aakash%20Indoriya%27s%20Contribution%20Graph&theme=gruvbox&bg_color=${theme.bgColor}&hide_border=true&line=d1a01f&point=c58545`} p={2}/>
        <Flex flexDirection={isMobile?"column":"row"} alignItems="center" justifyContent={"space-around"} p={2}>
            <Image  src="https://github-readme-stats.vercel.app/api?username=aakashindoriya&show_icons=true&theme=gruvbox&hide_border=true" />
            <Image  src="https://github-readme-streak-stats.herokuapp.com/?user=aakashindoriya&theme=gruvbox&hide_border=true"/>
        </Flex>
        </Box>
        </Box>
    )
} 