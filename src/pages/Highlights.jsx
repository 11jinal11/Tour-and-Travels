import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import bghighlights from '../img/footer_earth_bg.jpg'


const exclusions = [
    "5% GST & 5% TCS will be applicable on total amount (PAN CARDS ARE MANDATORY)",
    "Visa Charges of Indonesia – 35 USD per person to be paid on arrival",
    "Any Extra Sightseeing Which Is Not Mentioned in The Itinerary",
    "Early check-in and late check-out",
    "Travel insurance in all kinds",
    "Personal expenses (Alcoholic Beverages, Soft Drinks, laundry, telephone, shopping etc.)",
    "Any additional expenses caused by reasons beyond our control such as natural calamities (typhoon, floods), flight delays, rescheduling/cancellations, any accidents, medical evacuations, riots, strikes etc.",
    "Anything which is not mentioned in the “Package Cost Includes”"
  ];

const Highlights = () => {
 

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/background.jpg')", // 🔁 Use your own image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
    
    

      {/* Content Container */}
      <Box
  sx={{
    minHeight: "100vh",
    backgroundImage: `url(${bghighlights})`, // Replace with your background
    backgroundSize: "cover",
    backgroundPosition: "center",
    p: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column", // Keep column direction for overall page structure
  }}
>
  {/* Main Content Box with two side-by-side sections */}
  <Box
    sx={{
      display: "flex",
      gap: 4,
      width: "100%",
      maxWidth: 1200,
      borderTop: "5px solid #D4A762",
      borderBottom: "3px solid #D4A762",
      bgcolor: "#ffffffee", // slight transparency
      p: 3,
      flexWrap: "wrap", // Allow wrapping on smaller screens
      backgroundColor: "transparent",
    }}
  >
    {/* Sightseeing Box */}
    <Paper
      elevation={2}
      variant="outlined"
      sx={{ borderLeft: '5px solid #D4A762',flex: 1, p: 3,  width: "50%" }} // Side-by-side with the other Paper
    >
      <Typography variant="h5" sx={{ color: "#003366", mb: 2 }}>
        Sightseeing Included
      </Typography>

      <Typography fontWeight="bold">KUTA</Typography>
      <List dense sx={{ pl: 2 }}>
        <ListItem>
          <ListItemText primary="Water Sports at Tanjung Benoa (Banana Boat, Jet Ski & Parasailing)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Visit to Uluwatu Temple during Sunset with Kecak Dance" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Trip to Nusa Penida Island by speed boat covering" />
        </ListItem>
        <List sx={{ pl: 4 }}>
          {["Kelingking Beach", "Angel’s Billabong", "Broken Beach", "Crystal Bay"].map((beach) => (
            <ListItem key={beach} sx={{ listStyleType: "circle", display: "list-item", pl: 2 }}>
              <ListItemText primary={beach} />
            </ListItem>
          ))}
        </List>
      </List>

      <Typography fontWeight="bold" mt={2}>
        Gili ISLAND
      </Typography>
      <List dense sx={{ pl: 2 }}>
        <ListItem>
          <ListItemText primary="Free Time for Snorkeling, Scuba Diving & other water sports activities at your own" />
        </ListItem>
      </List>

      <Typography fontWeight="bold" mt={2}>
        Ubud
      </Typography>
      <List dense sx={{ pl: 2 }}>
        {["Ulundanu Temple", "Handara Gate", "White Water River Rafting", "Swing at Alas Harum"].map(
          (spot) => (
            <ListItem key={spot}>
              <ListItemText primary={spot} />
            </ListItem>
          )
        )}
      </List>
    </Paper>

    {/* Package Includes Box (One Paper only) */}
    <Paper
      elevation={2}
      variant="outlined"
      sx={{borderLeft: '5px solid #D4A762', flex: 1, p: 3,width: "50%" }} // Side-by-side with the Sightseeing Paper
    >
      <Typography variant="h5" sx={{ color: "#003366", mb: 2 }}>
        Package Includes
      </Typography>
      <List dense sx={{ pl: 2 }}>
        {[
          "Return Economy Class Airfare and Taxes – Ex. Mumbai – Malindo Airlines – (No Service Flight)",
          "Meet and Greet at Airport by our representative",
          "Traditional Welcome by Garland",
          "4 Nights’ Accommodation with Breakfast at Kuta (4* Hotel/Resort)",
          "2 Night Accommodation with Breakfast at Gili Island (4* Hotel/Resort)",
          "2 Nights’ Accommodation with Breakfast at Ubud. (01 Bedroom Private Pool Villa) (4 Star Hotel/Resort)",
          "1 Local Lunch during Nusa Penida Tour",
          "All major sightseeing included as per the itinerary",
          "Alas Harum Swing with Entrance (3 Swings per Adult & 1 Swing per Children)",
          "Fast boat to Gili with Cidomo Cart Transfer",
          "Professional guide from Bali",
        ].map((item, i) => (
          <ListItem key={i}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      
    <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        //   padding: 4,
          backgroundColor: '#f8f9fd',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: 4,
           
           
            maxWidth: 600,
            width: '100%',
          }}
        >
          <Typography variant="h5" sx={{ color: '#002060', marginBottom: 2 }}>
            Package Excludes:
          </Typography>
          <List>
            {exclusions.map((item, index) => (
              <ListItem key={index} sx={{ paddingLeft: 0, paddingY: 0.5 }}>
                <ListItemText primary={`• ${item}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
    </Paper>
  </Box>
  

 
</Box>  
    </Box>
  );
};

export default Highlights;
