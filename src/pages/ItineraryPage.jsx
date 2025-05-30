import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';

const ItineraryPage = () => {
  return (
    <Box sx={{ bgcolor: '#fff', py: 8 }}>
      <Container maxWidth="md">
        {/* Day 1 */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: 500, color: '#002060', mb: 1 }}
          >
            Day 1: ARRIVE AT BALI, INDONESIA
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{ color: '#002060', mb: 3 }}
          >
            EVENING IS FREE TO EXPLORE KUTA BEACH
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ color: '#333', maxWidth: '90%', mx: 'auto' }}
          >
            Welcome to Bali, Indonesia! Arrive at Denpasar international airport,
            collect your luggage and proceed to obtain on arrival visa. Pay 35 USD
            to get on arrival visa, later complete immigration and meet local
            representative. Get transferred to the hotel. Arrive and check in to the
            hotel. Later in the evening you may explore Kuta & Kuta Beach at your own.
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: 'bold', mt: 2 }}
          >
            Dinner & Overnight stay at Kuta.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        {/* Day 2 */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: 500, color: '#002060', mb: 1 }}
          >
            Day 2: FULL DAY TRIP TO TANJUNG BENOA (WATER SPORTS) + ULUWATU TEMPLE SUNSET WITH KECAK DANCE
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ color: '#333', maxWidth: '90%', mx: 'auto', mt: 3 }}
          >
            Tanjung Benoa and Uluwatu Temple are two popular tourist destinations in Bali.
            Tanjung Benoa is a coastal area known for its beautiful beaches and water sports
            activities, while Uluwatu Temple is a stunning temple located on a cliff overlooking
            the Indian Ocean. Combining these two attractions in a tour allows you to experience
            both the beach and cultural aspects of Bali.
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: 'bold', mt: 2 }}
          >
            Dinner & Overnight stay at Kuta.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

            {/* Day 3 */}
            <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: 500, color: '#002060', mb: 1 }}
          >
            Day 2: FULL DAY TRIP TO TANJUNG BENOA (WATER SPORTS) + ULUWATU TEMPLE SUNSET WITH KECAK DANCE
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ color: '#333', maxWidth: '90%', mx: 'auto', mt: 3 }}
          >
            Tanjung Benoa and Uluwatu Temple are two popular tourist destinations in Bali.
            Tanjung Benoa is a coastal area known for its beautiful beaches and water sports
            activities, while Uluwatu Temple is a stunning temple located on a cliff overlooking
            the Indian Ocean. Combining these two attractions in a tour allows you to experience
            both the beach and cultural aspects of Bali.
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: 'bold', mt: 2 }}
          >
            Dinner & Overnight stay at Kuta.
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />
      </Container>
    </Box>
  );
};

export default ItineraryPage;
