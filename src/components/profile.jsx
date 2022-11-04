import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
 
}

from '@chakra-ui/react'
import React, { useContext } from "react"
import {GiHamburgerMenu} from "react-icons/gi"
import { Theme } from './thems'

export default function DrawerExample() {
  const {executeScroll,theme}=useContext(Theme)

  return (
    <>
     <Menu >
  <MenuButton
   bgColor={"transparent"}
   border="none"
   as={IconButton}
    aria-label='Options'
    icon={<GiHamburgerMenu size={40} color="red"/>}
    variant='outline'
  />
  <MenuList scale={10}>
    <MenuItem  minH='48px' minW={"150px"}  onClick={()=>executeScroll("home")}  backgroundColor={theme.bgColor} color={theme.textcolor}>
      HOME
    </MenuItem>
    <MenuItem minH='48px' onClick={()=>executeScroll("skill")}  backgroundColor={theme.bgColor} color={theme.textcolor}>
      TECH STACK
    </MenuItem>
    <MenuItem  minH='48px' onClick={()=>executeScroll("project")}  backgroundColor={theme.bgColor} color={theme.textcolor}>
      PROJECTS
    </MenuItem>
    <MenuItem  minH='48px' onClick={()=>executeScroll("contact")} backgroundColor={theme.bgColor} color={theme.textcolor}>
    CONTACT
    </MenuItem>
  </MenuList>
</Menu>
    </>
  )
}