/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@mui/material";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/project1.png';
import DigitalBooking from '../../assets/recentprojects/DigitalBooking.png';

export const Works = () => {
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Portfolio', 
      description: `Designed and developed my personal portfolio using ReactJS and threeJS to add fancy animations to the background elements.`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'DigitalBooking', 
      description: `In the context of the "Certified Tech Developer" program at DigitalHouse, we developed a lodging reservation website as a team using SCRUM methodologies. For the front-end, we used React and JavaScript, while for the back-end, we used Java with SpringBoot, Maven, and JPA. The site was hosted on an AWS EC2 instance. This website allows users to book and/or manage accommodations based on assigned roles. In this way, we achieved a user-friendly website that provides an excellent user experience.`,
      alter: 'DigitalBooking',
      image: `${DigitalBooking}`,
    }
  ]);

  return (
    <section id="works" style={{ position: 'relative', display: 'grid', minHeight: '100vh', placeContent: 'center', margin: '40px 0px' }}>
      <Container component="" id='worksContainer' maxWidth="md" sx={{ display: 'grid', gap: '140px', marginTop: '40px'}}>
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper" >
              <h3 className="title" style={{ color: '#fff' }}>
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description" style={{ color: '#fff' }}>
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
