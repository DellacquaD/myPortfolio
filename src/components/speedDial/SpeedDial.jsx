import React, { useState } from "react";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/lab";
import Resume from "../../settings/resume.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
library.add(faGoogle, faLinkedin, faGithub, faDiscord);

export const SpeedDials = () => {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const actionIcons = Resume.basics.profiles.map((action) => (
    <SpeedDialAction
      key={action.network.toLowerCase()}
      icon={<FontAwesomeIcon icon={`${action.x_icon}`} />}
      tooltipTitle={action.network}
      onClick={handleClose}
      href={action.url}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      color="inherit"
    />
  ));

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial"
        className=""
        hidden={false}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="up"
        sx={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
        }}
      >
        {actionIcons} 
      </SpeedDial>
    </>
  );
};

export default SpeedDials;
