import React from "react";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/lab";
import Resume from "../../settings/resume.json";
export const SpeedDials = () => {

    const actionIcons = Resume.basics.profiles.map((action) => (
      <SpeedDialAction
        key={action.network.toLowerCase()}
        icon={<i className={`${action.x_icon}`}></i>}
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
          className=''
          hidden={false}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="down"
        >
          {actionIcons}
        </SpeedDial>
      </>
    );
};
