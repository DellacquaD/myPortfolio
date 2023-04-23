/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@mui/material";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profileIMG.png';

export const About = () => {
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}, a passionate full-stack developer with a love for design, innovation, and challenges. My mission is to help you give visibility to your product by creating an innovative, intuitive, and aesthetically pleasing website that can take your business to the next level.`;

  return (
    <section id="about" style={{ position: 'relative', display: 'grid', minHeight: '100vh', placeContent: 'center', margin: '40px 0px' }}>
      <Container component="main" className='' sx={{ margin: '60px 0px' }}>
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              placeSelf: 'self-start'
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} sx={{ fontWeight: 600, letterSpacing: '1.1px', fontSize: '30px' }}/>
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span' sx={{ fontWeight: 600, fontSize: '18px'  }}> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
