import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Tab,
  Tabs,
} from '@mui/material';
import Navbar from '../componants/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DestinationPage = ({ children }) => {
  // ✅ Extract ID from URL using window.location
   const [selectedTab, setSelectedTab] = useState(false);
  const pathSegments = window.location.pathname.split('/');
  const id = pathSegments[pathSegments.indexOf('destinationPage') + 1];

   const [destinationData, setDestinationData] = useState({});

  // ✅ Save ID to localStorage
  useEffect(() => {
    if (id) {
     localStorage.setItem('destinationId', id);
      
    }
  }, [id]);

  useEffect(() => {


    let myId=localStorage.getItem('destinationId')
    // console.log(myId);
    
    axios
      .get('https://generateapi.onrender.com/api/destinationadd', {
        headers: {
          Authorization: 'qMOWm3sCXpZ3W8zM',
        },
      })
      .then((res) => {
        // console.log('destinationData:', destinationData);
// console.log('Images:', destinationData.Images);
// console.log('ID:', id);
// console.log('All Data:', res.data.Data);

        const data = res.data.Data.find((item) => item._id === myId);
        console.log("data =====> ",data);
        
        if (data) {
          localStorage.setItem('destinationData',"data")
          setDestinationData(data);
        }
      })
      .catch((err) => console.error('Fetch destination error:', err));
  }, []);

    const tabList = [
    { label: 'Highlight', path: '/highlights' },
    { label: 'Itinerary', path: '/itineraryPage' },
    { label: 'Gallery', path: '/galleryPage' },
    { label: 'Activity', path: '/activities' },
    { label: 'Travel Tips', path: '/traveltips' },
    { label: 'Visa', path: '/visa' },
  ];


 
  
  const book = [{ name: 'Booking Now', path: '/bookingPage' }];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Box
  sx={{
    width: '100%',
    height: '85vh',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backgroundBlendMode: 'light',
    backgroundImage: destinationData.Images
      ? `url(${destinationData.Images})`
      : 'none',
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
            {destinationData.destination}
          </Typography>
        </Box>

        {book.map((buk) => (
          <Button
            key={buk.name}
            component={Link}
            to={buk.path}
            variant="contained"
            sx={{
              position: 'fixed',
              top: '50%',
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
                backgroundColor: '#8c6845',
              },
            }}
          >
            {buk.name}
          </Button>
        ))}
      </Box>

      {/* Tabs Navigation */}
      <Box
        sx={{
          backgroundColor: '#000',
          display: 'flex',
          justifyContent: 'center',
          height: '18vh',
          alignItems: 'center',
        }}
      ><Tabs
      value={selectedTab}
      TabIndicatorProps={{ style: { backgroundColor: 'white', height: 3 } }}
    >
      {tabList.map((tab, index) => (
        <Tab
          key={index}
          component={Link}
          to={tab.path}
          label={tab.label}
          sx={{
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            px: 4,
            textTransform: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#ffffff33',
              transform: 'translateY(-2px)',
            },
            '&.Mui-selected': {
              backgroundColor: '#fff',
              color: '#000',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
            },
          }}
        />
      ))}
    </Tabs>
      </Box>

      {/* Render Child Routes or Components */}
      {children}
    </>
  );
};

export default DestinationPage;
