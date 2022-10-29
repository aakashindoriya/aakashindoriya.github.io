import { Box, Container, Image, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import profile from "../photos/Snapchat-1231045421-removebg-preview.png"


const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 10s ease-in-out infinite`;
  
export default function Profile() {
  return (
    <Container h="100vh" display="flex" alignItems="center" justifyContent="center" >
      <Box
        as={motion.div}
        animation={animation}
        // not work: transition={{ ... }}
        padding="2"
        // @ts-ignore - "Does not exist" Type Error against Motion
        bgColor={"red.100"}
        width="12px"
        height="12px" 
        display="flex"
      />
    </Container>
  )
};