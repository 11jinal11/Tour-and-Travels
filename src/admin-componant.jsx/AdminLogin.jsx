import React from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import logo from '../img/44267935-54f9-4794-b1fc-86a8627791b9-removebg-preview.png';

const AdminLogin = () => {

    const [ini, setIni] = useState({
    
        email: '',
        password: '',
      });
    
      const history = useHistory();
    
      const handleLogin = (values) => {
        console.log(values);
        axios.post('https://travel-planning-wgkf.onrender.com/admin/login', values)
          .then(() => {
            history.push('/');
            console.log('success');
          })
          .catch((err) => {
            console.log('error', err);
          });
      };
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{
          p: 4,
          mt: 8,
          borderRadius: 4,
          background: '#1e1e1e',
          color: 'white',
        }}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <img
            src={logo}
            alt="Admin Logo"
            style={{ height: '25vh', width: '45%' }}
          />
        </Box>

        <Typography variant="h5" align="center" gutterBottom>
          Admin Panel Login
        </Typography>

        <Box component="form" autoComplete="off">
          <Stack spacing={3} mt={3}>
            <TextField
              label="Admin Email"
              variant="outlined"
              type="email"
              fullWidth
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#444' },
                  '&:hover fieldset': { borderColor: '#00bcd4' },
                },
              }}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: 'white' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#444' },
                  '&:hover fieldset': { borderColor: '#00bcd4' },
                },
              }}
            />

            <Button
            type='submit'
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#D4A762',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#c49754',
                },
              }}
            >
              Login as Admin
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
