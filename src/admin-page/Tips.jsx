import React, { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  Typography,
  TextField,
  Grid,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  InputLabel, Select,
  MenuItem,
} from '@mui/material';
import axios from 'axios';
import {  CloudUpload,} from '@mui/icons-material';
import { Formik, Form, Field } from 'formik';
import AdminLayout from '../admin-layout/AdminLayout';

export default function Tips() {
  const [tipsList, setTipsList] = useState([]);
  const [destinationList, setDestinationList] = useState([]);
  const [editTipsId, setEditTipsId] = useState(null);

  const [ini, setIni] = useState({
    destinationid: '',
    springTemp: '',
    summarTemp: '',
    autumnTemp: '',
    winterTemp: '',
    currency: '',
    timeDifference: '',
    bestTimetoVisit: '',
    image: [],
  });

 const token = localStorage.getItem('token');

  useEffect(() => {
    fetchTipsData();
    fetchDestinations();
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    for (const key in values) {
      if (key === 'image') {
        values.image.forEach((file) => formData.append('image', file));
      } else {
        formData.append(key, values[key]);
      }
    }

    const api = 'https://generateapi.onrender.com/api/tiPS';
    const request = editTipsId
      ? axios.patch(`${api}/${editTipsId}`, formData, {
        headers: { Authorization: token },
      })
      : axios.post(api, formData, {
        headers: { Authorization: token },
      });

    request
      .then(() => {
        fetchTipsData();
        resetForm();
        setIni({
          destinationid: '',
          springTemp: '',
          summarTemp: '',
          autumnTemp: '',
          winterTemp: '',
          currency: '',
          timeDifference: '',
          bestTimetoVisit: '',
          image: [],
        });
        setEditTipsId(null);
      })
      .catch(console.error);
  };

  const fetchDestinations = () => {
    axios
      .get('https://generateapi.onrender.com/api/destinationadd', {
        headers: { Authorization: token },
      })
      .then((res) => setDestinationList(res.data.Data))
      .catch(console.error);
  };

  const fetchTipsData = () => {
    axios
      .get('https://generateapi.onrender.com/api/tiPS', {
        headers: { Authorization: token },
      })
      .then((res) => setTipsList(res.data.Data))
      .catch(console.error);
  };

  const handleDeleteTips = (id) => {
    axios
      .delete(`https://generateapi.onrender.com/api/tiPS/${id}`, {
        headers: { Authorization: token },
      })
      .then(() => fetchTipsData())
      .catch(console.error);
  };

  const editData = (id, row) => {
 setEditTipsId(id);
    setIni({
      destinationid: row.destinationid?._id || row.destinationid || '',
      springTemp: row.springTemp || '',
      summarTemp: row.summarTemp || '',
      autumnTemp: row.autumnTemp || '',
      winterTemp: row.winterTemp || '',
      currency: row.currency || '',
      timeDifference: row.timeDifference || '',
      bestTimetoVisit: row.bestTimetoVisit || '',
      image: [],
    });
  };


  return (
   <>
    <AdminLayout>
      <Box
        sx={{
          background: '#0d1f2d',
          color: '#fff',
          p: 4,
          borderRadius: 3,
          maxWidth: '1000px',
          mx: 'auto',
          mt: 4,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          🌐 Add Travel Tips
        </Typography>

        <Paper sx={{ background: '#122c3a', p: 3, borderRadius: 2 }}>
          <Formik
            enableReinitialize
            initialValues={ini}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, setFieldValue }) => (
              <Form>
                <Grid container spacing={2}>
                  {/* Destination Name */}
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel sx={{ color: '#bbb' }}>Destination</InputLabel>
                    <Select
                      name="destinationid"
                      label="Country Name"
                      value={values.destinationid}
                      onChange={handleChange}
                       sx={{color:'#fff'}}                  >
                      {destinationList.map((dest) => (
                        <MenuItem key={dest._id} value={dest._id}>
                          {dest.destination}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* season */}

                  <Grid item xs={12} md={6}>
                    <Field
                      as={TextField}
                      fullwidth
                      name="springTemp"
                      label="springTemp"
                     
                                           InputProps={{
                        style: { backgroundColor: '#1e3a4c', color: '#fff' },
                      }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Field
                      as={TextField}
                      fullwidth
                      name="summarTemp"
                      label="summarTemp"
                     
                                            InputProps={{
                        style: { backgroundColor: '#1e3a4c', color: '#fff' },
                      }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Field
                      as={TextField}
                      fullwidth
                      name="autumnTemp"
                      label="autumnTemp"
                     
                                            InputProps={{
                        style: { backgroundColor: '#1e3a4c', color: '#fff' },
                      }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Field
                      as={TextField}
                      fullwidth
                      name="winterTemp"
                      label="winterTemp"
                     
                                            InputProps={{
                        style: { backgroundColor: '#1e3a4c', color: '#fff' },
                      }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                    />
                  </Grid>

                  {/* Currency */}
                  <Grid item xs={12} md={6}>
                    <Field
                      as={TextField}
                      fullwidth
                      name="currency"
                      label="Currency"
                     
                                            InputProps={{
                        style: { backgroundColor: '#1e3a4c', color: '#fff' },
                      }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                    />
                  </Grid>

                  {/* Time Difference */}
                  <Grid item xs={12} md={6}>
                    <Field
                      as={TextField}
                      fullwidth
                      name="timeDifference"
                      label="Time Difference"
                     
                      placeholder="London GMT + 9hr"
                      InputProps={{
                        style: { backgroundColor: '#1e3a4c', color: '#fff' },
                      }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                    />
                  </Grid>

                  {/* Best Time to Visit */}
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      fullwidth
                      name="bestTimetoVisit"
                      multiline
                      rows={3}
                      label="bestTimetoVisit"
                      placeholder="Late spring (March to May) and late autumn (September to November)"
                     
                      InputProps={{
                        style: { backgroundColor: '#1e3a4c', color: '#fff' },
                      }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                    />
                  </Grid>

                  {/* Upload Image */}
                  <Grid item xs={12}>
                    <Button
                      component="label"
                      startIcon={<CloudUpload />}
                      variant="contained"
                      sx={{ bgcolor: '#0288d1' }}
                    >
                      Upload Image
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
                  </Grid>

                  {/* Save Button */}
                  <Grid item xs={12}>
                    <Button
                      fullwidth
                      name="springTemp"
                      type="submit"
                      variant="contained"
                      sx={{ mt: 2, bgcolor: '#4caf50', fontWeight: 'bold' }}
                    >
                      SAVE TRAVEL TIPS
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>

      {/* Table Section */}
      <TableContainer
        component={Paper}
        sx={{
          mt: 4,
          borderRadius: 3,
          backgroundColor: '#0f2027',
          border: '1px solid #2c5364',
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="destination table">
          <TableHead>
            <TableRow>
              {['Destination Name', 'Spring Temp', 'Summar Temp', 'Autumn Temp', 'Winter Temp', 'Currency', 'Time Difference', 'Best Timeto Visit', 'Image','Update', 'Delete'].map(
                (head) => (
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
                )
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {Array.isArray(tipsList) && tipsList.length > 0 ? (
              tipsList.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#203a43',
                    },
                  }}>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {row.destinationid.destination}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {row.springTemp}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {row.summarTemp}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {row.autumnTemp}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {row.winterTemp}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {row.currency}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {row.timeDifference}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {row.bestTimetoVisit}
                  </TableCell>
                  <TableCell align="center">
                    {row.image ? (<img
                      src={row.image}
                      alt="dest"
                      style={{ width: 80, height: 60, objectFit: 'cover', borderRadius: 4 }}
                    />) : ('No image')}
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
                        '&:hover': {
                          backgroundColor: '#90caf922',
                          borderColor: '#90caf9',
                        },
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
                        '&:hover': {
                          backgroundColor: '#ef535022',
                          borderColor: '#ef5350',
                        },
                      }}
                      onClick={() => handleDeleteTips(row._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={4}
                  align="center"
                  sx={{ color: '#ccc', py: 5 }}
                >
                  No destinations available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
   </>
  );
}
