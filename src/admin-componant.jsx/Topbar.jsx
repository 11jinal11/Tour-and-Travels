import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import logo from '../img/onlylogo.png'
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



      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* <IconButton color="inherit">
          <DarkModeIcon />
        </IconButton> */}
    
        <Avatar alt="Admin" src="/admin.jpg" />
      </Box>
    </Toolbar>  
  </AppBar>
);

export default Topbar;
