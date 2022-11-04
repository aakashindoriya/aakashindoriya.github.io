

import { Box } from '@chakra-ui/react';
import './App.css';
import Contact from './components/contact';
import Intro from './components/intro';
import Navbar from "./components/navbar"
import Projects from './components/projects';
import TechStack from './components/techstack';
function App() {
  return (
       <>
        <Navbar />
        <Box position={"sticky"} top={"80px"}>
        <Intro />
        <TechStack />
        <Projects />
        <Contact />
        </Box>
       </>  
       
   
  );
}

export default App;
