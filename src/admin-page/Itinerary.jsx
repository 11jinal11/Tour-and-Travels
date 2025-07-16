import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { Formik, Form } from 'formik';
import AdminLayout from '../admin-layout/AdminLayout';
import axios from 'axios';

export default function Itinerary() {
  const [itineraryList, setItineraryList] = useState([]);
  const [destinationList, setDestinationList] = useState([]);
  const [editingItineraryId, setEditingItineraryId] = useState(null);
  const [ini, setIni] = useState({
    destinationId: '',
    destinationName: '',
    dayDescription: '',
  });

 const token = localStorage.getItem('token');

  useEffect(() => {
    loadItineraries();
    loadDestinations();
  }, []);

  const loadItineraries = () => {
    axios
      .get('https://generateapi.onrender.com/api/Itinerary', {
        headers: { Authorization: token },
      })
      .then((res) => setItineraryList(res.data.Data))
      .catch(console.error);
  };

  const loadDestinations = () => {
    axios
      .get('https://generateapi.onrender.com/api/destinationadd', {
        headers: { Authorization: token },
      })
      .then((res) => setDestinationList(res.data.Data))
      .catch(console.error);
  };

  const handleSubmit = (values, { resetForm }) => {
    const payload = {
      destinationId: values.destinationId,
      destinationName: values.destinationName,
      dayDescription: values.dayDescription
    };
    console.log("payloa==>", payload);

    const request = editingItineraryId
      ? axios.patch(
        `https://generateapi.onrender.com/api/Itinerary/${editingItineraryId}`,
        payload,
        { headers: { Authorization: token } }
      )
      : axios.post('https://generateapi.onrender.com/api/Itinerary', payload, {
        headers: { Authorization: token },
      });

    request
      .then(() => {
        console.log("success");

        loadItineraries();
        resetForm();
        setEditingItineraryId(null);
        setIni({ destinationId: '', destinationName: '', dayDescription: '' });
      })
      .catch((error) => {
        console.error('Error saving itinerary:', error.response?.data || error.message);
      });
  };

  const editData = (itineraryId, row) => {
    setEditingItineraryId(itineraryId);
    setIni({
      destinationId: row.destinationId === 'string' ? row.destinationId : row.destinationId?._id || '',
      destinationName: row.destinationName || '',
      dayDescription: row.dayDescription || '',
    });
  };


  const handleDeleteItinerary = (itineraryId) => {
    axios
      .delete(`https://generateapi.onrender.com/api/Itinerary/${itineraryId}`, {
        headers: { Authorization: token },
      })
      .then(() => {
        loadItineraries();
      })
      .catch((error) => {
        console.error('Error deleting itinerary:', error.response?.data || error.message);
      });
  };

  return (
    <AdminLayout>
      <Box sx={{ background: '#0d1f2d', color: '#fff', p: 3, borderRadius: 3, maxWidth: '1000px', margin: 'auto', mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>🗽️ Add Itinerary</Typography>

        <Paper variant="outlined" sx={{ backgroundColor: '#122c3a', p: 3, borderRadius: 2 }}>
          <Formik initialValues={ini} enableReinitialize onSubmit={handleSubmit}>
            {({ values, handleChange }) => (
              <Form>
                <FormControl fullWidth sx={{ mb: 2 }}>
                     <InputLabel  sx={{ color: '#bbb' }}>Destination</InputLabel>
                  <Select
                  sx={{color:'white'}}
                    name="destinationId"
                    label="Destination"
                    value={values.destinationId}
                    onChange={handleChange}
                    required
                  >
                    {destinationList.map((dest) => (
                      <MenuItem key={dest._id} value={dest._id}>
                        {dest.destination}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  name="destinationName"
                  label="Destination Name"
                  variant="filled"
                  value={values.destinationName}
                  onChange={handleChange}
                  sx={{ mb: 2 ,color: 'white'}}
                  InputProps={{ style: { backgroundColor: '#1e3a4c',  } }}
                  InputLabelProps={{ style: { color: '#ccc' } }}
                  required
                />

                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  name="dayDescription"
                  label="Day Description"
                  variant="filled"
                  value={values.dayDescription}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  InputProps={{ style: { backgroundColor: '#1e3a4c', color: '#fff' } }}
                  InputLabelProps={{ style: { color: '#ccc' } }}
                  required
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2, bgcolor: '#4caf50', color: '#fff', fontWeight: 'bold', px: 4 }}
                >
                  {editingItineraryId ? 'Update Itinerary' : 'Save Itinerary'}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>

        <TableContainer component={Paper} sx={{ mt: 4, borderRadius: 3, backgroundColor: '#0f2027', border: '1px solid #2c5364' }}>
          <Table sx={{ minWidth: 650 }} aria-label="itinerary table">
            <TableHead>
              <TableRow>
                {['Destination Id', 'Day Destination', 'Day Info', 'Update', 'Delete'].map((head) => (
                  <TableCell
                    key={head}
                    align="center"
                    sx={{ color: '#E0E0E0', fontWeight: 'bold', fontSize: '16px', borderBottom: '1px solid #2c5364' }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {Array.isArray(itineraryList) && itineraryList.length > 0 ? (
                itineraryList.map((row) => (             
                  <TableRow key={row._id} sx={{ '&:hover': { backgroundColor: '#203a43' } }}>
                    <TableCell align="center" sx={{ color: '#E0E0E0' }}>                   
                        { row.destinationId.destination}                     
                    </TableCell>

                    <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                      {row.destinationName }                     
                    </TableCell>
                    <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                      {row.dayDescription      }                
                    </TableCell>

                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ color: '#90caf9', borderColor: '#90caf9', borderRadius: 2, fontWeight: 'bold' }}
                        onClick={() => editData(row._id, row)}
                      >
                        Update
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ color: '#ef5350', borderColor: '#ef5350', borderRadius: 2, fontWeight: 'bold' }}
                        onClick={() => handleDeleteItinerary(row._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>

                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ color: '#ccc', py: 5 }}>
                    No itineraries found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </AdminLayout>
  );
}
