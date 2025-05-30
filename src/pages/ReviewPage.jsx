import React from 'react';
import { Box, Typography, Paper, Stack, Avatar, Rating, Grid } from '@mui/material';
import img from "../img/planimg4.jpg";

const ReviewPage = () => {
  const reviews = [
    {
      name: 'John Doe',
      image: 'https://source.unsplash.com/100x100/?portrait',
      rating: 5,
      review: 'An unforgettable experience! The trip to Paris was flawless. We felt like VIPs the whole time.',
    },
    {
      name: 'Jane Smith',
      image: 'https://source.unsplash.com/100x100/?person',
      rating: 4,
      review: 'Great trip to Dubai. The tour guides were amazing, and the experience was memorable.',
    },
    {
      name: 'Michael Brown',
      image: 'https://source.unsplash.com/100x100/?person,man',
      rating: 5,
      review: 'Highly recommend this service. Everything was perfectly organized, and the destinations were breathtaking.',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f7f7f7', py: 6 }}>
      {/* Title */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        color="primary"
        gutterBottom
      >
        What Our Travelers Say
      </Typography>

      {/* Testimonials */}
      <Grid container spacing={4} justifyContent="center" px={2}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                height: 320,
                boxShadow: 4,
              }}
            >
              {/* Background Image */}
              <Box
                sx={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  filter: 'brightness(0.5)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }}
              />

              {/* Content on top of image */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  px: 3,
                  textAlign: 'center',
                }}
              >
                <Stack spacing={1} alignItems="center">
                  <Avatar src={review.image} alt={review.name} sx={{ width: 60, height: 60, border: '2px solid white' }} />
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
                  >
                    {review.name}
                  </Typography>
                  <Rating value={review.rating} readOnly size="small" />

                  <Typography
                    variant="body2"
                    sx={{ fontStyle: 'italic', textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}
                  >
                    "{review.review}"
                  </Typography>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReviewPage;
