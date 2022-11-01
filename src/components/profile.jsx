import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, Text, useDisclosure } from "@chakra-ui/react"
import React, { useContext } from "react"
import {motion} from "framer-motion"
import { Theme } from "./thems"
import hamburger from "../photos/icons8-hamburger-menu-91.png"
export default function DrawerExample() {
  const {theme,executeScroll}=useContext(Theme)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <> 
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
      <Image w="45px" h="45px" src={hamburger}  mr={30}/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Thanks for visiting Please Provide feedback</DrawerHeader>

          <DrawerBody>
          <Button as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}><Text as={"b"} color={theme.textcolor}  onClick={()=>executeScroll("home")}>HOME</Text></Button>
                 <Button as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}><Text as={"b"}  color={theme.textcolor} onClick={()=>executeScroll("skill")}>SKILLS</Text></Button>
                 <Button as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}> <Text as={"b"}  color={theme.textcolor} onClick={()=>executeScroll("project")}>PROJECTS</Text></Button>
                 <Button as={motion.div} whileHover={{scale:1.2 ,color:"teal"}} bgColor={"transparent"} border="none" size={"md"}><Text as={"b"}  color={theme.textcolor}>CONTECT</Text></Button>
            
          </DrawerBody>

          
        </DrawerContent>
      </Drawer>
    </>
  )
}