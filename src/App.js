

import { Box } from '@chakra-ui/react';
import './App.css';
import Contact from './components/contact';
import GithubCalender from './components/gihubCalender';
import Intro from './components/intro';
import Navbar from "./components/navbar"
import Projects from './components/projects';
import TechStack from './components/techstack';
function App() {
  return (
       <>
        <Navbar />
        <Box position={"sticky"} top={"80px"} w={"99.80%"} m={"auto"} >
        <Intro />
        <TechStack />
        <Projects />
        <GithubCalender />
        <Contact />
        </Box>
       </>  
       
   
  );
}

export default App;
