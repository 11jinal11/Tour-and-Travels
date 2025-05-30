import React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import logo from "../img/44267935-54f9-4794-b1fc-86a8627791b9-removebg-preview.png"     

export default function SignupPage() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ p: 2, mt: 6, borderRadius: 3 }}>
        <Box display="flex" justifyContent="center" mb={0}>
        <img
  src={logo}
  // alt="Wanderl"
  style={{ height: '30vh', marginRight: '16px' ,width:'40%'}}
  />
        </Box>
        <Typography variant="h5" align="center" gutterBottom>
          Create Your Account
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Stack spacing={2}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              required
            />
              <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#D4A762',
                '&:hover': {
                  backgroundColor: '#c49754',
                },
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
        <Typography variant="body2" align="center" mt={2}>
          Already have an account? <a href="/login">Log in</a>
        </Typography>
      </Paper>
    </Container>
  );
}
