/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useRef } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { TextDecrypt } from "../content/TextDecrypt";
import './Contact.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const greetings = "¡Say hello!";

  const form = useRef();
  
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validación personalizada
    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;
    let hasErrors = false;

    // Validación del nombre
    if (name.length < 3) {
      setNameError(true);
      hasErrors = true;
    } else {
      setNameError(false);
    }

    // Validación del correo electrónico
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError(true);
      hasErrors = true;
    } else {
      setEmailError(false);
    }

    if (!name || !email || !message) {
      setMessageError(true);
      hasErrors = true;
    } else {
      setMessageError(false);
    }

    if (hasErrors) {
      return;
    }

    emailjs.sendForm('service_bsgy5d6', 'template_87w2jpl', form.current, 'oVliWmbJ9Pl2XqDD0')
      .then((result) => {
          console.log(form.current);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
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
                  required
                  error={nameError}
                  onChange={() => setNameError(false)}
                />
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  type="email"
                  size="small"
                  variant="filled"
                  name="email"
                  className='fieldBackground'
                  required
                  error={emailError}
                  onChange={() => setEmailError(false)}
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
                  required
                  error={messageError}
                  onChange={() => setMessageError(false)}
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
