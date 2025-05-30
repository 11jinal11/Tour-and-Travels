// import React from 'react';
// import {
//   Box,
//   Grid,
//   Typography,
//   Divider,
//   Paper,
// } from '@mui/material';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import FilterDramaIcon from '@mui/icons-material/FilterDrama';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import pi1 from '../img/planimg1.jpg'
// const TravelTips = () => {
//   return (
//     <Box sx={{ px: { xs: 2, md: 8 }, py: 8, bgcolor: '#fff' }}>
//       {/* Heading */}
//       <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 500 }}>
//         Japan Travel Tips
//       </Typography>
//       <Typography variant="body1" align="center" color="text.secondary" mb={6}>
//         On Luxury Gold tours, your Travel Concierge is fluent in the local language and culture.
//         Before you go, here is more information about Japan.
//       </Typography>

//       {/* Seasons Grid */}
//      <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
//      <Grid container spacing={4} justifyContent="center" mb={6}>
//         {/* Spring */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Box textAlign="center">
//             <WbSunnyIcon sx={{ fontSize: 40, color: '#FFD700' }} />
//             <Typography variant="h6">SPRING</Typography>
//             <Typography variant="body2" color="text.secondary">MAR–MAY</Typography>
//             <Divider sx={{ my: 1, width: '50%', mx: 'auto' }} />
//             <Typography variant="body2">14°C / 57°F</Typography>
//           </Box>
//         </Grid>

//         {/* Summer */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Box textAlign="center">
//             <ThunderstormIcon sx={{ fontSize: 40, color: '#2196F3' }} />
//             <Typography variant="h6">SUMMER</Typography>
//             <Typography variant="body2" color="text.secondary">JUN–AUG</Typography>
//             <Divider sx={{ my: 1, width: '50%', mx: 'auto' }} />
//             <Typography variant="body2">25°C / 77°F</Typography>
//           </Box>
//         </Grid>

//         {/* Autumn */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Box textAlign="center">
//             <FilterDramaIcon sx={{ fontSize: 40, color: '#FFA726' }} />
//             <Typography variant="h6">AUTUMN</Typography>
//             <Typography variant="body2" color="text.secondary">SEPT–NOV</Typography>
//             <Divider sx={{ my: 1, width: '50%', mx: 'auto' }} />
//             <Typography variant="body2">18°C / 64°F</Typography>
//           </Box>
//         </Grid>

//         {/* Winter */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Box textAlign="center">
//             <AcUnitIcon sx={{ fontSize: 40, color: '#90CAF9' }} />
//             <Typography variant="h6">WINTER</Typography>
//             <Typography variant="body2" color="text.secondary">DEC–FEB</Typography>
//             <Divider sx={{ my: 1, width: '50%', mx: 'auto' }} />
//             <Typography variant="body2">5°C / 41°F</Typography>
//           </Box>
//         </Grid>
//       </Grid>
//      </Box>

//       {/* Currency + Time + Image */}
//       <Box sx={{ px: { xs: 2, md: 6 }, py: 6, display:'flex',flexDirection:'column'}}>
//       <Grid container spacing={4} alignItems="stretch" sx={{display:'flex',flexDirection:'column'}}>
//         {/* Left Side - Text Content */}
//         <Grid item xs={12} md={6} sx={{width:'30%'}}>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               height: '100%',
              
//             }}
//           >
//             <Grid container spacing={2} mb={3}>
//               <Grid item xs={6}>
//                 <Paper elevation={0} sx={{ py: 2, textAlign: 'center', border: '1px solid #ddd' }}>
//                   <Typography variant="body2" color="text.secondary">Currency</Typography>
//                   <Typography variant="body2" sx={{ fontWeight: 500 }}>Japanese Yen (JPY)</Typography>
//                 </Paper>
//               </Grid>
//               <Grid item xs={6}>
//                 <Paper elevation={0} sx={{ py: 2, textAlign: 'center', border: '1px solid #ddd' }}>
//                   <Typography variant="body2" color="text.secondary">Time Difference</Typography>
//                   <Typography variant="body2" sx={{ fontWeight: 500 }}>London GMT + 9hr</Typography>
//                 </Paper>
//               </Grid>
//             </Grid>

//             <Divider sx={{ my: 2 }} />
//             <Typography variant="body1" color="text.secondary">
//               <strong>When to go:</strong> Late spring (March to May) and late autumn (September to November).
//             </Typography>
//           </Box>
//         </Grid>

//         {/* Right Side - Image */}
//         <Grid item xs={12} md={6}>
//           <Box
//             component="img"
//             src={pi1}
//             alt="Golden Pavilion Japan"
//             sx={{
//               width: '50%',
//               height: '100%',
//               objectFit: 'cover',
//               borderRadius: 2,
//               boxShadow: 3,
//             }}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//     </Box>
//   );
// };

// export default TravelTips;
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Divider,
  Paper,
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import pi1 from '../img/planimg2.jpg'

const TravelTips = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 8, bgcolor: '#fff' }}>
      {/* Heading */}
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 500 }}>
        Japan Travel Tips
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" mb={6}>
        On Luxury Gold tours, your Travel Concierge is fluent in the local language and culture.
        Before you go, here is more information about Japan.
      </Typography>

      {/* Seasons */}
      <Grid container spacing={4} justifyContent="center" mb={6}>
        {[
          { label: 'SPRING', icon: <WbSunnyIcon sx={{ fontSize: 40, color: '#FFD700' }} />, months: 'MAR–MAY', temp: '14°C / 57°F' },
          { label: 'SUMMER', icon: <ThunderstormIcon sx={{ fontSize: 40, color: '#2196F3' }} />, months: 'JUN–AUG', temp: '25°C / 77°F' },
          { label: 'AUTUMN', icon: <FilterDramaIcon sx={{ fontSize: 40, color: '#FFA726' }} />, months: 'SEPT–NOV', temp: '18°C / 64°F' },
          { label: 'WINTER', icon: <AcUnitIcon sx={{ fontSize: 40, color: '#90CAF9' }} />, months: 'DEC–FEB', temp: '5°C / 41°F' },
        ].map((season, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box textAlign="center">
              {season.icon}
              <Typography variant="h6">{season.label}</Typography>
              <Typography variant="body2" color="text.secondary">{season.months}</Typography>
              <Divider sx={{ my: 1, width: '50%', mx: 'auto' }} />
              <Typography variant="body2">{season.temp}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
{/* 
      /* Side-by-Side: Currency | Time | Image */}
      
{/* Side-by-Side: Currency | Time | Image */}
<Grid container spacing={2} alignItems="flex-start"sx={{display:'flex',flexDirection:{sm:'column',xs:'column',md:'row',lg:"row",xl:'row'}}}>
  {/* Left Column: Currency + Time + When To Go */}
  <Grid item xs={12} md={6} sx={{width:'45%',margin:'auto'}}>
    <Grid container spacing={3}>
      {/* Currency */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={0} sx={{ py: 3, px: 2, border: '1px solid #ddd', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">Currency</Typography>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>Japanese Yen (JPY)</Typography>
        </Paper>
      </Grid>

      {/* Time */}
      <Grid item xs={12} sm={6}>
        <Paper elevation={0} sx={{ py: 3, px: 2, border: '1px solid #ddd', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">Time Difference</Typography>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>London GMT + 9hr</Typography>
        </Paper>
      </Grid>
    </Grid>

    {/* When to go */}
    <Box mt={4}>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" color="text.secondary">
        <strong>When to go:</strong> Late spring (March to May) and late autumn (September to November).
      </Typography>
    </Box>
  </Grid>

  {/* Right Column: Image */}
  <Grid item xs={12} md={6} sx={{width:"50%",margin:'auto'}}>
    <Box
      component="img"
      src={pi1}
      alt="Japan View"
      sx={{
        width: '100%',
        height: { xs: 200, md: 300 },
        objectFit: 'cover',
        borderRadius: 2,
        boxShadow: 3,
      }}
    />
  </Grid>
</Grid>

  
    </Box>
  );
};

export default TravelTips;
