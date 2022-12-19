import { Box, Text } from "@chakra-ui/react"
import Typed from "react-typed"

export default function TypinText({paragraph}){
   let s={
    color:"teal",
    fontSize:"30px",
    fontWeight:"bold"
   }
    return(
        <Box>
       <Typed strings={["A Full Stack Web Devloper","An aspiring Java-Script Devloper"]}
       typeSpeed={150}
       backSpeed={100}
       loop
       style={s}
       />
        </Box>
    )
}