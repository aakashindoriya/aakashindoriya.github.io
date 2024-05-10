import { Box, HStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import React from "react";

export default function ProfileNew() {

  function downloadResume() {
    // Download the resume file
    var resumeLink = document.createElement("a");
    resumeLink.href = require("../../photos/Aakash_Indoriya_Resume.pdf");
    resumeLink.download = "Aakash_Indoriya_Resume.pdf";
    resumeLink.click();

    // Open the Google Drive link in a new tab
    window.open("https://drive.google.com/file/d/1Xf0rUjuZ6l0d375_uDfreeFO0zW5yd-W/view?usp=sharing", "_blank");
  }
  return (
    <div id="about" className="about section">
      <h3>About Me</h3>
      <HStack gap="20" m="auto" p="0% 5%">
        <Box
          as={motion.div}
          initial={{ boxShadow: "none" }}
          whileInView={{
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 2px",
          }}
          transition={{ duration: 3, delay: 1 }}
          w="60%"
          p="1%"
          id="parent"
        >
          
          <p id="user-detail-intro">
            {" "}
            
A result-oriented Full Stack Developer, skilled in a variety of technologies including the MERN Stack, is dedicated to building top-notch projects. Their passion lies in creating user-friendly web applications and websites, with a keen interest in problem-solving and devising effective solutions.
          </p>
          <div id="usefullinks">
            <div>
              <a href="https://github.com/aakashindoriya" target="blank">
                <AiFillGithub size={"40px"} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/aakashindoriya/"
                target="blank"
              >
                {" "}
                <AiFillLinkedin size={"40px"} />
              </a>
            </div>
            <div>
              <a href="mailto:aakashindoriya12346@gmail.com">
                <AiOutlineMail size={"40px"} />{" "}
              </a>
            </div>
            <div >
              <a
                id="resume-button-2"
                href="javascript:void(0);"
                onClick={downloadResume}
              >
                Resume
              </a>
              
              {" "}
            </div>
          </div>
        </Box>
        <Box id="image">
          <motion.img
            initial={{ scale: 0.9, opacity: 0.7, boxShadow: "none" }}
            whileInView={{
              scale: 1,
              opacity: 1,
              boxShadow:
                "rgba(224, 224, 228, 0.25) 0px 50px 100px -20px, rgba(255, 165, 165, 0.3) 0px 30px 60px -30px, rgba(112, 183, 255, 0.35) 0px -2px 6px 0px inset",
            }}
            transition={{ duration: 1 }}
            className="home-img"
            src="https://avatars.githubusercontent.com/u/37771235?v=4"
          />
        </Box>
      </HStack>
    </div>
  );
}
