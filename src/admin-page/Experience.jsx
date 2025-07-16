import React, { useEffect, useState } from 'react';
import {
  Box, Button, TextField, Typography, Paper, Grid, InputLabel,
  Select, MenuItem, FormControl,
  colors
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import AdminLayout from '../admin-layout/AdminLayout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const Experience = () => {
  
  const [list, setList] = useState([]);
  const [destinationList, setDestinationList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [ini, setIni] = useState({
    destinationId: '',
    image: null,
    rating: '',
    clientname: '',
    describe: ''
  });

 const token = localStorage.getItem('token');

  useEffect(() => {
    dataView();
    fetchDestinations();
  }, []);

  const fetchDestinations = () => {
    axios.get('https://generateapi.onrender.com/api/destinationadd', {
      headers: { Authorization: token }
    })
      .then((res) => setDestinationList(res.data.Data))
      .catch(console.error);
  };

  const dataView = () => {
    axios.get('https://generateapi.onrender.com/api/revieW', {
      headers: { Authorization: token }
    })
      .then((res) => {
        setList(res.data.data || res.data.Data || []);
      })
      .catch(console.error);
  };

  const handleSubmit = (values, { resetForm }) => {   

    const formData = new FormData();
    formData.append('destinationId', values.destinationId);
    formData.append('rating', values.rating);
    formData.append('clientname', values.clientname);
    formData.append('describe', values.describe);

    // Append multiple files for image
    values.image.forEach((file) => {
      formData.append('image', file);
    });

    console.log("formData==>",formData);
    
    const headers = {
      Authorization: token,
      'Content-Type': 'multipart/form-data',
    };
    

    const url = editId
      ? `https://generateapi.onrender.com/api/revieW/${editId}`
      : `https://generateapi.onrender.com/api/revieW`;

    const method = editId ? axios.patch : axios.post;

    method(url, formData, { headers })
      .then(() => {
        dataView();
        setEditId(null);
        setIni({
          destinationId: '',
          image: [],
          rating:'',
          clientname: '',
          describe: ''
        });
        resetForm();
      })
      .catch((error) => {
        console.error('API Error:', error.response?.data || error.message);
      });
  };

  const deleteData = (id) => {
    axios.delete(` https://generateapi.onrender.com/api/revieW/${id}`, {
      headers: { Authorization: token }
    })
      .then(dataView)
      .catch(console.error);
  };

  const editData = (id, row) => {
    setIni({
      destinationId: row.destinationId?._id || '',
      image: null,
      rating:row.rating,
      clientname: row.clientname,
      describe: row.describe
    });
    setEditId(id);
    //  setImagePreview(row.Images);
  };

  return (
    <AdminLayout>
      <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
        <Paper elevation={4} sx={{ p: 4, borderRadius: 2, background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)', color: 'white' }}>
          <Typography variant="h4" gutterBottom>✨ Add New Experience</Typography>

          <Formik
            enableReinitialize
            initialValues={ini}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values, handleChange }) => (
              <Form>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel  sx={{ color: '#bbb' }}>Destination</InputLabel>
                  <Select
                 
                    name="destinationId"
                    label="Destination"
                    value={values.destinationId}
                    onChange={handleChange}
                     sx={{ color: '#fff' }}
                    //  InputLabelProps={{ style: { color: '#bbb' } }}
                  >
                    {destinationList.map((dest) => (
                      <MenuItem key={dest._id} value={dest._id}
                       InputLabelProps={{ style: { color: 'red' } }}>
                        {dest.destination}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Upload Experience Images */}
                <InputLabel sx={{ color: '#ccc', mb: 1 }}>Upload Experience Images</InputLabel>
                <Button variant="contained" component="label" sx={{ bgcolor: '#0288d1', mb: 2 }}>
                  Select Images
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={(e) => {
                      setFieldValue('image', Array.from(e.target.files));
                    }}
                  />
                </Button>

                <Grid container spacing={1} mb={2}>
                  {values.image?.map((file, index) => (
                    <Grid item key={index}>
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`img-${index}`}
                        style={{ width: 60, height: 45, objectFit: 'cover', borderRadius: 4 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              
               <Field
                  as={TextField}
                  name="rating"
                  label="Rating"
                  // variant="filled"
                  
                  rows={4}
                  fullWidth
                   InputLabelProps={{ style: { color: '#bbb' } }}
                    InputProps={{ style: { color: '#fff' } }}
                  sx={{ mb: 2 }}
                />                        
                <Field
                  as={TextField}
                  name="clientname"
                  label="Client Name"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 ,colors:"#fff"}}
                   InputLabelProps={{ style: { color: '#bbb' } }}
                    InputProps={{ style: { color: '#fff' } }}
                   
                />
                <Field
                  as={TextField}
                  name="describe"
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ mb: 2 }}
                   InputLabelProps={{ style: { color: '#bbb' } }}
                    InputProps={{ style: { color: '#fff' } }}
                />

                <Button type="submit" variant="contained" sx={{ bgcolor: '#4caf50', color: 'white', fontWeight: 'bold' }}>
                  Save Experience
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>

      {/* Data Table */}
      <TableContainer component={Paper} sx={{ mt: 4, borderRadius: 3, backgroundColor: '#0f2027', border: '1px solid #2c5364' }}>
        <Table>
          <TableHead>
            <TableRow>
              {['Destination', 'Client Name', 'Experience Image', 'Rating', 'Description', 'Update', 'Delete'].map((head) => (
                <TableCell key={head} align="center" sx={{ color: '#E0E0E0', fontWeight: 'bold' }}>{head}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
                 {Array.isArray(list) && list.length > 0 ? (
             list.map((row) => (
              <TableRow key={row._id}>
                <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                  {row.destinationId?.destination || 'Unknown'}
                </TableCell>
                <TableCell align="center" sx={{ color: '#E0E0E0' }}>{row.clientname}</TableCell>
                <TableCell align="center">
                  {Array.isArray(row.image) && row.image.length > 0 ? (
                    row.image.map((img, index) => (
                      <img key={index} src={img} alt="exp" style={{ width: 60, height: 45, marginRight: 4, borderRadius: 4 }} />
                    ))
                  ) : 'No image'}
                </TableCell>
                <TableCell align="center" sx={{ color: '#E0E0E0' }}>{row.rating}</TableCell>
                <TableCell align="center" sx={{ color: '#E0E0E0' }}>{row.describe}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => editData(row._id, row)} variant="outlined" sx={{ color: '#90caf9' }}>Update</Button>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={() => deleteData(row._id)} variant="outlined" sx={{ color: '#ef5350' }}>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          
          ) : (
                          <TableRow>
                            <TableCell colSpan={5} align="center" sx={{ color: '#ccc', py: 5 }}>
                              No Experience available
                            </TableCell>
                          </TableRow>
                        )}
           
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
};

export default Experience;
