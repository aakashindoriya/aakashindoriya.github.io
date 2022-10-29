import {Box, Flex,  Image} from  "@chakra-ui/react"
import hamburger from "../photos/icons8-hamburger-menu-91.png"
import icon from "../photos/icons8-a-24.png"
import {motion} from "framer-motion"
export default function Navbar(){
    return(
       
        <Box pos={"sticky"} backgroundColor="white" top="0px" zIndex={10000} >
                 <motion.div animate={{
            y:0
        }}
        initial={{
            y:-250
        }}
        transition={{
            delay:0.2,
            type:"spring",
            stiffness:130
        }}
        >
            <Box  borderBottom={"2px solid gray"} >
            <Flex justify={"space-between"} h={"80px"} alignItems={"center"}  >
                <Image w="50px" h="50px" src={icon} ml={30}/>
                <Image w="45px" h="45px" src={hamburger}  mr={30}/>
            </Flex>
            </Box>
            </motion.div>
        </Box>
       
    )
}