import React from 'react';
import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Link,
  IconButton,
} from '@mui/material';


const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundImage: 'url(https://images.jdmagicbox.com/v2/comp/mumbai/07/022pk040907/catalogue/travel-smith-kandivali-west-mumbai-car-hire-3wy60sy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        color: '#fff',
        py: 8,
      // filter: 'brightness(100%)',
        position: 'relative',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={20}>
          {/* Navigation Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6"sx={{color:'#D4A762'}} gutterBottom>Navigation Links</Typography>
            <Stack spacing={1}>
              {['Home','Contact Us', 'Terms and Conditions',  'Booking Terms'].map((item) => (
                <Link key={item} href="#" underline="hover" sx={{ lineHeight:'4',color: '#fff' }}>
                    {item}</Link>
              ))}
            </Stack>
          </Grid>

          {/* Resources */}
          <Grid item  sx={{align:"center"}}xs={12} md={3}>
            <Typography variant="h6" sx={{color:'#D4A762'}} gutterBottom>Resources</Typography>
            <Stack spacing={1}>
              {[  'Contact Us','Feedback', ].map((item) => (
                <Link key={item} href="#" underline="hover" sx={{lineHeight:'4', color: '#fff' }}>{item}</Link>
              ))}
            </Stack>
          </Grid>

          {/* Terms and Policies */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6"sx={{color:'#D4A762'}} gutterBottom >Terms and Policies</Typography>
            <Stack spacing={1}>
              {['Link to legal docs',  'Booking Terms'].map((item) => (
                <Link key={item} href="#" underline="hover" sx={{ lineHeight:'3 ',color: '#fff' }}>{item}</Link>
              ))}
            </Stack>
          </Grid>

          {/* Customer Support */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6"  sx={{color:'#D4A762'}}gutterBottom>Customer Support</Typography>
            <Stack spacing={1}>
            
              <Typography sx={{ lineHeight:'3' }}variant="body2">24 Hours Service</Typography>
              <Typography sx={{ lineHeight:'3' }}variant="body2">+91 88499-20736</Typography>
             
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Logo and Text */}
        <Box mt={6} display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: 32,
                height: 32,
                bgcolor: '#fff',
                borderRadius: '50%',
                mr: 1,
              }}
            ></Box>
           WonderlustTravelTime®
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © 2025 All rights reserved. Wonderlust Travel Tours Private Limited
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;