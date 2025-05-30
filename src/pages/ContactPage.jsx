import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Navbar from "../componants/Navbar";
import bgimg from "../img/planimg3.jpg"

export default function ContactPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
<>

          {/* Hero Section */}
          <Navbar/>
          <Box
            sx={{
              width: '100%',
              height: '85vh',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              backgroundBlendMode: 'darken',
              backgroundImage: `url(${bgimg})`,
          
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              color: 'white',
         
            }}
          >
            <Box sx={{ p: 14 }}>
           
              <Typography variant="h2" fontWeight="bold">
              Contact us
              </Typography>
            </Box>
    
            <Button
              variant="contained"
              onClick={() => alert('Planning your trip!')}
              sx={{
                position: 'fixed',
                opacity:'revert-layer',
                top: '50%',
                left: 35,
                transform: 'translateY(-50%) rotate(-90deg)',
                transformOrigin: 'left center',
                backgroundColor: '#D4A762',
                color:'#121212',
                color: 'white',
                px: 2,
                py: 1,
    
                fontWeight: 'bold',
                zIndex: 1000,
                '&:hover': {
                  backgroundColor: '#8c6845',
                },
              }}
            >
              Booking Now
            </Button>
          </Box>
        
        
       
    <Box px={{ xs: 2, md: 10 }} py={6} fontFamily="serif" bgcolor="#f9f7f4"sx={{display:'flex',flexDirection:'row'}}>
      <Grid
        container
        spacing={5}
        direction={isSmallScreen ? "column" : "row"}
        alignItems="stretch"
        sx={{display:'flex',flexDirection:'row'}}
      >
        {/* Left Side */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', width: '45%' }}>
      <Box my="auto">
        <Typography variant="h4" color="primary" gutterBottom>
          Bout India
        </Typography>
        <Typography variant="body1" paragraph>
          A boutique tour company offering completely customized, bespoke trips to India & southeast Asia.
        </Typography>

        {/* Phone Information */}
        <Box mb={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon style={{color:"#926F3F",fontSize:'40px'}}  sx={{ mr: 2 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Call / <span style={{ color: "green" }}>WhatsApp</span>
            </Typography>
            <Typography variant="h6">+91 85599-55333</Typography>
          </Box>
        </Box>

        {/* Email Information */}
        <Box mb={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon style={{color:"#926F3F",fontSize:'40px'}} sx={{ mr: 2 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Email Info
            </Typography>
            <Typography>info@boutindia.com</Typography>
          </Box>
        </Box>

        {/* INDIA Address */}
        <Box mb={2} sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <LocationOnIcon style={{color:"#926F3F",fontSize:'40px'}} sx={{ mr: 2, mt: '4px' }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              INDIA
            </Typography>
            <Typography>
              1st floor, 213 A, Lions Ln W, Panchyawala, Jaipur,<br />
              Rajasthan, India - 302034
            </Typography>
          </Box>
        </Box>

        {/* USA Address */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOnIcon style={{color:"#926F3F",fontSize:'40px'}} sx={{ mr: 2, mt: '4px' }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              USA
            </Typography>
            <Typography>
              16192, Coastal Hwy. Lewes, Delaware 19958
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6} sx={{display:'flex',flexDirection:'column',width:'50%' }}>
          <Paper
            elevation={3}
            sx={{ p: 4, borderRadius: 4, my: "auto", width: "100%" }}
          >
            <Typography variant="h5" color="primary" gutterBottom>
              Get in touch
            </Typography>
            <form>
              <Grid container spacing={2}sx={{display:'flex',flexDirection:'column'}}>
                <Grid item xs={12} >
                  <TextField sx={{width:'100%'}} label="Full Name"  required />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField label="Email" type="email" fullWidth required />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Phone Number" fullWidth required />
                </Grid>

            

                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{  backgroundColor: '#D4A762',
                   color: 'white', '&:hover': { backgroundColor: "#926f3f" } }}
                    size="large"
                    fullWidth
                  >
                    SEND MESSAGE
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}