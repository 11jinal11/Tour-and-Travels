import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { AddPhotoAlternate, Delete } from '@mui/icons-material';
import AdminLayout from '../admin-layout/AdminLayout';

export default function Gallery() {
  const [list, setList] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prev) => [...prev, ...imageUrls]);
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
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
          🖼️ Add Gallery Photos
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            backgroundColor: '#122c3a',
            p: 3,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          {/* Upload Button */}
          <Button
            component="label"
            variant="contained"
            startIcon={<AddPhotoAlternate />}
            sx={{ bgcolor: '#0288d1', mb: 2 }}
          >
            Upload Photos
            <input
              type="file"
              hidden
              multiple
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Button>

          {/* Image Preview Grid */}
          <Grid container spacing={2} justifyContent="center">
            {selectedImages.map((src, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: '2px solid #1e3a4c',
                  }}
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      bgcolor: '#f44336',
                      color: '#fff',
                      '&:hover': { bgcolor: '#d32f2f' },
                    }}
                    size="small"
                    onClick={() => handleImageDelete(index)}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Save Button */}
        <Button
          variant="contained"
          sx={{
            mt: 4,
            bgcolor: '#4caf50',
            color: '#fff',
            fontWeight: 'bold',
            px: 4,
          }}
        >
          SAVE GALLERY
        </Button>
      </Box>

      {/* Gallery Table */}
      <TableContainer
        component={Paper}
        sx={{
          mt: 4,
          borderRadius: 3,
          backgroundColor: '#0f2027',
          border: '1px solid #2c5364',
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="gallery table">
          <TableHead>
            <TableRow>
              {['Gallery', 'Update', 'Delete'].map((head) => (
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
                <TableRow
                  key={row._id}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#203a43',
                    },
                  }}
                >
                  <TableCell align="center" sx={{ color: '#E0E0E0' }}>
                    {row.destination}
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
                <TableCell colSpan={3} align="center" sx={{ color: '#ccc', py: 5 }}>
                  No gallery items available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
}
