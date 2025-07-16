// // import React, { useEffect, useState } from 'react';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Aos from 'aos';
// import { useEffect, useState } from 'react';

// const CardComponent = () => {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     Aos.init({ duration: 1000, once: true });
//     dataView();
//   }, []);

//   const dataView = () => {
//     axios
//       .get('https://generateapi.onrender.com/api/destinationadd', {
//         headers: {
//           Authorization: 'qMOWm3sCXpZ3W8zM',
//         },
//       })
//       .then((res) => {
//         console.log('Destination list:', res.data);
//         setList(res.data.Data || []);
//       })
//       .catch(console.log);
//   };

//   return (
//     <>
//       <Box sx={{ textAlign: 'center', my: 4 }}>
//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: 'bold',
//             color: '#333',
//             letterSpacing: '1px',
//             fontSize: 'clamp(1.8rem, 4vw, 3rem)',
//           }}
//         >
//           Your Next Destination Awaits
//         </Typography>
//       </Box>

//       <Box
//         sx={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'flex-start',
//           gap: '16px',
//           p: 2,
//         }}
//       >
//         {list.map((card, index) => (
//           <Card
//             key={card._id}
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//             sx={{
//               width: {
//                 xs: '100%',
//                 sm: 'calc(50% - 8px)',
//                 md: 'calc(25% - 12px)',
//               },
//               position: 'relative',
//               borderRadius: 2,
//               overflow: 'hidden',
//               boxShadow: 4,
//               cursor: 'pointer',
//               transition: 'transform 0.3s ease',
//               '&:hover .media': {
//                 filter: 'blur(0px)',
//                 transform: 'scale(1.05)',
//               },
//               '&:hover .title': {
//                 opacity: 0,
//               },
//               '&:hover .price': {
//                 opacity: 1,
//                 bottom: 16,
//               },
//             }}
//           >
//             <Link
//               to={`/destinationPage/${card._id}`}
//               style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
//             >
//               <CardMedia
//                 component="img"
//                 image={card.Images}
//                 alt={card.destination}
//                 className="media"
//                 sx={{
//                   height: 560,
//                   width: '100%',
//                   objectFit: 'cover',
//                   filter: 'blur(4px)',
//                   transition: 'all 0.4s ease',
//                 }}
//               />

//               <Box
//                 className="title"
//                 sx={{
//                   position: 'absolute',
//                   top: '50%',
//                   left: '50%',
//                   transform: 'translate(-50%, -50%)',
//                   color: 'white',
//                   textAlign: 'center',
//                   opacity: 1,
//                   transition: 'opacity 0.4s ease',
//                   zIndex: 2,
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: 'bold',
//                     textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
//                   }}
//                 >
//                   {card.destination}
//                 </Typography>
//               </Box>

//               <Box
//                 className="price"
//                 sx={{
//                   position: 'absolute',
//                   bottom: -40,
//                   left: '50%',
//                   transform: 'translateX(-50%)',
//                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                   color: '#000',
//                   px: 2,
//                   py: 1,
//                   borderRadius: '8px',
//                   fontWeight: 600,
//                   fontSize: '1rem',
//                   boxShadow: 3,
//                   opacity: 0,
//                   transition: 'all 0.4s ease',
//                   zIndex: 3,
//                 }}
//               >
//                 USD {card.packagePrice}
//               </Box>
//             </Link>
//           </Card>
//         ))}
//       </Box>
//     </>
//   );
// };

// export default CardComponent;
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardComponent = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
      easing: 'ease-in-out', // Easing function
    });
    dataView();
  }, []);

  const dataView = () => {
    axios
      .get('https://generateapi.onrender.com/api/destinationadd', {
        headers: {
          Authorization: 'qMOWm3sCXpZ3W8zM',
        },
      })
      .then((res) => {
        setList(res.data.Data || []);
      })
      .catch(console.log);
  };

  return (
    <>
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            letterSpacing: '1px',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
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
        {list.map((card, index) => (
          <Card
            key={card._id}
            data-aos="fade-up"
            data-aos-delay={index * 100} // Stagger cards
            sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 8px)',
                md: 'calc(25% - 12px)',
              },
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 4,
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '&:hover .media': {
                filter: 'blur(0px)',
                transform: 'scale(1.05)',
              },
              '&:hover .title': {
                opacity: 0,
              },
              '&:hover .price': {
                opacity: 1,
                bottom: 16,
              },
            }}
          >
            <Link
              to={`/destinationPage/${card._id}`}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <CardMedia
                component="img"
                image={card.Images}
                alt={card.destination}
                className="media"
                sx={{
                  height: 560,
                  width: '100%',
                  objectFit: 'cover',
                  filter: 'blur(4px)',
                  transition: 'all 0.4s ease',
                }}
              />
            </Link>

            <Box
              className="title"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                opacity: 1,
                transition: 'opacity 0.4s ease',
                zIndex: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
                }}
              >
                {card.destination}
              </Typography>
            </Box>

            <Box
              className="price"
              sx={{
                position: 'absolute',
                bottom: -40,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#000',
                px: 2,
                py: 1,
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '1rem',
                boxShadow: 3,
                opacity: 0,
                transition: 'all 0.4s ease',
                zIndex: 3,
              }}
            >
              USD {card.packagePrice}
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default CardComponent;
