import React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Topbar from '../admin-componant.jsx/Topbar';
import Sidebar from '../admin-componant.jsx/Sidebar';


const AdminLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Topbar />
      <Sidebar />
      <Box
      
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#121212',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
