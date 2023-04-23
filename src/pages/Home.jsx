import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@mui/material';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { Provider } from '../components/theme/ThemeProvider';
import { Resume } from '../components/resume/Resume';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { SideNavbar } from '../components/nav/SideNavbar';
import { Works } from '../components/works/Works';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';
import Background from '../components/scenes/background/Background';
import { Repeat } from '@mui/icons-material';

export const Home = () => {

  return (
    <div> 
        <div className='root' id="home" style={{ display: 'grid' }}>
          <Background />
            <LogoLink />
            <Provider>
              <ThemeToggle />
            </Provider>
            <Hidden smDown>
              <SocialIcons />
            </Hidden>
            <Hidden mdUp>
              <SpeedDials />
            </Hidden>
            <Resume />
            <SideNavbar />
            <div className='contentContainer' style={{ 
              display: 'grid',
              position: 'absolute',
              gridTemplateColumns: '1fr',
              width: '70vw',
              gridTemplateRows: 'repeat(4, auto)',
              justifySelf: 'center',
              gap: '20px',
             }}>
              <Content />
              <Works />
              <About />
              <Contact />
            </div>
        </div>
    </div>
  );
};
