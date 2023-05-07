import { Avatar, Box, Grid, HStack, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
const skills = [
        {
            name: 'HTML',
            img: 'https://cdn-icons-png.flaticon.com/512/1532/1532556.png'
        },
        {
            name: 'CSS',
            img: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png'
        },
        {
            name: 'JavaScript',
            img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
        },
        {
            name: 'React',
            img: 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png'
        },
        {
            name: 'NodeJs',
            img: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
        },
        {
            name: 'MongoDB',
            img: 'https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png'
        },
        {
            name: 'Express',
            img: 'https://miro.medium.com/max/1200/0*iechRr4efJARJmnK.jpg'
        },
        {
            name: 'REST API',
            img: 'https://miro.medium.com/max/300/1*1RDFnS8FgAOQFegtuynxWw.png'
        },
        {
            name: 'Git',
            img: 'https://cdn.iconscout.com/icon/free/png-512/git-226092.png'
        },
        {
            name: 'Github',
            img: 'https://cdn.iconscout.com/icon/free/png-512/github-153-675523.png'
        },
        {
            name: "Heroku",
            img: "https://cledara-public.s3.eu-west-2.amazonaws.com/heroku.png"
        },
        {
            name: "Chakra UI",
            img: "https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67"
        },


    ]
export default function TechStackNew() {
  return (
    <Box id="skills">
        <div>
            <h3>Skills</h3>
        </div>
        <Grid >
            {
            skills.map((e)=><VStack className="skills-card">
                <Avatar as={motion.div} 
                initial={{scale:0.8,rotateZ:90}}
                whileInView={{scale:1,rotateZ:0}}
                transition={{duration:1}}
                className="skills-card-img"
                src={e.img} alignContent={"center"}  width={"70px"} h="70px"  bg="white" border={"2px solid white"} borderRadius={"50%"} />
                <Text className="skills-card-name">{e.name}</Text>
            </VStack>)
            }
        </Grid>
    </Box>
  )
}
