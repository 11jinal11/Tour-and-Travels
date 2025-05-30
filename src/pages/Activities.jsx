import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const activities = [
  {
    title: 'Mountain Climbing',
    image: 'https://source.unsplash.com/500x300/?mountain,climbing',
    description: 'Experience the thrill of high-altitude adventures with our expert-guided mountain climbs.',
  },
  {
    title: 'River Rafting',
    image: 'https://source.unsplash.com/500x300/?river,rafting',
    description: 'Conquer the rapids and enjoy an adrenaline rush in our exciting river rafting tours.',
  },
  {
    title: 'Scuba Diving',
    image: 'https://source.unsplash.com/500x300/?scuba,diving',
    description: 'Dive into the ocean and explore underwater wonders with our certified scuba tours.',
  },
  {
    title: 'Desert Safari',
    image: 'https://source.unsplash.com/500x300/?desert,safari',
    description: 'Ride across golden sands and witness stunning sunsets in our thrilling desert safaris.',
  },
  {
    title: 'Hot Air Ballooning',
    image: 'https://source.unsplash.com/500x300/?hot-air-balloon',
    description: 'Soar above landscapes and enjoy a peaceful panoramic view with hot air balloon rides.',
  },
];

const Activities = () => {
  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: 6, px: { xs: 2, sm: 6 } }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={5} color="primary">
        Adventure Activities You’ll Love
      </Typography>

      <Grid container spacing={4}>
        {activities.map((activity, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ borderRadius: 3, boxShadow: 4, transition: '0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
              <CardMedia
                component="img"
                height="200"
                image={activity.image}
                alt={activity.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom color="text.primary">
                  {activity.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {activity.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Activities;
