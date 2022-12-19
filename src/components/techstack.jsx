import { Box, Center, Divider, Grid, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion"; 
import { useContext } from "react";
import { Theme } from "./thems";

export default function TechStack (){
    let {theme,Skill}=useContext(Theme)
    const [isMobile] = useMediaQuery("(max-width: 768px)")
 return (
    <Box  backgroundColor={theme.bgColor} pt="30px" w={"100%"} ref={Skill} >
         
    <Text  ml={60} as="h1" color={theme.textcolor} mt={50}>Tech Stack</Text>
    <Box borderTop={"2px solid gray"} borderBottom={"2px solid gray"} p={7}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ type:"tween", duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
    <Divider colorScheme={theme.textcolor} />
       
        
        <Grid w="98%" templateColumns={isMobile?'repeat(3, 1fr)':'repeat(6, 1fr)' } gap={20}>
        <Box>
        <motion.div 
        //  initial="hidden"
        //  whileInView="visible"
        //  viewport={{ once: true }}
        //  transition={{ delay:1}}
        //  variants={{
        //    visible: { x:0,opacity:1 },
        //    hidden: { x:"-10vh",opacity:0 }
        //  }}                     
                        >
                            <Center>
                            <Box border={`2px solid ${theme.textcolor}`} textAlign="center" p={5} >
                            <Image src={"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"} h={"96px"} w={"96px"}/>
                            <Text  color={theme.textcolor} size={10}>Mongo-DB</Text>
                            </Box>
                            </Center>
                        </motion.div>
        </Box>
         <Box>
         <motion.div   initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{type:"tween", delay:1.4}}
         variants={{
           visible: { x:0,opacity:1 },
           hidden: { x:"-10px",opacity:0 }
         }}                        
                        >
                            <Center>
                            <Box border={`2px solid ${theme.textcolor}`} textAlign="center" p={5} >
                            <Image src={"https://img.icons8.com/officel/96/000000/react.png"} h={"96px"} w={"96px"}/>
                            <Text  color={theme.textcolor} size={10}>React</Text>
                            </Box>
                            </Center>
                        </motion.div>
         </Box>
        <Box>
        <motion.div  initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{type:"tween", delay:1.8}}
         variants={{
           visible: { x:0,opacity:1 },
           hidden: { x:"-10px",opacity:0 }
         }}                                          
                        >
                            <Center>
                            <Box border={`2px solid ${theme.textcolor}`} textAlign="center" p={5} >
                            <Image src={"https://img.icons8.com/color/96/000000/chakra-ui.png"} h={"96px"} w={"96px"}/>
                            <Text color={theme.textcolor} size={10}>Chakra-UI</Text>
                            </Box>
                            </Center>
                        </motion.div>
        </Box>
         <Box>
         <motion.div  initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ type:"tween",delay:2.2}}
         variants={{
           visible: { x:0,opacity:1 },
           hidden: { x:"10px",opacity:0 }
         }}                                          
                        >
                            <Center>
                            <Box border={`2px solid ${theme.textcolor}`} textAlign="center" p={5} >
                            <Image src={"https://img.icons8.com/color/96/000000/javascript--v2.png"} h={"96px"} w={"96px"}/>
                            <Text color={theme.textcolor} size={10}>Javascript</Text>
                            </Box>
                            </Center>
                        </motion.div>
         </Box>
         <Box>
         <motion.div  initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ type:"tween",delay:2.8}}
         variants={{
           visible: { x:0,opacity:1 },
           hidden: { x:"10px",opacity:0 }
         }}                                           
                        >
                            <Center>
                            <Box border={`2px solid ${theme.textcolor}`} textAlign="center" p={5} >
                            <Image src={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"} h={"96px"} w={"96px"}/>
                            <Text color={theme.textcolor} size={10}>HTML</Text>
                            </Box>
                            </Center>
                        </motion.div>
         </Box>
        <Box>
        <motion.div  initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{type:"tween", delay:3.2}}
         variants={{
           visible: { x:0,opacity:1 },
           hidden: { x:"10px",opacity:0 }
         }}                                          
                        >
                            <Center>
                            <Box border={`2px solid ${theme.textcolor}`} textAlign="center" p={5} >
                            <Image src={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"} h={"96px"} w={"96px"}/>
                            <Text color={theme.textcolor} size={10}>CSS</Text>
                            </Box>
                            </Center>
                        </motion.div>
        </Box>
        
        </Grid>  
        
        <Divider />
        </motion.div>
        </Box>
      

    </Box>

 )
}