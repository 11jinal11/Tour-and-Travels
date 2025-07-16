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
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DestinationPage from './DestinationPage';

const TravelTips = () => {
  const [tipsList, setTipsList] = useState([]);
  const token = 'qMOWm3sCXpZ3W8zM';

   const destinationData2 = localStorage.getItem('destinationId')
  console.log("destinationData2 ==> ",destinationData2);

  useEffect(() => { 
    fetchTipsData();
  }, []);

  const fetchTipsData = () => {
    axios
      .get('https://generateapi.onrender.com/api/tiPS', {
        headers: { Authorization: token },
      })
      .then((res) => setTipsList(res.data.Data.filter(
        item => item.destinationid._id === destinationData2   
      )))
      .catch(console.error);
  };

  return (
    <DestinationPage>

    
    <Box sx={{ px: { xs: 2, md: 8 }, py: 8, bgcolor: '#fff' }}>
      {tipsList.map((tip, index) => (
        <Box key={index}>
          {/* Heading */}
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 500 }}>
            {tip.destinationid.destination || 'Unknown Destination'}
          </Typography>

          {/* Seasons Grid */}
          <Grid container spacing={4} justifyContent="center" mb={6}>
            {[
              {
                label: 'SPRING',
                icon: <WbSunnyIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
                months: 'MAR–MAY',
                temp: tip.springTemp  || 'TempN/A',
              },
              {
                label: 'SUMMER',
                icon: <ThunderstormIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
                months: 'JUN–AUG',
                temp: tip.summarTemp || 'N/A',
              },
              {
                label: 'AUTUMN',
                icon: <FilterDramaIcon sx={{ fontSize: 40, color: '#FFA726' }} />,
                months: 'SEPT–NOV',
                temp: tip.autumnTemp || 'N/A',
              },
              {
                label: 'WINTER',
                icon: <AcUnitIcon sx={{ fontSize: 40, color: '#90CAF9' }} />,
                months: 'DEC–FEB',
                temp: tip.winterTemp || 'N/A',
              },
            ].map((season, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
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

          {/* Currency, Time, When To Go, Image */}
          <Grid container spacing={2} alignItems="flex-start"
            sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}
          >
            {/* Info */}
            <Grid item xs={12} md={6} sx={{ width: '45%', margin: 'auto' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={0} sx={{ py: 3, px: 2, border: '1px solid #ddd', textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">Currency</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{tip.currency}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={0} sx={{ py: 3, px: 2, border: '1px solid #ddd', textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">Time Difference</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>{tip.timeDifference}</Typography>
                  </Paper>
                </Grid>
              </Grid>

              <Box mt={4}>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1" color="text.secondary">
                  <strong>When to go:</strong> {tip.bestTimetoVisit}
                </Typography>
              </Box>
            </Grid>

            {/* Image */}
            <Grid item xs={12} md={6} sx={{ width: "50%", margin: 'auto' }}>
              <Box
                component="img"
               src={tip.image}

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
      ))}
    </Box>
    </DestinationPage>
  );
};

export default TravelTips;


