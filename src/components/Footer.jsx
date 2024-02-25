import React from 'react';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className='footer'>
      <Link to='contacts' spy={true} smooth={true} offset={-400} duration={500}>
        Contact me fast
      </Link>
    </footer>
  );
}
