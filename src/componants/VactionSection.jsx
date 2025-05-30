import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import pi1 from '../img/planimg1.jpg' // Make sure this path is correct
import pi2 from '../img/planimg2.jpg'
import pi3 from '../img/planimg3.jpg'
import pi4 from '../img/planimg4.jpg'
const VacationSection = () => {
  return (
    <Box sx={{ bgcolor: '#fff', py: 6 }}>
      <Container>
        <Typography variant="h5" align="center" gutterBottom>
          START PLANNING YOUR DREAM VACATION!
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            my: 4,
            flexWrap: 'wrap',
          }}
        >
          {[pi1, pi4, pi3, pi2].map((src, idx) => (
            <Box
              key={idx}
              component="img"
              src={src}
              alt={`Vacation ${idx + 1}`}
              sx={{
                width: 200,
                height: 150,
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          ))}
        </Box>

        <Typography variant="body1" align="center" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
          Whether you're looking for a relaxing coastal getaway, an adventure-filled trip,
          or a romantic escape, we’ll work with you to design a vacation that perfectly fits
          your needs and desires.
        </Typography>

        <Box textAlign="center">
          <Button variant="contained" sx={{ bgcolor: '#D4A762',Color: '#121212' }}>
            BOOK A FREE CONSULT
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default VacationSection;
