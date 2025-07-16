import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Rating,
  Grid,
  CardMedia,
} from '@mui/material';
import axios from 'axios';

const ReviewPage = () => {
  const [list, setList] = useState([]);
  const token = 'qMOWm3sCXpZ3W8zM';

  useEffect(() => {
    axios
      .get('https://generateapi.onrender.com/api/revieW', {
        headers: { Authorization: token },
      })
      .then((res) => {
        setList(res.data.data || res.data.Data || []);
      })
      .catch(console.error);
  }, []);

  return (
    <Box sx={{ bgcolor: '#f7f7f7', py: 6 }}>
      <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
        What Our Travelers Say
      </Typography>

      <Grid container spacing={4} justifyContent="center" px={2}>
        {list.map((review, index) => {
          const firstImage = Array.isArray(review.image) ? review.image[0] : review.image;
          const imageUrl =
            typeof firstImage === 'string' && firstImage.startsWith('http')
              ? firstImage
              : `https://generateapi.onrender.com/uploads/${firstImage || ''}`;

          return (
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
                <CardMedia
                  component="img"
                  image={imageUrl || 'https://via.placeholder.com/500x300?text=No+Image'}
                  alt={review.clientname || 'Review Image'}
                  height="320"
                  sx={{ objectFit: 'cover', width: '100%' }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    textAlign: 'center',
                    px: 2,
                  }}
                >
                  <Stack spacing={1} alignItems="center">
                    <Typography variant="h6" fontWeight="bold" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                      {review.clientname}
                    </Typography>
                    <Rating value={parseInt(review.rating) || 0} readOnly size="small" />
                    <Typography
                      variant="body2"
                      sx={{ fontStyle: 'italic', textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}
                    >
                      {review.describe}
                    </Typography>
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ReviewPage;
