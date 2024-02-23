import React from 'react';
import jsIcon from '../icons/js.png';
import tsIcon from '../icons/ts.png';
import reactIcon from '../icons/react.svg';
import reduxIcon from '../icons/redux.svg';
import cssIcon from '../icons/css.png';
import htmlIcon from '../icons/html.png';
import muiIcon from '../icons/mui.png';
import jestIcon from '../icons/jest.png';
import { Box, Grid, Typography } from '@mui/material';

const stackItems = [
  { img: jsIcon, name: 'JavaScript' },
  { img: tsIcon, name: 'TypeScript' },
  { img: reactIcon, name: 'React' },
  { img: reduxIcon, name: 'Redux Toolkit' },
  { img: htmlIcon, name: 'HTML' },
  { img: cssIcon, name: 'CSS' },
  { img: muiIcon, name: 'MUI' },
  { img: jestIcon, name: 'Jest' },
];

export default function MyStack() {
  return (
    <>
      <Typography
        id='stack'
        sx={{
          position: 'absolute',
          top: '1360px',
          left: '41%',
          fontFamily: 'monospace',
          letterSpacing: '4px',
          fontSize: '50px',
          fontWeight: 'bold',
        }}
      >
        My stack:
      </Typography>
      <div className='underline2'></div>
      <Box
        sx={{
          position: 'absolute',
          top: '1500px',
          left: '15%',
        }}
      >
        <Grid container spacing={4}>
          {stackItems.map((item, index) => (
            <Grid
              item
              key={index}
              sx={{
                '&:nth-child(4) figcaption': {
                  marginTop: '19px',
                },
                '&:nth-child(7) figcaption': {
                  marginTop: '37px',
                },
                '&:nth-child(8) figcaption': {
                  marginTop: '7px',
                },
                '& figcaption': {
                  marginTop: '15px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
              }}
            >
              <Box>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: '100px', height: 'auto' }}
                />
              </Box>
              <figcaption>{item.name}</figcaption>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
