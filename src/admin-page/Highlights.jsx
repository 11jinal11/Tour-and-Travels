import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  TextField,
  IconButton,
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
import { Add, Delete } from '@mui/icons-material';
import AdminLayout from '../admin-layout/AdminLayout';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

export default function Highlights() {
  const [ini, setIni] = useState({
    destinationId: '',
    sightseeingIncluded: '',
    packageIncludes: '',
  });

  const [list, setList] = useState([]);
  const [edithighlighthId, setEditHighlighthId] = useState(null);
  const [destinationList, setDestinationList] = useState([]);

  const token =  'qMOWm3sCXpZ3W8zM';

  useEffect(() => {
    dataView();
    fetchDestinations();
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    const payload = {
      destinationId: values.destinationId,
      sightseeingIncluded: [values.sightseeingIncluded],
      packageIncludes: [values.packageIncludes],
      packageExcludes:[values.packageExcludes]
    };

    const request = edithighlighthId
      ? axios.patch(`https://generateapi.onrender.com/api/Highlights/${edithighlighthId}`, payload, {
          headers: { Authorization: token },
        })
      : axios.post('https://generateapi.onrender.com/api/Highlights', payload, {
          headers: { Authorization: token },
        });

    request
      .then(() => {
        dataView();
        resetForm();
        setIni({ destinationId: '', sightseeingIncluded: '', packageIncludes: '',packageExcludes:'' });
        setEditHighlighthId(null);
      })
      .catch(console.error);
  };

  const editData = (highlightId, row) => {
    setEditHighlighthId(highlightId);
    setIni({
      destinationId: row.destinationId?._id || '',
      sightseeingIncluded: row.sightseeingIncluded[0] || '',
      packageIncludes: row.packageIncludes[0] || '',
      packageExcludes: row.packageExcludes[0] || '',
    });
  };

  const dataView = () => {
    axios
      .get('https://generateapi.onrender.com/api/Highlights', {
        headers: { Authorization: token },
      })
      .then((res) => setList(res.data.data))
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

  const handleDeleteHighlight = (highlightId) => {
    axios
      .delete(`https://generateapi.onrender.com/api/Highlights/${highlightId}`, {
        headers: { Authorization: token },
      })
      .then(() => dataView())
      .catch(console.error);
  };

  return (
    <AdminLayout>
      <Box
        sx={{
          background: '#0d1f2d',
          color: '#fff',
          p: 3,
          borderRadius: 3,
          maxWidth: '1000px',
          margin: 'auto',
          mt: 4,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
          📝 Add Highlights
        </Typography>

        <Paper variant="outlined" sx={{ backgroundColor: '#122c3a', p: 3, borderRadius: 2 }}>
          <Formik enableReinitialize initialValues={ini} onSubmit={handleSubmit}>
            {({ values, handleChange }) => (
              <Form>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Destination</InputLabel>
                  <Select
                    name="destinationId"
                    label="Destination"
                    value={values.destinationId}
                    onChange={handleChange}
                  >
                    {destinationList.map((dest) => (
                      <MenuItem key={dest._id} value={dest._id}>
                        {dest.destination}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Stack spacing={2}>
                  <Typography variant="h6">Sightseeing Included</Typography>
                  <Stack direction="row" spacing={1}>
                    <Field
                      as={TextField}
                      name="sightseeingIncluded"
                      fullWidth
                      variant="filled"
                      label="Sightseeing #1"
                      InputProps={{ style: { backgroundColor: '#1e3a4c', color: '#fff' } }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                    />
                    <IconButton sx={{ color: '#f44336' }}>
                      <Delete />
                    </IconButton>
                  </Stack>

                  <Typography variant="h6">Package Includes</Typography>
                  <Stack direction="row" spacing={1}>
                    <Field
                      as={TextField}
                      name="packageIncludes"
                      fullWidth
                      variant="filled"
                      label="Include #1"
                      InputProps={{ style: { backgroundColor: '#1e3a4c', color: '#fff' } }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                    />
                    <IconButton sx={{ color: '#f44336' }}>
                      <Delete />
                    </IconButton>
                  </Stack>

 <Typography variant="h6">Package Excludes</Typography>
                  <Stack direction="row" spacing={1}>
                    <Field
                      as={TextField}
                      name="packageExcludes"
                      fullWidth
                      variant="filled"
                      label="Include #1"
                      InputProps={{ style: { backgroundColor: '#1e3a4c', color: '#fff' } }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                    />
                    <IconButton sx={{ color: '#f44336' }}>
                      <Delete />
                    </IconButton>
                  </Stack>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 4, bgcolor: '#4caf50', color: '#fff', fontWeight: 'bold', px: 4 }}
                  >
                    {edithighlighthId ? 'UPDATE HIGHLIGHT' : 'SAVE HIGHLIGHTS'}
                  </Button>
                </Stack>
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
        <Table sx={{ minWidth: 650 }} aria-label="destination table">
          <TableHead>
            <TableRow>
              {['Destination', 'Sightseeing Included', 'Package Includes', 'Update', 'Delete'].map(
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
            {Array.isArray(list) && list.length > 0 ? (
              list.map((row) => (
                <TableRow key={row._id} sx={{ '&:hover': { backgroundColor: '#203a43' } }}>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {row.destinationId?.destination || 'N/A'}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {(row.sightseeingIncluded || []).join(', ')}
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {(row.packageIncludes || []).join(', ')}
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
                        },
                      }}
                      onClick={() => handleDeleteHighlight(row._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ color: '#ccc', py: 5 }}>
                  No highlights available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
}
