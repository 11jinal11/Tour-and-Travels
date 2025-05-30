
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  InputLabel
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AdminLayout from '../admin-layout/AdminLayout';

const AddDestination = () => {
  const [ini, setIni] = useState({
    destination: '',
    packagePrice: '',
    Images: null,
  });
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dataView();
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();

    // Append all fields in the form data
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    const headers = {
      Authorization:
        'qMOWm3sCXpZ3W8zM',
    };

    const url = editId
      ? `https://generateapi.onrender.com/api/destinationadd/${editId}`//patch
      : `https://generateapi.onrender.com/api/destinationadd`;//post

    const method = editId ? axios.patch : axios.post;

    method(url, formData, { headers })
      .then(() => {
        dataView();
        setEditId(null);
        setIni({  destination: '',
    packagePrice: '',
    Images: null,});
        resetForm();
      })
      .catch((error) => {
        console.error('API Error:', error.response || error.message);
      });
  };


  const deleteData = (id) => {
    axios
      .delete(`https://generateapi.onrender.com/api/destinationadd/${id}`, {
        headers: {
          Authorization:
            'qMOWm3sCXpZ3W8zM'   },
      })
      .then(dataView)
      .catch(console.log);
  };

  const editData = (id, row) => {
    setIni({ ...row }); // Set the row data for editing, including image URL
    setEditId(id); // Track the ID of the record being edited
  };

  const dataView = () => {
 
    
    axios
      .get('https://generateapi.onrender.com/api/destinationadd', {
        headers: {
          Authorization:
            'qMOWm3sCXpZ3W8zM',
        },
      })
      .then((res) => {
         console.log('Destination list:', res.data);
        setList(res.data.Data || []);
      })
      .catch(console.log);
  };

  return (
    <AdminLayout>
      <Box sx={{ p: 4 }}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
            borderRadius: 4,
            color: 'white',
          }}
        >
          <Typography variant="h4" gutterBottom>
            🧳 Add New Destination
          </Typography>

          <Formik enableReinitialize initialValues={ini} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Destination Name"
                      name="destination"
                      fullWidth
                      InputLabelProps={{ style: { color: '#bbb' } }}
                      InputProps={{ style: { color: 'white' } }}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Package Price"
                      name="packagePrice"
                      fullWidth
                      InputLabelProps={{ style: { color: '#bbb' } }}
                      InputProps={{ style: { color: 'white' } }}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputLabel sx={{ color: '#ccc', mb: 1 }}>Upload Image</InputLabel>
                    <input
                      type="file"
                      name="Images"
                      accept="image/*"
                      onChange={(e) => {
                        setFieldValue('Images', e.target.files[0]);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="success" size="large">
                      Save Destination
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>

        <TableContainer
          component={Paper}
          sx={{
            mt: 4,
            borderRadius: 3,
            backgroundColor: '#0f2027',
            border: '1px solid #2c5364',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                {['Destination', 'Package Price', 'Image', 'Update', 'Delete'].map((head) => (
                  <TableCell
                    key={head}
                    align="center"
                    sx={{
                      color: '#E0E0E0',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      borderBottom: '1px solid #2c5364',
                    }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(list) && list.length > 0 ? (
                list.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                      {row.destination}
                    </TableCell>
                    <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                      ₹{row.packagePrice}
                    </TableCell>
                    <TableCell align="center">
                      {row.Images ? (
                        <img
                          src={row.Images}
                          alt="dest"
                          style={{ width: 80, height: 60, objectFit: 'cover', borderRadius: 4 }}
                        />
                      ) : (
                        'No image'
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          color: '#90caf9',
                          borderColor: '#90caf9',
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 'bold',
                        }}
                        onClick={() => editData(row._id, row)}
                      >
                        Update
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          color: '#ef5350',
                          borderColor: '#ef5350',
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 'bold',
                        }}
                        onClick={() => deleteData(row._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ color: '#ccc', py: 5 }}>
                    No destinations available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </AdminLayout>
  );
};

export default AddDestination;
