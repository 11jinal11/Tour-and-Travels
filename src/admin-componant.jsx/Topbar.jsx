import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Button,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../img/onlylogo.png'
const handleLogout = () => {
  // Example: JWT Token Local Storage Remove 
  localStorage.removeItem('token');

  sessionStorage.clear();

  window.location.href = '/login';
};
const Topbar = () => (

  <AppBar
    position="fixed"
    sx={{
      zIndex: 1201,
      background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    }}
  >
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <img
          src={logo}
          alt="Wonderlust Travel Logo"
          style={{ height: '11vh', width: 'auto', marginRight: '12px' }}
        />
        <span style={{ fontWeight: 600, textTransform: 'capitalize', fontSize: '1.25rem' }}>
          Wonderlust Travel Admin Panel
        </span>
      </Typography>



      <Box sx={{ width: '50px', height: '50px', backgroundColor: '#0288D1', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: 2 }}>

        <Button sx={{ color: '#fff' }} onClick={handleLogout}><LogoutIcon /></Button>
        {/* <Avatar alt="Admin" src="/admin.jpg" /> */}
      </Box>
    </Toolbar>
  </AppBar>
);

export default Topbar;
