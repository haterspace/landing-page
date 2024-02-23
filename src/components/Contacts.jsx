import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import tlgIcon from '../icons/telegram.png';
import linkedinIcon from '../icons/linkedin.png';
import instaIcon from '../icons/insta.png';
import githubIcon from '../icons/git.png';

const stackIcons = [
  { img: tlgIcon, name: 'Telegram', href: 'https://t.me/haterspace' },
  {
    img: linkedinIcon,
    name: 'Linkedin',
    href: 'https://linkedin.com/haterspace',
  },
  {
    img: instaIcon,
    name: 'Instagram',
    href: 'https://instagram.com/sashgracias',
  },
  { img: githubIcon, name: 'Github', href: 'https://github.com/haterspace' },
];

export default function Contacts() {
  return (
    <>
      <div className='contacts'>Contacts</div>
      <Container
        sx={{
          position: 'absolute',
          top: '440px',
          left: '65%',
          width: '400px',
        }}
      >
        <Grid container spacing={2}>
          {stackIcons.map((icon, index) => (
            <Grid item key={index}>
              <Button
                href={icon.href}
                sx={{
                  transition: '0.7s',
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'transparent',
                    transform: 'scale(1.2)'
                  },
                }}
              >
                <img
                  src={icon.img}
                  alt={icon.name}
                  style={{ width: '60px', height: 'auto' }}
                />
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
