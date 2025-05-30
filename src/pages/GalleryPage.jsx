import React from 'react';
import { Box, Container, Grid, Card, CardMedia } from '@mui/material';
import pi1 from '../img/planimg1.jpg' // Make sure this path is correct
import pi2 from '../img/planimg2.jpg'
import pi3 from '../img/planimg3.jpg'
import pi4 from '../img/planimg4.jpg'
const GalleryPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4 }}>
        <img
          src={pi1}
          alt="Gallery 1"
          style={{ width: '400px',height:'280px', borderRadius: '20px' }}
        />
        <img
          src={pi1}
          alt="Gallery 2"
          style={{ width: '400px',height:'280px', borderRadius: '20px' }}
        />
        <img
          src={pi1}
          alt="Gallery 3"
          style={{ width: '400px',height:'280px', borderRadius: '20px' }}
        />
         <img
          src={pi1}
          alt="Gallery 3"
          style={{ width: '400px',height:'280px', borderRadius: '20px' }}
        />
         <img
          src={pi1}
          alt="Gallery 3"
          style={{ width: '400px',height:'280px', borderRadius: '20px' }}
        />
                 <img
          src={pi1}
          alt="Gallery 3"
          style={{ width: '400px',height:'280px', borderRadius: '20px' }}
        />
         
      </Box>
    
  );
};

export default GalleryPage;
