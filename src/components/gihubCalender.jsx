import { Box, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { Theme } from "./thems";

export default function GithubCalender(){
   
let {theme} =useContext(Theme)
    return(
        <Box bg={theme.bgColor} color={theme.textcolor} border="1px solid transparent" >
            <Text ml="10%" mt={50} mb={10} as="b" fontSize={"30px"}>GitHub Calendar</Text>
            <Box  display="grid" justifyContent={"center"} p={15} mt={20}>
          
         <Box> <GitHubCalendar username="aakashindoriya" 
        blockSize={19}
        blockMargin={7}
        fontSize={21}
        
        /></Box> 
        <Text ml="10%" mt={50} mb={10} as="b" fontSize={"30px"}>GitHub Graph</Text>
        <Image src={`https://activity-graph.herokuapp.com/graph?username=aakashindoriya&custom_title=Aakash%20Indoriya%27s%20Contribution%20Graph&theme=gruvbox&bg_color=${theme.bgColor}&hide_border=true&line=d1a01f&point=c58545`} />
        </Box>
        </Box>
    )
} 