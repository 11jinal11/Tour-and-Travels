import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  Paper,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  CloudUpload,
  WbSunny,
  AcUnit,
  Opacity,
  EmojiNature,
} from '@mui/icons-material';
import { Formik, Form } from 'formik';
import AdminLayout from '../admin-layout/AdminLayout';

export default function Tips() {
  const [list, setList] = useState([]);

  return (
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
            initialValues={{}} // You can define initial values here
            onSubmit={(values) => {
              console.log('Form submitted:', values);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                {/* Destination Name */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Destination Name"
                    variant="filled"
                    InputProps={{
                      style: { backgroundColor: '#1e3a4c', color: '#fff' },
                    }}
                    InputLabelProps={{ style: { color: '#ccc' } }}
                  />
                </Grid>

                {/* Seasons */}
                {[
                  { label: 'Spring', icon: <EmojiNature />, id: 'spring' },
                  { label: 'Summer', icon: <Opacity />, id: 'summer' },
                  { label: 'Autumn', icon: <WbSunny />, id: 'autumn' },
                  { label: 'Winter', icon: <AcUnit />, id: 'winter' },
                ].map((season) => (
                  <Grid item xs={6} md={3} key={season.id}>
                    <TextField
                      fullWidth
                      label={`${season.label} Temp (°C / °F)`}
                      variant="filled"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {season.icon}
                          </InputAdornment>
                        ),
                        style: { backgroundColor: '#1e3a4c', color: '#fff' },
                      }}
                      InputLabelProps={{ style: { color: '#ccc' } }}
                    />
                  </Grid>
                ))}

                {/* Currency */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Currency"
                    variant="filled"
                    placeholder="Japanese Yen (JPY)"
                    InputProps={{
                      style: { backgroundColor: '#1e3a4c', color: '#fff' },
                    }}
                    InputLabelProps={{ style: { color: '#ccc' } }}
                  />
                </Grid>

                {/* Time Difference */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Time Difference"
                    variant="filled"
                    placeholder="London GMT + 9hr"
                    InputProps={{
                      style: { backgroundColor: '#1e3a4c', color: '#fff' },
                    }}
                    InputLabelProps={{ style: { color: '#ccc' } }}
                  />
                </Grid>

                {/* Best Time to Visit */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Best Time To Visit"
                    placeholder="Late spring (March to May) and late autumn (September to November)"
                    variant="filled"
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
                    <input type="file" hidden accept="image/*" />
                  </Button>
                </Grid>

                {/* Save Button */}
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, bgcolor: '#4caf50', fontWeight: 'bold' }}
                  >
                    SAVE TRAVEL TIPS
                  </Button>
                </Grid>
              </Grid>
            </Form>
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
              {['Destination Name', 'Spring Temp','Summar Temp','Autumn Temp','Winter Temp','Currency','Time Difference','Best Timeto Visit','Image',, 'Update', 'Delete'].map(
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
                <TableRow
                  key={row._id}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#203a43',
                    },
                  }}
                >
                  <TableCell
                    align="center"
                    sx={{ color: '#E0E0E0', fontSize: '15px' }}
                  >
                    {row.destination}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: '#E0E0E0', fontSize: '15px' }}
                  >
                    ₹{row.packagePrice}
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
                      // onClick={() => deleteData(row._id)}
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
  );
}
