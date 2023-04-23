import React, { useContext } from "react";
import { ThemeContext, Provider } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <Tooltip
        title={"Toggle theme"}
        placement="right"
        TransitionComponent={Zoom}
      >
        <IconButton
          color="inherit"
          onClick={toggleTheme}
          aria-label={"Toggle theme"}
          className=''
          sx={{ position: "fixed", bottom: '20px', left: '20px' }}
        >
          {theme === "light" ? (
              <Brightness4 className='' sx={{ color: '#fff' }} />
          ) : (
              <Brightness7 className='' sx={{ color: '#fff' }}  />
          )}
        </IconButton>
      </Tooltip>
    );
};
