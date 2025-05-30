import React, { useState, useEffect } from 'react';
import {
  Box, Button, TextField, Typography, Paper, Grid, InputLabel
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

const Activity = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  const [ini, setIni] = useState({
    destinationid: '',
    activityname: '',
    description: '',
    images: null,
  });

  useEffect(() => {
    dataView();
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();

    formData.append('destinationid', values.destinationid);
    formData.append('activityname', values.activityname);
    formData.append('description', values.description);

    if (values.images && typeof values.images !== 'string') {
      formData.append('images', values.images);
    }

    const headers = {
      Authorization: 'qMOWm3sCXpZ3W8zM',
    };

    const url = editId
      ? `https://generateapi.onrender.com/api/Activity/${editId}`
      : `https://generateapi.onrender.com/api/Activity`;

    const method = editId ? axios.patch : axios.post;

    try {
      await method(url, formData, { headers });
      dataView();
      setEditId(null);
      setIni({
        destinationid: '',
        activityname: '',
        description: '',
        images: null,
      });
      setImagePreview(null);
      resetForm();
    } catch (error) {
      console.error('API Error:', error.response || error.message);
    }
  };

  const dataView = () => {
    axios
      .get('https://generateapi.onrender.com/api/Activity', {
        headers: {
          Authorization: 'qMOWm3sCXpZ3W8zM',
        },
      })
      .then((res) => {
        setList(res.data.data || []);
      })
      .catch(console.log);
  };

  const deleteData = (id) => {
    axios
      .delete(`https://generateapi.onrender.com/api/Activity/${id}`, {
        headers: {
          Authorization: 'qMOWm3sCXpZ3W8zM',
        },
      })
      .then(dataView)
      .catch(console.log);
  };

  const editData = (id, row) => {
    setIni({ ...row });
    setEditId(id);
    setImagePreview(row.images || null);
  };

  return (
    <AdminLayout>
      <Box sx={{ p: 3, backgroundColor: '#000', minHeight: '100vh' }}>
        <Paper
          elevation={4}
          sx={{
            background: 'linear-gradient(to right, #0f2e3c, #0a2b36)',
            p: 4,
            borderRadius: 3,
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          <Typography variant="h4" sx={{ color: '#fff', mb: 4 }}>
            🧗 Add New Activity
          </Typography>

          <Grid container spacing={3}>
            <Formik enableReinitialize initialValues={ini} onSubmit={handleSubmit}>
              {({ setFieldValue }) => (
                <Form style={{ width: '100%' }}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="activityname"
                      label="Activity Name"
                      variant="outlined"
                      InputLabelProps={{ style: { color: '#ccc' } }}
                      sx={{
                        input: { color: '#fff' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#444' },
                          '&:hover fieldset': { borderColor: '#888' },
                          '&.Mui-focused fieldset': { borderColor: '#1de9b6' },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="description"
                      label="Description"
                      multiline
                      rows={4}
                      variant="outlined"
                      InputLabelProps={{ style: { color: '#ccc' } }}
                      sx={{
                        textarea: { color: '#fff' },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#444' },
                          '&:hover fieldset': { borderColor: '#888' },
                          '&.Mui-focused fieldset': { borderColor: '#1de9b6' },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputLabel sx={{ color: '#ccc', mb: 1 }}>Upload Image</InputLabel>
                    <Button variant="contained" component="label" sx={{ bgcolor: '#0288d1' }}>
                      Upload Image
                      <input
                        type="file"
                        name="images"
                        accept="image/*"
                        hidden
                        onChange={(e) => {
                          const file = e.target.files[0];
                          setFieldValue('images', file);
                          if (file) {
                            setImagePreview(URL.createObjectURL(file));
                          }
                        }}
                      />
                    </Button>

                    {imagePreview && (
                      <Box mt={2}>
                        <img
                          src={imagePreview}
                          alt="Preview"
                          style={{ width: '100%', maxWidth: 300, borderRadius: 8 }}
                        />
                      </Box>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#2e7d32',
                        color: '#fff',
                        px: 4,
                        mt: 2,
                        '&:hover': { backgroundColor: '#1b5e20' },
                      }}
                      type="submit"
                    >
                      SAVE ACTIVITY
                    </Button>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
        </Paper>

        <TableContainer component={Paper} sx={{ mt: 4, borderRadius: 3, backgroundColor: '#0f2027', border: '1px solid #2c5364' }}>
          <Table sx={{ minWidth: 650 }} aria-label="activity table">
            <TableHead>
              <TableRow>
                {['Activity Name', 'Description', 'Image', 'Update', 'Delete'].map((head) => (
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
              {Array.isArray(list) ? (
                list.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell align="center" sx={{ color: '#E0E0E0' }}>{row.activityname}</TableCell>
                    <TableCell align="center" sx={{ color: '#E0E0E0' }}>{row.description}</TableCell>
                    <TableCell align="center">
                      {row.images ? (
                        <img
                          src={row.images}
                          alt="Activity"
                          style={{ width: 80, height: 60, objectFit: 'cover', borderRadius: 4 }}
                        />
                      ) : 'No image'}
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
                          '&:hover': { backgroundColor: '#90caf922' },
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
                          '&:hover': { backgroundColor: '#ef535022' },
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
                    No activities available
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

export default Activity;
