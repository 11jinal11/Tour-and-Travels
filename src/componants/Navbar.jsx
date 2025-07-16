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
import React, { useState, useEffect } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from "../img/ChatGPT Image Apr 18, 2025, 11_00_28 AM.png"
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useHistory } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const pages = [
  { name: 'Destination', path: '/card' },
  // { name: 'Activity', path: '/activities' },
  { name: 'Experience', path: '/reviewPage' },
  { name: 'Contact Us', path: '/contactPage' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  const id = localStorage.getItem('destinationId');
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  const navigate = useHistory(); // ✅ better and avoids clash


  const [destinationList, setdestinationList] = useState([]);
  const [list, setList] = useState([]);
  const token = 'qMOWm3sCXpZ3W8zM';


  useEffect(() => {
    dataView();
  }, []);

  const dataView = () => {
    axios
      .get('https://generateapi.onrender.com/api/destinationadd', {
        headers: { Authorization: token },
      })
      .then((res) => setdestinationList(res.data.Data))
      .catch(console.error);
  };


  return (
    <AppBar position="static" elevation={0} sx={{ position: 'absolute', zIndex: '1000', backgroundColor: 'transparent' }}>
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
              style={{ height: '15vh', marginRight: '16px', width: '100%' }}
            />
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: '15px' }}>
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
            {/* Search Text Field */}
            {searchOpen && (
              <>

                <Formik
                  initialValues={{ destinationId: '' }}
                  onSubmit={() => { }}
                >
                  {({ values, handleChange }) => (
                    <Form>
                      <FormControl
                        size="small"
                        sx={{
                          bgcolor: 'white',
                          borderRadius: 1,
                          width: { xs: '120px', sm: '150px', md: '200px' },
                        }}
                      >
                        <Select
                          name="destinationId"
                          value={values.destinationId}
                          onChange={(e) => {
                            handleChange(e);
                            const selectedId = e.target.value;
                            localStorage.setItem('destinationId', selectedId);
                            console.log("Stored:", selectedId);
                            navigate.push(`/destinationPage/${selectedId}`);


                          }}
                          displayEmpty
                        >
                          <MenuItem value="" disabled>Select Destination</MenuItem>
                          {destinationList.map((dest) => (
                            <MenuItem key={dest._id} value={dest._id}>
                              {dest.destination}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Form>
                  )}
                </Formik>


              </>
            )}

            {/* Toggle Button */}
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
                minWidth: { xs: 40, md: 'auto' },
                px: { xs: 1, md: 2 },
                '&:hover': {
                  backgroundColor: '#c49754',
                },
              }}
            >
              {/* Icon shown only on small screen */}
              <Box sx={{ display: { xs: 'inline', md: 'none' } }}>
                <LoginIcon />
              </Box>

              {/* Text shown only on big screen */}
              <Box sx={{ display: { xs: 'none', md: 'inline' } }}>
                LOGIN
              </Box>
            </Button>

            <Button
              component={Link}
              to="/signup"
              sx={{
                backgroundColor: '#D4A762',
                color: 'white',
                minWidth: { xs: 40, md: 'auto' },
                px: { xs: 1, md: 2 },
                '&:hover': {
                  backgroundColor: '#c49754',
                },
              }}
            >
              {/* Icon for mobile */}
              <Box sx={{ display: { xs: 'inline', md: 'none' } }}>
                <PersonAddIcon />
              </Box>

              {/* Text for desktop */}
              <Box sx={{ display: { xs: 'none', md: 'inline' } }}>
                Signup
              </Box>
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







