import React from "react";
import { Typography, Container } from "@mui/material";
import { TextDecrypt } from "./TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

export const Content = () => {

  return (
    <Container component="" className='' maxWidth="md" sx={{ position: "relative", minHeight: '100vh' }}>
      <div className='' style={{ position: "relative", top: '200px' }}>
        <Typography variant="h5" component="h2" sx={{ fontSize: '35px', color: '#fff', textShadow: '0 5px 10px rgba(0, 0, 0, 0.9)' }}>
            <TextDecrypt text={`${FirstName} ${LastName}`}/>
        </Typography>
        <Typography variant="h1" component="h1" className='' sx={{ color: '#fff', textShadow: '0 5px 10px rgba(0, 0, 0, 0.9)' }}>
          <TextDecrypt text={`Web Developer + Design`} />
        </Typography>
      </div>
    </Container>
  );
};
