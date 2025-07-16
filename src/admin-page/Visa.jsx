import React, { useState, useEffect } from 'react';
import {
  Box, Typography, TextField,
  Button, Paper, MenuItem,
  FormControl, InputLabel, Select
} from '@mui/material';
import AdminLayout from '../admin-layout/AdminLayout';
import { Formik, Form, Field } from 'formik';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const Visa = () => {
  const [destinationList, setDestinationList] = useState([]);
  const [visaList, setVisaList] = useState([]);
  const [editVisaId, setEditVisaId] = useState(null);
 const [ini, setIni] = useState({
    destinationId: '',
    visaDetail: '',
  });

  const token = 'qMOWm3sCXpZ3W8zM';

  useEffect(() => {
    fetchVisaData();
    fetchDestinations();
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    const payload = {
      destinationId: values.destinationId,
      visaDetail: values.visaDetail,
    };

    const request = editVisaId
      ? axios.patch(`https://generateapi.onrender.com/api/Visa/${editVisaId}`, payload, {
        headers: { Authorization: token },
      })
      : axios.post('https://generateapi.onrender.com/api/Visa', payload, {
        headers: { Authorization: token },
      });

    request
      .then(() => {
        fetchVisaData();
        resetForm();
        setIni({ destinationId: '', visaDetail: '' });
        setEditVisaId(null);
      })
      .catch(console.error);
  };

  const editData = (visaId, row) => {
    setEditVisaId(visaId);
    setIni({
      destinationId: row.destinationId?._id || row.destinationId || '',
      visaDetail: row.visaDetail || '',
    });
  };

  const fetchVisaData = () => {
    axios
      .get('https://generateapi.onrender.com/api/Visa', {
        headers: { Authorization: token },
      })
      .then((res) => setVisaList(res.data.Data))
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

  const handleDeleteVisa = (visaId) => {
    axios
      .delete(`https://generateapi.onrender.com/api/Visa/${visaId}`, {
        headers: { Authorization: token },
      })
      .then(() => fetchVisaData())
      .catch(console.error);
  };



  return (
    <AdminLayout>
      <Box sx={{ bgcolor: '#0d1f2d', minHeight: '100vh', py: 5 }}>
        <Paper
          elevation={3}
          sx={{
            maxWidth: 700,
            margin: 'auto',
            p: 4,
            bgcolor: '#1e3a4c',
            color: '#fff',
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" gutterBottom>  🛂 Visa Description  </Typography>              
          <Formik
            enableReinitialize
            initialValues={ini}
            onSubmit={handleSubmit}  
          >
            
            {({ values, handleChange }) => (
              <Form>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel sx={{ color: '#bbb' }}>Destination</InputLabel>
                  <Select
                    name="destinationId"
                    label="Country Name"
                    value={values.destinationId}
                    onChange={handleChange}
                    sx={{ color: '#fff' }}
                  >
                    {destinationList.map((dest) => (
                      <MenuItem key={dest._id} value={dest._id}>
                        {dest.destination}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Field
                  as={TextField}
                  name="visaDetail"
                  label="Visa Description"
                  multiline
                  rows={6}
                  fullWidth
                  sx={{ my: 2 }}
                  InputLabelProps={{ style: { color: '#bbb' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                  {editVisaId ? 'Update' : 'Save'}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          mt: 4,
          borderRadius: 3,
          backgroundColor: '#0f2027',
          border: '1px solid #2c5364',
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="visa table">
          <TableHead>
            <TableRow>
              {['Country Name', 'Visa Description', 'Update', 'Delete'].map((head) => (
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
            {Array.isArray(visaList) && visaList.length > 0 ? (
              visaList.map((row) => (
                <TableRow key={row._id} sx={{ '&:hover': { backgroundColor: '#203a43' } }}>
                  <TableCell align="center" sx={{ color: '#fff' }}>
                    {destinationList.find(dest => dest._id === row.destinationId)?.destination || 'Unknown'}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {row.visaDetail}
                  </TableCell>
                  
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: '#90caf9',
                        borderColor: '#90caf9',
                        borderRadius: 2,
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
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: '#ef535022',
                          borderColor: '#ef5350',
                        },
                      }}
                      onClick={() => handleDeleteVisa(row._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ color: '#ccc', py: 5 }}>
                  No visa entries available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
};

export default Visa;
