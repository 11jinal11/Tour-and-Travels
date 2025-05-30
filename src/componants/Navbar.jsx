import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from "../img/ChatGPT Image Apr 18, 2025, 11_00_28 AM.png"
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
const pages = [
  { name: 'Destination', path: '/card' },
  { name: 'Activity', path: '/activities' },
  { name: 'Experience', path: '/reviewPage' },
  { name: 'Contact Us', path: '/contactPage' },
 ]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  return (
    <AppBar position="static"   elevation={0}sx={{position:'absolute',zIndex:'1000', backgroundColor: 'transparent'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
        <img
  src={logo}
  // alt="Wanderl"
  style={{ height: '15vh', marginRight: '16px' ,width:'100%'}}
/>
          </Typography>

    
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap:'15px'}}>
  {pages.map((page) => (
    <Button
      key={page.name}
      component={Link} // 👈 Imp part!
      to={page.path}
      sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
    >
      {page.name}
    </Button>
  ))}
</Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginLeft: 'auto' }}>
            {searchOpen && (
              <TextField
                size="small"
                variant="outlined"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                sx={{ bgcolor: 'white', borderRadius: 1, width: { xs: '120px', sm: '150px', md: '200px' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
            <IconButton onClick={toggleSearch} color="inherit">
              <SearchIcon />
            </IconButton>
           
          </Box>
   

<Stack direction="row" spacing={2}>
     
<Button
  component={Link}
  to="/login"
  sx={{
    backgroundColor: '#D4A762',
    color: 'white',
    '&:hover': {
      backgroundColor: '#c49754',
    },
  }}
>
  LOGIN
</Button>
<Button
  component={Link}
  to="/signup"
  sx={{
    backgroundColor: '#D4A762',
    color: 'white',
    '&:hover': {
      backgroundColor: '#c49754',
    },
  }}
>
       Signup
      </Button>
    </Stack>
<IconButton
  color="inherit"
  onClick={handleDrawerToggle}
  sx={{ display: { xs: 'flex', md: 'none' } }}
>
  <MenuIcon />
</IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: 250 } }}
      >
       <List>
  {pages.map((page) => (
    <Link key={page.name} to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItem disablePadding>
        <ListItemButton onClick={handleDrawerToggle}>
          <ListItemText primary={page.name} />
        </ListItemButton>
      </ListItem>
    </Link>
  ))}
</List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;







