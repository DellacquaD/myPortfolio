/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@mui/material";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profileIMG.png';

export const About = () => {
  const greetings = "Hello there!";
  const aboutme = `I'm ${FirstName} ${LastName}, a multidisciplinary 
                  designer & developer. I'm always down for something new and challenging!
                  I'm here to help you create beautifully formatted websites. 
                  My projects mostly includes web development.`;

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
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
