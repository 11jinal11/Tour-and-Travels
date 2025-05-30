
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, IconButton, Box, CssBaseline, AppBar, Typography } from '@mui/material';
import { Dashboard, Explore, EventNote, Collections, Menu as MenuIcon } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: <Dashboard /> },
  { name: 'Add Destination', path: '/add-destination', icon: <Explore /> },
  { name: 'Activities', path: '/activity', icon: <EventNote /> },
  { name: 'Experience', path: '/experience', icon: <EventNote /> },
  { name: 'Highlights', path: '/highlightsUIOnly', icon: <EventNote /> },
  { name: 'Itinerary', path: '/itinerary', icon: <EventNote /> },
  { name: 'Gallery', path: '/gallery', icon: <Collections /> },
  { name: 'Tips', path: '/tips', icon: <Collections /> },
  { name: 'Visa', path: '/visa', icon: <Collections /> },
];

const Sidebar = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <>
      <Toolbar sx={{ color: 'white', fontWeight: 'bold', fontSize: '18px', backgroundColor: '#1976d2' }}>
        Admin Panel
      </Toolbar>
      <List>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink to={item.path} key={item.name} style={{ textDecoration: 'none' }}>
              <ListItem disablePadding>
                <ListItemButton
                  selected={isActive}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: '#1976d2',
                      color: 'white',
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: '#115293',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: isActive ? 'white' : '#00bcd4' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} sx={{ color: isActive ? 'white' : 'white' }} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#1976d2',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar folders"
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1e1e1e', color: 'white' },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1e1e1e', color: 'white' },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main Content */}
     
    </Box>
  );
};

export default Sidebar;
