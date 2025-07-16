import React from 'react';
import vo1 from '../video/hero-video.mp4';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
const Home = () => {
  const book = [
    { name: 'Booking Now', path: '/bookingPage' },]
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

      {book.map((buk) => (


        <Button
          key={buk.name}
          component={Link}
          to={buk.path}
          variant="contained"
          sx={{
            position: 'fixed',
            top: '50%',
            left: { xs: 10, md: 35 }, // slightly closer to edge on small screens
            transform: 'translateY(-50%) rotate(-90deg)',
            transformOrigin: 'left center',
            backgroundColor: '#D4A762',
            color: 'white',
            px: { xs: 1, md: 2 }, // less horizontal padding on small screens
            py: { xs: 0.5, md: 1 }, // less vertical padding
            fontSize: { xs: '0.7rem', md: '0.875rem' }, // smaller text on xs
            fontWeight: 'bold',
            zIndex: 1000,
            '&:hover': {
              backgroundColor: '#8c6845',
            },
          }}
        >
          Booking Now
        </Button>

      ))}
    </div>
  );
};

export default Home;
