import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-scroll';
import codeIcon from '../icons/code.png';
import { Button } from '@mui/material';

const navLinks = [
  { linkName: 'ABOUT ME', key: 'about' },
  { linkName: 'MY STACK', key: 'stack' },
  { linkName: 'CONTACTS', key: 'contacts' },
  { linkName: 'FEEDBACK FORM', key: 'fbform' },
];

export default function NavBar() {
  return (
    <Box>
      <AppBar style={{ backgroundColor: 'black' }}>
        <Button
          disableRipple
          style={{
            position: 'absolute',
            margin: '1px 0 0 180px',
            zIndex: 1,
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img className='codeIcon' src={codeIcon} alt='Скобки' />
        </Button>
        <Toolbar
          style={{ display: 'flex', justifyContent: 'flex-end', gap: '60px' }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.key}
              to={link.key}
              className='my-link'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{
                marginRight: i === navLinks.length - 1 ? '100px' : '0',
                fontFamily: 'Comic Sans MS, Comic Sans, cursive',
                cursor: 'pointer',
              }}
            >
              {link.linkName}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
