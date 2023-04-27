import React from "react";
import { Typography, Container } from "@mui/material";
import { TextDecrypt } from "./TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";
import './Content.css'

export const Content = () => {

  return (
    <Container component="" className='' maxWidth="md" sx={{ position: "relative", minHeight: '100vh' }}>
      <div className='' style={{ position: "relative", top: '200px' }}>
        <Typography component="h2" className="__contentName">
            <TextDecrypt text={`${FirstName} ${LastName}`}/>
        </Typography>
        <Typography component="h1" className='__contentBanner' >
          <TextDecrypt text={`Web Developer + Design`} />
        </Typography>
      </div>
    </Container>
  );
};
