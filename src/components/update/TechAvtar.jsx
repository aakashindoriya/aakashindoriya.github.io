import { Avatar, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

function TechStack({ stack }) {
  return (
    <HStack  
    id="techavatar" spacing={-7} position="relative" top="-10px">
      {stack.map((tech, index) => (
        <Avatar
        className="project-tech-stack"
         as={motion.div}
         initial={{scale:0.5,opacity:0}}
         animate={{scale:1,opacity:1}}
          border={"2px solid white"} 
         borderRadius={"50%"} 
         backgroundColor={"white"}
         backdropBlur={"md"}
         key={index} maxW={55} size="sm" name={tech} src={tech} />
      ))}
    </HStack>
  );
}

export default TechStack