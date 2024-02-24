import React, { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';
import groupPhoto from '../icons/groupgrad.jpg';
import meGraduationPhoto from '../icons/megrad.JPG';
import elbrusPhoto from '../icons/elbrusPhoto.jpg';
import elbrusLogo from '../icons/elbrusLogo.png';
import { Typography } from '@mui/material';

export default function Info() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const showNameTimer = setTimeout(() => {
      setShowName(true);
    }, 1300);
    return () => {
      clearTimeout(showNameTimer);
    };
  }, []);
  return (
    <>
      <div className='jobText'>
        <ReactTyped
          strings={['Fullstack developer']}
          typeSpeed={40}
          showCursor={true}
          onComplete={(el) => {
            setTimeout(() => {
              el.cursor.remove();
            }, 300);
          }}
        />
      </div>
      <div className='nameText'>
        {showName && (
          <ReactTyped
            strings={['Aleksandr Gryzhin']}
            typeSpeed={35}
            showCursor={true}
            onComplete={(el) => {
              setTimeout(() => {
                el.cursor.remove();
              }, 300);
            }}
          />
        )}
      </div>
      <div className='slogan'>
        <ReactTyped
          strings={['Creating products. Expanding your business.']}
          style={{
            fontFamily:
              'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS sans-serif',
            backgroundImage: 'linear-gradient(90deg, blue, red',
            backgroundClip: 'text',
            color: 'transparent',
          }}
          typeSpeed={30}
          showCursor={true}
          onComplete={(el) => {
            setTimeout(() => {
              el.cursor.remove();
            }, 300);
          }}
        />
      </div>
      <Typography
        id='about'
        sx={{
          position: 'absolute',
          top: '820px',
          left: '8%',
          fontFamily: 'monospace',
          letterSpacing: '4px',
          fontSize: '50px',
          fontWeight: 'bold',
        }}
      >
        About me
      </Typography>
      <div className='underline1'></div>
      <div className='text'>
        <h4>
          Hello! My name is Aleksandr.
          <br />
          <br />
          I've been doing web development for 1 year, in which I took
          self-education and offline courses at the programming school Elbrus
          Coding Bootcamp in Moscow, where I got a huge range of knowledge to
          develop myself as a developer.
          <br />
          <br />
          At the moment I write my own pet projects, continue to regularly
          monitor new trends in the IT sphere and of course consider offers from
          companies with a friendly atmosphere and opportunities for
          professional growth within an interesting project.
        </h4>
      </div>
      <div>
        <img className='groupPhoto' src={groupPhoto} alt='Фото группы' />
        <img
          className='meGraduationPhoto'
          src={meGraduationPhoto}
          alt='Моё фото с выпуска'
        />
        <img className='elbrusPhoto' src={elbrusPhoto} alt='Фото в кампуса' />
        <img className='elbrusLogo' src={elbrusLogo} alt='Elbrus Logo' />
      </div>
    </>
  );
}
