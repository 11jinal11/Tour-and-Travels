import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  InputLabel,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import AdminLayout from '../admin-layout/AdminLayout';

//----------------------------------------------------------------//
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const Experience = () => {
   const [list, setList] = useState([]);
   
  return (
    <AdminLayout>
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 2,
          background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom>
          ✨ Add New Experience
        </Typography>

        <Stack spacing={3}>
          <Box>
            <InputLabel sx={{ color: '#ccc', mb: 1 }}>Experience Image</InputLabel>
            <Button
              variant="contained"
              component="label"
              sx={{
                bgcolor: '#0288d1',
                '&:hover': { bgcolor: '#0277bd' },
                color: 'white',
              }}
            >
              Upload Image
              <input hidden accept="image/*" type="file" />
            </Button>
            <Box
              sx={{
                mt: 2,
                width: '100%',
                height: 180,
                border: '2px dashed #555',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#aaa',
                fontSize: 14,
              }}
            >
              Image preview here
            </Box>
          </Box>
  <Formik   enableReinitialize
            // initialValues={ini}
            // onSubmit={handleSubmit}
            >
          <Form>
          <Field
          as={TextField}
            label="Experience Title"
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#555' },
                '&:hover fieldset': { borderColor: '#00bcd4' },
              },
            }}
          />

<Field
          as={TextField}
            label="Location"
            variant="outlined"
            fullWidth
            placeholder="City, Country"
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#555' },
                '&:hover fieldset': { borderColor: '#00bcd4' },
              },
            }}
          />

<Field
          as={TextField}
            label="Rating (1 to 5)"
            type="number"
            inputProps={{ min: 1, max: 5 }}
            fullWidth
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#555' },
                '&:hover fieldset': { borderColor: '#00bcd4' },
              },
            }}
          />

<Field
          as={TextField}
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: 'white' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#555' },
                '&:hover fieldset': { borderColor: '#00bcd4' },
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              bgcolor: '#4caf50',
              '&:hover': { bgcolor: '#388e3c' },
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Save Experience
          </Button>
          </Form>
          </Formik>
        </Stack>
      </Paper>
    </Box>
    <TableContainer
  component={Paper}
  sx={{
    mt: 4,
    borderRadius: 3,
    backgroundColor: '#0f2027', // match your theme base
    border: '1px solid #2c5364',
  }}
>
  <Table sx={{ minWidth: 650 }} aria-label="destination table">
    <TableHead>
      <TableRow>
        {['Experience Image', 'Experience Title','Location','Rating','Descrption', 'Update', 'Delete'].map((head) => (
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
          <TableRow
            key={row._id}
            sx={{
              '&:hover': {
                backgroundColor: '#203a43', // slightly lighter dark on hover
              },
            }}
          >
            <TableCell align="center" sx={{ color: '#E0E0E0', fontSize: '15px' }}>
              {row.destination}
            </TableCell>
            <TableCell align="center" sx={{ color: '#E0E0E0', fontSize: '15px' }}>
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
                // onClick={() => deleteData(row.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={4} align="center" sx={{ color: '#ccc', py: 5 }}>
            No destinations available
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
