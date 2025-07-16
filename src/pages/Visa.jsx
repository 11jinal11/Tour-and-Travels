import { Typography, Box, Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DestinationPage from './DestinationPage';
const Visa = () => {
    const [visaList, setVisaList] = useState([]);
    const token = 'qMOWm3sCXpZ3W8zM';
    
     const destinationData2 = localStorage.getItem('destinationId')
  console.log("destinationData2 ==> ",destinationData2);

    useEffect(() => {
  fetchVisaData();
}, []);

const fetchVisaData = () => {
  axios
    .get('https://generateapi.onrender.com/api/Visa', {
      headers: { Authorization: token },
    })
    .then((res) => {
      console.log(res.data.Data); // 👈 log the API response
      setVisaList(res.data.Data.filter(item => item.destinationId === destinationData2));
    })
    .catch(console.error);
};

  return (
    <DestinationPage>
    <Container maxWidth="md" sx={{ py: 3 }}>

      
      {visaList.map((visa,index)=> (
      <Box>
         
        <Typography sx={{ lineHeight: 1.8 }}>
       {visa.visaDetail}
        </Typography>
      </Box>
      ))}
    </Container>
     </DestinationPage>
  );
};

export default Visa;
