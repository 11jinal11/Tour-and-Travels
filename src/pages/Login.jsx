import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Stack,
} from '@mui/material';

import logo from '../img/onlylogo.png'      
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

export default function Login() {

  const [ini, setIni] = useState({
    
    email: '',
    password: '',
  });

  const history = useHistory();
const token ='qMOWm3sCXpZ3W8zM'
  const handleSubmit = (values) => {
    console.log(values);
    axios.post('https://generateapi.onrender.com/auth/login', values,{
      headers: { Authorization: token },
    })
      // https://travel-planning-wgkf.onrender.com/admin/login
     
      .then(() => {
        history.push('/dashboard');

        localStorage.setItem('token' , token)

        console.log('success');
      })
      .catch((err) => {
        console.log('error', err);
      });
  };


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
          Welcome Back
        </Typography>
        <Formik initialValues={ini} onSubmit={handleSubmit}>
       <Form>
        <Box noValidate autoComplete="off">
          <Stack spacing={2}>
            <Field
            as={TextField}
              label="Email"
              variant="outlined"
              fullWidth
              required
              name="email"
            />
            <Field
           as={TextField}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              name="password"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#D4A762',
                '&:hover': {
                  backgroundColor: '#c49754',
                },
              }}
            >
              Login
            </Button>
          </Stack>
        </Box>
        </Form>
        </Formik>
        <Typography variant="body2" align="center" mt={2}>
          Don't have an account? <a href="/signup">Sign up</a>
        </Typography>
      </Paper>
    </Container>
  );
}
