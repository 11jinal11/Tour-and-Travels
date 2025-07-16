import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';
import AdminLayout from '../admin-layout/AdminLayout';

const FreeConsultList = () => {
  const [consultList, setConsultList] = useState([]);
  const [ini, setIni] = useState({
    name: "",
    email: "",
    contactno: "",
    message: ""
  });

  const token = localStorage.getItem('token');

  useEffect(() => {
    dataView();
  }, []);

  const dataView = () => {
    axios
      .get('https://generateapi.onrender.com/api/freeconsult', {
        headers: { Authorization: token },
      })
      .then((res) => setConsultList(res.data.Data))
      .catch(console.error);
  };

  return (
    <AdminLayout>
      <Container>
        <Typography variant="h4" gutterBottom
          sx={{
            color: 'white',
          }}>
          Free Consult Requests
        </Typography>

        {consultList.map((item) => (
          <Box key={item._id} sx={{
            color: '#fff', mb: 2, p: 4,
            background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
            borderRadius: 4,
            color: 'white',
          }}>
            <Typography>
              <Box component="span" sx={{ fontWeight: 'bold', color: '#1093d8' }}>
                Name:
              </Box>{" "}
              <Box component="span" sx={{ color: '#fff' }}>
                {item.name}
              </Box>
            </Typography>
            <Typography>
              <Box component="span" sx={{ fontWeight: 'bold', color: '#1093d8' }}>
                Email:
              </Box>{" "}
              <Box component="span" sx={{ color: '#fff' }}>
                {item.email}
              </Box>
            </Typography>
            <Typography>
              <Box component="span" sx={{ fontWeight: 'bold', color: '#1093d8' }}>
                Phone no:
              </Box>{" "}
              <Box component="span" sx={{ color: '#fff' }}>
                {item.contactno}
              </Box>
            </Typography>
            <Typography>
              <Box component="span" sx={{ fontWeight: 'bold', color: '#1093d8' }}>
                Message:
              </Box>{" "}
              <Box component="span" sx={{ color: '#fff' }}>
                {item.message}
              </Box>
            </Typography>
           
          </Box>
        ))}
      </Container>
    </AdminLayout>
  );
};

export default FreeConsultList;
