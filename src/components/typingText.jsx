import { Box, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"

export default function TypinText({paragraph}){
    let [text,setText]=useState("")
    useEffect(()=>{
        let index=-1
        let id=setInterval(()=>{
            if(index===paragraph.length-1){
                index=-1
                setText("")
            }
            index++
            setText((pre)=> { 
                
                return pre+paragraph[index]
            
        })
            
        },200)
        return(()=>{
            clearInterval(id)
        })
    },[])
    return(
        <Box>
        <Text as={"h2"} color="teal">{text}</Text>
        </Box>
    )
}