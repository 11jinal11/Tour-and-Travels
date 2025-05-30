
import React, { useState } from 'react';
import { Box, Typography, Button,Tab,Tabs, Grid, Card, CardActionArea, CardContent, CardMedia, ButtonGroup } from '@mui/material';
import Navbar from '../componants/Navbar';




const tabLabels = ["Highlights", "Itinerary", "Gallery","Activity", "Travel Tips","Visa", "T & C",];
const DestinationPage = () => {
    // const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      {/* Hero Section */}
      <Navbar/>
      <Box
        sx={{
          width: '100%',
          height: '85vh',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backgroundBlendMode: 'darken',
          backgroundImage: `url("https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          color: 'white',
     
        }}
      >
        <Box sx={{ p: 14 }}>
          <Typography variant="overline" sx={{ fontSize: '1rem', letterSpacing: 2 }}>
            DESTINATION
          </Typography>
          <Typography variant="h2" fontWeight="bold">
            Egypt
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={() => alert('Planning your trip!')}
          sx={{
            position: 'fixed',
            opacity:'revert-layer',
            top: '50%',
            left: 35,
            transform: 'translateY(-50%) rotate(-90deg)',
            transformOrigin: 'left center',
            backgroundColor: '#D4A762',
            color:'#121212',
            color: 'white',
            px: 2,
            py: 1,

            fontWeight: 'bold',
            zIndex: 1000,
            '&:hover': {
              backgroundColor: '#8c6845',
            },
          }}
        >
          Booking Now
        </Button>
      </Box>
      <Box sx={{ backgroundColor: "#000", display: "flex", justifyContent: "center", height: '18vh',alignItems:'center' }}>
        <Tabs
          // value={activeTab}
          // onChange={(e, newValue) => setActiveTab(newValue)}
          TabIndicatorProps={{ style: { backgroundColor: "white", height: 3 } }}
        >
          {tabLabels.map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.1rem",
                px: 4,
                "&.Mui-selected": {
                  backgroundColor: "#fff",
                  color: "#000",
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
    
    </>
  );
};

export default DestinationPage;