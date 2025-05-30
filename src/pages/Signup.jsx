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

export default function Signup() {

  const [ini, setIni] = useState({
    name:'',
    email: '',
    password: '',
  });

  const history = useHistory();
const token ='qMOWm3sCXpZ3W8zM'
  const handleSubmit = (values) => {
    console.log(values);
     axios.post('https://generateapi.onrender.com/auth/signUp', values ,{
      headers: { Authorization: token },
    })
    // https://travel-planning-wgkf.onrender.com/admin/signup
      
      .then(() => {
        history.push('/dashboard');
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
      
        <Formik initialValues={ini} onSubmit={handleSubmit}>
       <Form>
        <Box noValidate autoComplete="off">
          <Stack spacing={2}>
          {/* <Field
            as={TextField}
              label="Firstname"
              variant="outlined"
              fullWidth
              required
              name="firstname"
            /> */}
              <Field
            as={TextField}
              label="name"
              variant="outlined"
              fullWidth
              required
              name="name"
            />
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
              Sign Up
            </Button>
          </Stack>
        </Box>
        </Form>
        </Formik>
      
      </Paper>
    </Container>
  );
}
