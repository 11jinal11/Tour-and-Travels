  import React from 'react';
import vo1 from '../video/hero-video.mp4';
import { Button } from '@mui/material';
const Home = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(50%)', }}
      >
        <source src={vo1} type="video/mp4" />
      </video>

      {/* Overlay Text */}
      <h1
  style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
   
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', // Responsive size
    fontWeight: '600',
    fontFamily: `'Playfair Display', serif`,
    textShadow: '3px 3px 12px rgba(0, 0, 0, 0.8)',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    letterSpacing: '4px',
    padding: '0 20px', // for better spacing on small screens
  }}
>
  Travel &nbsp;·&nbsp; Discover &nbsp;·&nbsp; Belong
</h1>
    <Button
          variant="contained"
          onClick={() => alert('Planning your trip!')}
          sx={{
            position: 'fixed',
            opacity:'revert-layer',
            top: '65%',
            left: 35,
            transform: 'translateY(-50%) rotate(-90deg)',
            transformOrigin: 'left center',
            backgroundColor: '#D4A762',
            color: 'white',
            px: 2,
            py: 1,
          
            fontWeight: 'bold',
            zIndex: 1000,
            '&:hover': {
              backgroundColor: '#b28b56',
            },
          }}
        >
          Booking Now
        </Button>
    </div>
  );
};

export default Home;
