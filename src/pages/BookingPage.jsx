
import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Paper,
} from '@mui/material';
import bookimg from "../img/planimg2.jpg";

const BookingPage = () => {
  return (
    <Box>
      {/* 🔹 Elegant Full-Width Banner */}
      <Box
        component="img"
        src={bookimg}
        alt="Luxury Tour"
        sx={{
          width: '100%',
          height: { xs: 250, sm: 350, md: 650 },
          objectFit: 'cover',
          boxShadow: '0 9px 15px rgba(0,0,0,0.2)',
          filter: 'brightness(35%)', // Subtle darkening of image
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      {/* 🔸 Elegant Booking Card */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="rgba(242, 244, 250, 0.8)" // Soft background
        minHeight="calc(100vh - 450px)"
        py={5}
        px={2}
        position="relative" // So that form stays above the image
      >
        <Paper
          elevation={8}
          sx={{
            width: 460,
            borderRadius: 6,
            p: 4,
            bgcolor: '#ffffff', // White background for form
            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
          }}
        >
          {/* 🌟 Premium Title */}
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            color="primary"
            gutterBottom
            sx={{
              background: 'linear-gradient(90deg, #007aff, #00c6ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            Book Your Dream Tour ✈️
          </Typography>

          {/* 📋 Booking Form */}
          <Stack spacing={3} mt={3}>
            <TextField
              label="User ID"
              fullWidth
              variant="outlined"
              sx={{
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#00c6ff' }, // Blue border for fields
                },
              }}
            />
            <TextField
              label="Destination Name"
              fullWidth
              variant="outlined"
              sx={{
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#00c6ff' },
                },
              }}
            />
            <TextField
              label="Booking Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              variant="outlined"
              sx={{
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#00c6ff' },
                },
              }}
            />
            <TextField
              label="Contact Number"
              fullWidth
              variant="outlined"
              sx={{
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#00c6ff' },
                },
              }}
            />
            <TextField
              label="Email ID"
              fullWidth
              variant="outlined"
              sx={{
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#00c6ff' },
                },
              }}
            />

            {/* 🟦 Fancy Button */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                mt: 3,
                borderRadius: 3,
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: '1rem',
                boxShadow: '0 6px 18px rgba(0, 105, 255, 0.3)',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(0, 105, 255, 0.4)',
                  transform: 'scale(1.05)', // Slight animation for button
                },
              }}
            >
              🚀 Proceed to Payment
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default BookingPage;
