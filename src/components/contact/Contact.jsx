/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from 'sweetalert2';

import emailjs from '@emailjs/browser';

import './Contact.css';



export const Contact = () => {

  const greetings = "¡Say hello!";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bsgy5d6', 'template_87w2jpl', form.current, 'oVliWmbJ9Pl2XqDD0')
      .then((result) => {
          console.log(form.current);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have sent an email!',
      showConfirmButton: false,
      timer: 1500
    })
    e.target.reset()
  };



    return (
      <section id="contact" style={{ position: 'relative' }}>
        <Container component="main" className='' maxWidth="md" >
          <div className="contact">
            <div className="_form_wrapper">
              <form ref={form} onSubmit={sendEmail} className=''>
                <TextField
                  id="outlined-name-input"
                  label="Name"
                  type="text"
                  size="small"
                  variant="filled"
                  name="name"
                  className='fieldBackground'
                />
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  type="email"
                  size="small"
                  variant="filled"
                  name="email"
                  className='fieldBackground'
                />
                <TextField
                  id="outlined-password-input"
                  label="Message"
                  type="textarea"
                  size="small"
                  multiline
                  minRows={5}
                  variant="filled"
                  name="message"
                  className='fieldBackground'
                />
                <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                  <Typography component='span'> Send Message</Typography>
                </button>
              </form>
            </div>
            <h1 className="contact_msg">
              <TextDecrypt text={greetings}/>
            </h1>
          </div>
        </Container>
      </section>
  );
};
