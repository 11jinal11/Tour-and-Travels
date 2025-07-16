import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Paper,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';
import bookimg from '../img/planimg2.jpg';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';

const BookingPage = () => {
  const [destinationList, setDestinationList] = useState([]);
  const [editId, setEditId] = useState(null);
  const token = 'qMOWm3sCXpZ3W8zM';

  const initialValues = {
    username: '',
    destinationId: '',
    bookingdate: '',
    contactno: '',
    email: '',
  };


  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };


  useEffect(() => {
    fetchDestinations();
    // ✅ Load Razorpay checkout script once

  }, []);

  const fetchDestinations = () => {
    axios
      .get('https://generateapi.onrender.com/api/destinationadd', {
        headers: { Authorization: token },
      })
      .then((res) => setDestinationList(res.data.Data || []))
      .catch(console.error);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {

      const formData = new FormData();
      formData.append('username', values.username);
      formData.append('destinationId', values.destinationId);
      formData.append('bookingdate', values.bookingdate);
      formData.append('contactno', values.contactno);
      formData.append('email', values.email);

      // ✅ Decide URL & method
      const url = editId
        ? `https://generateapi.onrender.com/api/BookinG/${editId}`
        : `https://generateapi.onrender.com/api/BookinG`;

      const method = editId ? axios.patch : axios.post;

      // ✅ Send with `multipart/form-data`
      const bookingRes = await method(url, formData, {
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Booking Response:', bookingRes.data);

      if (editId) {
        alert('Booking updated ✅');
        resetForm();
        setEditId(null);
        return; // skip payment when editing
      }

      alert('Booking saved ✅');

      // ✅ Load Razorpay
      const res = await loadRazorpayScript();
      if (!res) {
        alert('Failed to load Razorpay SDK.');
        return;
      }

      // ✅ Create dummy payment, no backend order
      const options = {
        key: 'rzp_test_x5XevCvbeIrTzf',
        amount: 500 * 100, // INR 500
        currency: 'INR',
        name: 'Luxury Tours',
        description: 'Tour Booking Payment',
        handler: function (response) {
          alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
          console.log(response);
          resetForm();
        },
        prefill: {
          name: values.username,
          email: values.email,
          contact: values.contactno,
        },
        theme: {
          color: '#D4A762',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (err) {
      console.error(err);
      alert('Something went wrong: ' + err.message);
    }
  };


  return (
    <Box>
      <Box
        component="img"
        src={bookimg}
        alt="Luxury Tour"
        sx={{
          width: '100%',
          height: { xs: 250, sm: 350, md: 650 },
          objectFit: 'cover',
          filter: 'brightness(35%)',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="rgba(242, 244, 250, 0.8)"
        minHeight="calc(100vh - 450px)"
        py={5}
        px={2}
        position="relative"
      >
        <Paper
          elevation={8}
          sx={{
            width: 460,
            borderRadius: 6,
            p: 4,
            bgcolor: '#ffffff',
            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
            sx={{
              backgroundColor: '#D4A762',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 8px rgba(0,0,0,0.2)',
              '&:hover': {
                backgroundColor: '#8c6845',
              },
            }}
          >
            Book Your Dream Tour ✈️
          </Typography>

          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form>
                <Stack spacing={3} mt={3}>
                  <Field
                    as={TextField}
                    label="User ID"
                    name="username"
                    fullWidth
                  />
                  <FormControl fullWidth>
                    <Select
                      name="destinationId"
                      value={values.destinationId}
                      onChange={handleChange}
                      displayEmpty
                    >
                      <MenuItem value="" disabled>
                        Select Destination
                      </MenuItem>
                      {destinationList.map((dest) => (
                        <MenuItem key={dest._id} value={dest._id}>
                          {dest.destination}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Field
                    as={TextField}
                    label="Booking Date"
                    type="date"
                    name="bookingdate"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                  />
                  <Field
                    as={TextField}
                    label="Contact Number"
                    name="contactno"
                    fullWidth
                  />
                  <Field
                    as={TextField}
                    label="Email ID"
                    name="email"
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                    sx={{
                      mt: 3,
                      backgroundColor: '#D4A762',
                      borderRadius: 3,
                      fontWeight: 'bold',
                      textTransform: 'none',
                      fontSize: '1rem',
                      boxShadow: '0 6px 18px rgba(0, 105, 255, 0.3)',
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(0, 105, 255, 0.4)',
                        transform: 'scale(1.05)',
                        backgroundColor: '#8c6845',
                      },
                    }}
                  >
                    🚀 {editId ? 'Update Booking' : 'Proceed to Payment'}
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Box>
  );
};

export default BookingPage;
