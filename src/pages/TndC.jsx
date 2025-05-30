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

const TndC = () => {
  return (
    <>
   <Box
  sx={{
    minHeight: "100vh",
    backgroundImage: `url(${bghighlights})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    p: { xs: 2, md: 4 }, // Responsive padding
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" }, // Responsive direction
      gap: 4,
      width: "100%",
      maxWidth: 1200,
      borderTop: "5px solid #D4A762",
      borderBottom: "3px solid #D4A762",
      bgcolor: "#ffffffee",
      p: { xs: 2, md: 3 },
      flexWrap: "wrap",
      background:'transparent'
    }}
  >
    {/* Remarks Section */}
    <Paper
      elevation={2}
      variant="outlined"
      sx={{
        borderLeft: '5px solid #D4A762',
        flex: 1,
        p: { xs: 2, md: 3 },
        width: { xs: '100%', md: '50%' },
      }}
    >
      <Typography variant="h5" sx={{ color: "#003366", mb: 2 }}>
        REMARKS
      </Typography>
      <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
        <li>Rates are same for Double (2 Adults in 1 Room) & Triple (3 Adults in 1 Room) as given in tour cost.</li>
        <li>Similar Hotels will be provided in case of non-availability of above-mentioned hotels.</li>
        <li>Only continental breakfast will be provided by hotel which does not include Indian/Jain Items.</li>
        <li>Porter service is chargeable which is not included and has to be paid directly to the porter.</li>
        <li>Rooms on same floor and next to each other is not guaranteed.</li>
        <li>Hotels provide Twin/Double rooms as per availability at time of check in.</li>
        <li>Maximum waiting time is 10 minutes, if anyone is late, will join group at the next spot at own.</li>
      </ul>
    </Paper>

    {/* Right Section */}
    <Box sx={{ flex: 1, width: { xs: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Paper
        elevation={2}
        variant="outlined"
        sx={{
          borderLeft: '5px solid #D4A762',
          p: { xs: 2, md: 3 },
        }}
      >
        <Typography variant="h5" sx={{ color: "#003366", mb: 2 }}>
          CANCELLATION POLICY
        </Typography>
        <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
          <li>Deposit of 150000 Rs. per person which is Non-Refundable in any case.</li>
          <li>90 – 60 Days: 50% of tour cost or deposit whichever is Higher.</li>
          <li>59 – 30 Days: 75% of tour cost.</li>
          <li>29 Day and Under – 100% tour cost will be Non-Refundable.</li>
        </ul>
      </Paper>

      <Paper
        elevation={2}
        variant="outlined"
        sx={{
          borderLeft: '5px solid #D4A762',
          p: { xs: 2, md: 3 },
        }}
      >
        <Typography variant="h5" sx={{ color: "#003366", mb: 2 }}>
          TERMS & CONDITIONS
        </Typography>
        <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
          <li>Airlines are controlled by DGCA under its policies.</li>
          <li>In case of Bankruptcy by an airline, rules governed by NCLT apply.</li>
          <li>If passenger cancels the trip, policy charges apply.</li>
          <li>Rates & Offers are Dynamic and it cannot be same for all the passengers travelling in same group.</li>
        <li>Original Passport with minimum validity of 06 months at the time returning from the tour with at least three unused/blank visa pages (please attach old passport if you have).</li>
        <li>It will be client’s responsibility to check the validity of your passports, if children travelling together parents will have to check the validity of their children’s passports. SKYLINE INTERNATIONAL will not be responsible at all if passenger is not able to travel due to passport validity expiry.</li>
        <li>We do not have refund policy, we give credit notes only if the booking is cancelled by the passengers.</li>
        <li>Under exceptional circumstances (breakdowns, delays due to traffic problems, weather problems, strikes, sports and religious events, congresses, sanitary precautions and protocols or other complex situations), Skyline Holidays reserves the right to modify the sites visited, the order of the visits on certain days or the stages of the itineraries</li>
        <li>In case of cancellation before 45 days you would be provided credit note which can be utilized in any international tour within the span of 6 months by the same person only in tour package.</li>
        <li>In case of cancellation within 45 days you would be provided credit note which can be utilized in same international tour within the span of 6 months by the same person only in tour package.</li>
     <li>Flight cost and availability are subject to change at time of actual booking.
     We reserve the right to amend, alter, vary or withdraw any particular departure, excursion advertised.</li>
     
     <li>All the travelers must clear all their payments 30 days prior to their tour departure failing to which company has the right to cancel their booking without notice.</li>
     <li>There will not be porter facility (luggage hand ling) throughout the tour. The passengers have to handle their own luggage. It’s an individual’s responsibility to take care of own luggage.</li>
       <li>All travelers have to carry their own passports, tickets, forex & any other important documents. It is recommended to leave passport photocopy at your resident, & carry one copy while travelling.</li>
       <li>Passengers having excess baggage over 20 Kgs per person in check in baggage & 07 Kgs in hand luggage are liable to pay excess baggage charge directly at airport.</li>
       <li>Skyline International holds no responsibility for any loss of luggage, injuries or death or theft during the tour. We arrange services like airline, visas, hotels, sightseeing, meals, etc. on behalf of its clients.</li>
        </ul>
      </Paper>
    </Box>
  </Box>
</Box>

    
    </>
  )
}

export default TndC
