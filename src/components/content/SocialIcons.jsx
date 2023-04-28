import React from 'react';
import { Link, Tooltip, IconButton, Zoom, Container } from '@mui/material';
import Resume from '../../settings/resume.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
library.add(faGoogle, faLinkedin, faGithub, faDiscord);

export const SocialIcons = () => {

  const socialItems = Resume.basics.profiles.map((socialItem) => (
    <Link
      href={socialItem.url}
      key={socialItem.network.toLowerCase()}
      target='_blank'
      rel='noopener noreferrer'
      underline='none'
      color='inherit'
    >
      <Tooltip
        title={socialItem.username}
        placement='left'
        TransitionComponent={Zoom}
      >
        <IconButton
          color='inherit'
          aria-label={socialItem.network}
          className=''
        >
          <FontAwesomeIcon 
            icon={socialItem.x_icon} 
            color='#fff'
            size='lg'
          />
        </IconButton>
      </Tooltip>
    </Link>
  ));

  return (
    <div style={{ 
      position: 'fixed',
      display: 'flex', 
      flexDirection: 'column',
      right: '30px',
      top: '50px',
      gap: '15px',
      width: '70px',
      }}>
      {socialItems}
    </div>
  )
};

export default SocialIcons;
