import React, { useEffect, useState } from 'react';
import {
  Box, Paper, Typography, FormControl, InputLabel, Select,
  MenuItem, Button, Grid, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow
} from '@mui/material';
import { Formik, Form } from 'formik';
import axios from 'axios';
import AdminLayout from '../admin-layout/AdminLayout';

const Gallery = () => {
  const [destinationList, setDestinationList] = useState([]);
  const [galleryList, setGalleryList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [initialValues, setInitialValues] = useState({
    destinationid: '',
    images: [],
  });
  const [previewUrls, setPreviewUrls] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchDestinations();
    fetchGallery();
  }, []);

  useEffect(() => {
    // Clean up preview URLs when images change
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const fetchDestinations = () => {
    axios.get('https://generateapi.onrender.com/api/destinationadd', {
      headers: { Authorization: token },
    })
    .then(res => setDestinationList(res.data.Data))
    .catch(console.error);
  };

  const fetchGallery = () => {
    axios.get('https://generateapi.onrender.com/api/Gallery', {
      headers: { Authorization: token },
    })
    .then(res => setGalleryList(res.data.Data))
    .catch(console.error);
  };

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('destinationid', values.destinationid);
    values.images.forEach((file) => {
      formData.append('images', file);
    });

    const url = editId
      ? `https://generateapi.onrender.com/api/Gallery/${editId}`
      : 'https://generateapi.onrender.com/api/Gallery';

    const method = editId ? 'patch' : 'post';

    axios[method](url, formData, {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(() => {
      fetchGallery();
      resetForm();
      setEditId(null);
      setInitialValues({ destinationid: '', images: [] });
      setPreviewUrls([]); // Clear previews
    })
    .catch(console.error);
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setInitialValues({
      destinationid: item.destinationid?._id || item.destinationid || '',
      images: [],
    });
    setPreviewUrls([]); // Clear previous previews
  };

  const handleDelete = (id) => {
    axios.delete(`https://generateapi.onrender.com/api/Gallery/${id}`, {
      headers: { Authorization: token },
    })
    .then(() => fetchGallery())
    .catch(console.error);
  };

  return (
    <AdminLayout>
      <Box sx={{ bgcolor: '#0d1f2d', minHeight: '100vh', py: 5 }}>
        <Paper sx={{ maxWidth: 700, m: 'auto', p: 4, bgcolor: '#1e3a4c', color: '#fff' }}>
          <Typography variant="h5" gutterBottom>🖼️ Gallery Management</Typography>

          <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit}>
            {({ values, handleChange, setFieldValue }) => (
              <Form>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel sx={{ color: '#bbb' }}>Destination</InputLabel>
                  <Select
                    name="destinationid"
                    value={values.destinationid}
                    onChange={handleChange}
                     sx={{color:'#fff'}}               >
                    {destinationList.map((dest) => (
                      <MenuItem key={dest._id} value={dest._id}>
                        {dest.destination}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <InputLabel sx={{ color: '#ccc', mb: 1 }}>Upload Images</InputLabel>
                <Button variant="contained" component="label" sx={{ mb: 2 }}>
                  Select Images
                  <input
                    type="file"
                    name="images"
                    multiple
                    hidden
                    accept="image/*"
                    onChange={(e) => {
                      const files = Array.from(e.target.files);
                      setFieldValue('images', files);

                      // Generate previews
                      const urls = files.map((file) => URL.createObjectURL(file));
                      setPreviewUrls(urls);
                    }}
                  />
                </Button>

                <Grid container spacing={1} mb={2}>
                  {previewUrls.map((url, i) => (
                    <Grid item key={i}>
                      <img
                        src={url}
                        alt={`preview-${i}`}
                        style={{ width: 80, height: 60, objectFit: 'cover', borderRadius: 4 }}
                      />
                    </Grid>
                  ))}
                </Grid>

                <Button type="submit" variant="contained" color="primary">
                  {editId ? 'Update' : 'Submit'}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>

        <TableContainer component={Paper} sx={{ mt: 4, backgroundColor: '#102027' }}>
          <Table>
            <TableHead>
              <TableRow>
                {['Country Name', 'Images', 'Update', 'Delete'].map((head) => (
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
              {galleryList.map((item) => (
                <TableRow key={item._id}>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {item.destinationid?.destination}
                  </TableCell>
                  <TableCell align="center">
                    {Array.isArray(item.images) && item.images.length > 0 ? (
                      item.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`gallery-${index}`}
                          style={{ width: 60, height: 45, marginRight: 4, borderRadius: 4 }}
                        />
                      ))
                    ) : (
                      'No image'
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="outlined" onClick={() => handleEdit(item)}>Update</Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="outlined" color="error" onClick={() => handleDelete(item._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {galleryList.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ color: '#ccc' }}>
                    No gallery data available.
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

export default Gallery;
