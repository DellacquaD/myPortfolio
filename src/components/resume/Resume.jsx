import React from 'react';
import { Typography, Link } from '@mui/material';
import { TextDecrypt } from '../content/TextDecrypt';
import {
  ResumeIcon
} from '../content/ResumeButton';

export const Resume = () => {
  return (
    <Link
      color='inherit'
      underline='none'
      //href= {`${ResumePDF}`}
      target='_blank'
      rel='noopener noreferrer'
      className=''
    >
      <ResumeIcon />
      <Typography component='span'>
        <TextDecrypt text={' Resume'} />
      </Typography>
    </Link>
  );
};
