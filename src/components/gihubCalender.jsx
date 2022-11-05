import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { Theme } from "./thems";

export default function GithubCalender(){
   
let {theme} =useContext(Theme)
    return(
        <Box bg={theme.bgColor} color={theme.textcolor} border="1px solid transparent" >
            <Text ml="10%" mt={50} mb={10} as="b" fontSize={"30px"}>GitHub Calendar</Text>
            <Box  display="grid" justifyContent={"center"} p={15} mt={20}>
        <GitHubCalendar username="aakashindoriya" 
        blockSize={15}
        blockMargin={5}
        fontSize={19}
        />
        </Box>
        </Box>
    )
} 