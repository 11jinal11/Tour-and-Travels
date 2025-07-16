import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';
import AdminLayout from '../admin-layout/AdminLayout';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';



const Bookinglist = () => {
  const [bookList, setBookList] = useState([]);
  const [destinationList, setDestinationList] = useState([]);

const history = useHistory(); // ⛔️ તે component બહાર invalid છે

  const handleLogout = () => {
  // localStorage.removeItem('token');
  history.push('/login');
};
  // const token = 'qMOWm3sCXpZ3W8zM';

   const token = localStorage.getItem('token');
    if (!token) {
     
      handleLogout();
    }

  useEffect(() => {
    
    dataView();
    fetchDestinations();
  }, []);

  const dataView = () => {
    axios
      .get('https://generateapi.onrender.com/api/BookinG', {
        headers: { Authorization: token },
      })
      .then((res) => setBookList(res.data.Data))
      .catch(console.error);
  };

  const fetchDestinations = () => {
    axios
      .get('https://generateapi.onrender.com/api/destinationadd', {
        headers: { Authorization: token },
      })
      .then((res) => setDestinationList(res.data.Data || []))
      .catch(console.error);
  };

  return (
    <AdminLayout>
      <Container sx={{ py: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: '#fff' }}
        >
          Booking List
        </Typography>

        {bookList.map((item) => (
          <Box
            key={item._id}
            sx={{
              mb: 3,
              p: 3,
              background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
              borderRadius: 2,
              color: '#fff',
              overflowWrap: 'anywhere',
            }}
          >
            <Typography>
              <Box component="span" sx={{ fontWeight: 'bold', color: '#1093d8' }}>
                Client Name:
              </Box>{" "}
              <Box component="span">{item.username}</Box>
            </Typography>

            <Typography>
              <Box component="span" sx={{ fontWeight: 'bold', color: '#1093d8' }}>
                Destination Name:
              </Box>{" "}
              <Box component="span">{item.destinationId.destination}</Box>
            </Typography>

            <Typography>
              <Box component="span" sx={{ fontWeight: 'bold', color: '#1093d8' }}>
                Booking Date:
              </Box>{" "}
              <Box component="span">{item.bookingdate}</Box>
            </Typography>

            <Typography>
              <Box component="span" sx={{ fontWeight: 'bold', color: '#1093d8' }}>
                Phone no:
              </Box>{" "}
              <Box component="span">{item.contactno}</Box>
            </Typography>

            <Typography>
              <Box component="span" sx={{ fontWeight: 'bold', color: '#1093d8' }}>
                Email:
              </Box>{" "}
              <Box component="span">{item.email}</Box>
            </Typography>
          </Box>
        ))}
      </Container>
    </AdminLayout>
  );
};

export default Bookinglist;
