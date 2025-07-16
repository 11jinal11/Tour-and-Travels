import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';
import axios from 'axios';
import DestinationPage from './DestinationPage';

const ItineraryPage = () => {
  const [itineraryList, setItineraryList] = useState([]);
  const token = 'qMOWm3sCXpZ3W8zM';

   const destinationData2 = localStorage.getItem('destinationId')
  console.log("destinationData2 ==> ",destinationData2);
  useEffect(() => {
    loadItineraries();
  }, []);

  const loadItineraries = () => {
    axios
      .get('https://generateapi.onrender.com/api/Itinerary', {
        headers: { Authorization: token },
      })
      .then((res) => setItineraryList(res.data.Data.filter(
        item => item.destinationId === destinationData2 || item.destinationId?._id === destinationData2
      )))
      .catch(console.error);
  };
  return (
    <DestinationPage>

      <Box sx={{ bgcolor: '#fff', py: 8 }}>
        <Container maxWidth="md">
          {itineraryList.map((itinerary, index) =>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: 500, color: '#002060', mb: 1 }}
              >
                {itinerary.destinationName}
              </Typography>

              <Typography
                variant="body1"
                align="center"
                sx={{ color: '#333', maxWidth: '90%', mx: 'auto' }}
              >
                {itinerary.dayDescription}
              </Typography>
            <Typography
                variant="body1"
                align="center"
                sx={{ color: 'black', maxWidth: '60%', mx: 'auto',fontWeight: 600, mb: 2,marginTop: '20px' }}
              >
              Dinner & Overnight stay
              </Typography>
            </Box>
          )}

        </Container>
      </Box>

    </DestinationPage>

  );
};

export default ItineraryPage;
