import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import bghighlights from '../img/footer_earth_bg.jpg';
import axios from "axios";
import DestinationPage from "./DestinationPage";

const Highlights = () => {
  const [list, setList] = useState([]);
  const token = 'qMOWm3sCXpZ3W8zM';

   const destinationData2 = localStorage.getItem('destinationId')
  console.log("destinationData2 ==> ",destinationData2);

  useEffect(() => {
    dataView();
  }, []);

  const dataView = () => {
    axios
      .get('https://generateapi.onrender.com/api/Highlights', {
        headers: { Authorization: token },
      })
      .then((res) => {
          
     setList(res.data.Data.filter(
        item => item.destinationId === destinationData2 || item.destinationId?._id === destinationData2
      ));
      })
      .catch(console.error);
  };

  return (
    <>
      <DestinationPage>
        <Box
          sx={{
            minHeight: "100vh",
            backgroundImage: `url(${bghighlights})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 4,
              width: "100%",
              maxWidth: 1200,
              borderTop: "5px solid #D4A762",
              borderBottom: "3px solid #D4A762",
              bgcolor: "#ffffffee",
              p: 3,
              flexWrap: "wrap",
            }}
          >
            {list.map((highlight, index) => (
              <React.Fragment key={index}>
                {/* Sightseeing Included */}
                <Paper
                  elevation={2}
                  variant="outlined"
                  sx={{
                    borderLeft: '5px solid #D4A762',
                    flex: 1,
                    p: 3,
                    width: "50%",
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#003366", mb: 2 }}>
                    Sightseeing Included
                  </Typography>

                  <Typography fontWeight="" sx={{ whiteSpace: 'pre-line' }}>
                           {highlight.sightseeingIncluded.split(',').map((item, i) => (
          <div key={i}>• {item.trim()}</div> ))}
       
</Typography>

                </Paper>

                {/* Package Includes & Excludes */}
                <Paper
                  elevation={2}
                  variant="outlined"
                  sx={{
                    borderLeft: '5px solid #D4A762',
                    flex: 1,
                    p: 3,
                    width: "50%",
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#003366", mb: 2 }}>
                    Package Includes
                  </Typography>
                  <List dense sx={{ pl: 2 }}>
                    • Return economy class airfare & taxes ex. Mumbai<br/>
• 8 nights stay at 4-star hotels with continental <br/>
• 8 breakfasts, 8 vegetarian lunches & 8 Indian Jain/veg/non-veg dinners<br/>
• Normal visa charges for Japan<br/>
• Services of a caring Indian Tour Manager if 25 passengers or more<br/>
• English-speaking guide from arrival till departure<br/>
• Bullet train fare: Hiroshima to Tokyo (normal class)<br/>
• 1 x 500ml water bottle per day<br/>
• Driver & guide tips<br/>
                  </List>

                  <Box
                    sx={{
                      backgroundColor: '#fff',
                      padding: 4,
                      mt: 4,
                      border: '1px solid #eee',
                    }}
                  >
                    <Typography variant="h5" sx={{ color: '#002060', marginBottom: 2 }}>
                      Package Excludes:
                    </Typography>
                    <List>
                      {/* {highlight.packageExcludes} */}

                      • 5% GST & 5% TCS applicable on total amount (PAN cards are mandatory)<br/>
• Any extra sightseeing not mentioned in the itinerary<br/>
• Early check-in and late check-out<br/>
• Travel insurance of any kind<br/>
• Personal expenses (alcoholic beverages, soft drinks, laundry, telephone, shopping, etc.)<br/>
• Any additional expenses caused by reasons beyond our control, such as natural calamities (typhoons, floods), flight delays, rescheduling/cancellations, accidents, medical evacuations, riots, strikes, etc.<br/>
• Anything not mentioned in the Package Includes section<br/>


                    </List>
                  </Box>
                </Paper>
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </DestinationPage>
    </>
  );
};

export default Highlights;
