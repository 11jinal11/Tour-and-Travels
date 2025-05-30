import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import axios from 'axios';

const CardComponent = () => {
  const cards = [
    { title: 'Lizard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { title: 'Lizard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { title: 'Lizard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { title: 'Lizard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { title: 'Lizard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { title: 'Lizard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { title: 'Lizard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { title: 'Lizard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { title: 'Lizard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { title: 'Lizard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { title: 'Lizard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { title: 'Lizard', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
  ];

//   const handleCardClick=()=>{
//  axios.post("http://localhost:3000/destination/create",values,{
//   headers :{
//     Authorization:""
//   }
//  })
//  .then(()=>{
//   console.log('sucess');
  
//  })
//  .catch((err)=>{
//   console.log('error');
//  })
//   }
  return (

   <>
 <Box sx={{ textAlign: 'center', my: 4 }}>
  <Typography
    variant="h4"
    sx={{
      fontWeight: 'bold',
      color: '#333',
      letterSpacing: '1px',
      fontSize: 'clamp(1.8rem, 4vw, 3rem)', // Responsive font size
    }}
  >
    Your Next Destination Awaits
  </Typography>
</Box>

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: '16px',
        p: 2,
      }}
    >
      {cards.map((card, index) => (
        
        <Card
          key={index}
          // onClick={handleCardClick}
          sx={{
            width: {
              xs: '100%',                     // 1 card per row on small screens
              sm: 'calc(50% - 8px)',          // 2 cards per row on tablets (1 gap = 16px, divide by 2)
              md: 'calc(25% - 12px)',         // 4 cards per row on desktop (3 gaps = 48px total, ~12px off per card)
            },
            position: 'relative',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              sx={{ height: '460px', width: '100%' }}
              image={card.image}
              alt={card.title}
            />
            <Typography
              variant="h4"
              component="div"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                px: 2,
                py: 1,
                borderRadius: 2,
              }}
            >
              {card.title}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
    </>
  );
};

export default CardComponent;
