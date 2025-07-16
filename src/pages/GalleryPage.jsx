import React, { useEffect, useState } from 'react';
import { Box, CardMedia } from '@mui/material';
import axios from 'axios';
import DestinationPage from './DestinationPage';


const GalleryPage = () => {
  const [galleryList, setGalleryList] = useState([]);
  const token = 'qMOWm3sCXpZ3W8zM';

   const destinationData2 = localStorage.getItem('destinationId')
  console.log("destinationData2 ==> ",destinationData2);
  
  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios
      .get('https://generateapi.onrender.com/api/Gallery', {
        headers: { Authorization: token },
      })
      .then((res) => {
      
// console.log(res.data.Data);
// console.log(res.data.Data.filter(item => item.destinationid._id === destinationData2));

        setGalleryList(res.data.Data.filter(
        item => item.destinationid._id === destinationData2
      ))
   } )
//   .then((res) => {
//   const data = res.data.Data;
//   console.log(data);
//   const filtered = data.filter(
//     item => item.destinationId === destinationData2 || item.destinationId?._id === destinationData2
//   );
//   console.log(filtered);
//   setGalleryList(filtered);
// })

      .catch(console.error);
  };

  return (
    <DestinationPage>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 4,
          p: 4,
        }}
      >
        {galleryList.map((gallery, index) =>
          <CardMedia
            component="img"
            height="290"
            image={gallery.images[index]}
            alt={''}
            sx={{ objectFit: 'cover', width: '33.33%' }}
          />

        )}
      </Box>
    </DestinationPage>
  );
};

export default GalleryPage;
