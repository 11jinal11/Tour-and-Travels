import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import DestinationPage from './DestinationPage';

const Activities = () => {
  const [list, setList] = useState([]);
  const token = 'qMOWm3sCXpZ3W8zM';

  const destinationData2 = localStorage.getItem('destinationId')
  console.log("destinationData2 ==> ", destinationData2);

  useEffect(() => {
    axios
      .get('https://generateapi.onrender.com/api/Activity', {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {

        setList(res.data.Data.filter(
          item => item.destinationid._id === destinationData2
        ));
      })
      .catch((err) => {
        console.error('Error fetching activity list:', err);
      });
  }, []);

  return (
    <DestinationPage>
      <Box sx={{ bgcolor: '#f8f9fa', py: 6, px: { xs: 2, sm: 6 } }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={5}
          color="primary"
        >
          Adventure Activities You’ll Love
        </Typography>

        <Grid container spacing={4}>
          {list.length === 0 ? (
            <Typography variant="body1" textAlign="center" width="100%">
              No activities found.
            </Typography>
          ) : (
            list.map((activity, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}
              >
                <Card
                  sx={{
                    width: '100%',            // Always take 100% of its container
                    maxWidth: { xs: '100%', sm: 400 }, // Optional max width for larger screens
                    height: '100%',           // Allows card to stretch if needed
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    boxShadow: 4,
                    overflow: 'hidden',       
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 8,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={
                      activity.images?.startsWith('http')
                        ? activity.images
                        : `https://generateapi.onrender.com/uploads/${activity.images}` || 'https://via.placeholder.com/500x300?text=No+Image'
                    }
                    alt={activity.activityname || 'Activity Image'}
                    sx={{
                      width: '100%',
                      height: { xs: 200, sm: 250, md: 280 }, // Responsive height
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      sx={{ textAlign: 'center' }}
                    >
                      {activity.activityname || 'Untitled Activity'}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: 'center' }}
                    >
                      {activity.description || 'No description available.'}
                    </Typography>
                  </CardContent>
                </Card>

              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </DestinationPage>
  );
};

export default Activities;
