import React, { useState, useEffect } from "react";
import { LogoLink } from "../components/logo/LogoLink";
import { Content } from "../components/content/Content";
import { Hidden } from "@mui/material";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import { Provider } from "../components/theme/ThemeProvider";
import { Resume } from "../components/resume/Resume";
import { SocialIcons } from "../components/content/SocialIcons";
import { SpeedDials } from "../components/speedDial/SpeedDial";
import { SideNavbar } from "../components/nav/SideNavbar";
import { Works } from "../components/works/Works";
import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import Background from "../components/scenes/background/Background";
import LoadSpinner from "../components/loadSpinner/LoadSpinner";
import * as THREE from "three";

export const Home = () => {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      "/bricks/earthColors.jpg",
      () => {
        setIsBackgroundLoaded(true);
        console.log("Background texture loaded successfully");
      },
      () => {},
      () => {
        console.error("Error loading background texture");
      }
    );
  }, []);

  return (
    <div className="root" id="home" style={{ display: "grid" }}>
      <Background isLoaded={isBackgroundLoaded} />
      <LogoLink />
      <Provider>
        {/* <ThemeToggle /> */}
      </Provider>
      <Hidden smDown>
        <SocialIcons /> 
      </Hidden>
      <Hidden smUp>
        <SpeedDials />
      </Hidden>
      <SideNavbar />
      {/* <Resume /> */}
      <div
        className="contentContainer"
        style={{
          display: "grid",
          position: "absolute",
          gridTemplateColumns: "70vw",
          gridTemplateRows: "repeat(4, auto)",
          justifySelf: "center",
          gap: "20px",
        }}
      >
        <Content />
        <Works />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
