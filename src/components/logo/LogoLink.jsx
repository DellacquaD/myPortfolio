import React from "react";
import { Link, Tooltip, Zoom } from "@mui/material";
import Resume from "../../settings/resume.json";
import { Logo } from "./Logo";

export const LogoLink = () => {

  return (
    <Tooltip
      title={Resume.basics.name}
      placement="right"
      TransitionComponent={Zoom}
      sx={{
            position: 'fixed',
            top: '20px',
            left: '20px'
          }}
    >
      <Link
          variant="h6"
          href={Resume.basics.url}
          underline="none"
          color="inherit"
          className=''
      >
        <Logo/>
      </Link>
    </Tooltip>
  );
};
