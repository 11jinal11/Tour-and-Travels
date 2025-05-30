import React from 'react';

import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ContentCutIcon sx={{ fontSize: 40, color: '#D4A762' }} />,
      title: '100% Tailor Made',
      points: [
        '•       Your entire holiday is designed as per your requirements.',
        '•       Explore your interests at your own speed.',
        '•       Select your preferred style of stay.',
        '•       Plan your perfect trip with the help of our destination experts.',
      ],
    },
    {
      icon: <PersonIcon sx={{ fontSize: 40, color: '#D4A762' }} />,
      title: 'Expert Knowledge',
      points: [
        '•       Our destination experts have travelled extensively or are natives of their respective regions.',
        ' •        The same expert will handle your trip from start to finish.',
        '•       Their knowledge helps you get the best out of your time and budget.',
      ],
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40, color: '#D4A762' }} />,
      title: 'The Best Guides',
      points: [
        '•       We hand-pick our guides through thorough reference and background checks.',
        '•       Offering more than just dates and names—they provide real insight into their region.',
        '•       Guides are available in multiple languages of your choice.',
      ],
    },
    {
      icon: <StarIcon sx={{ fontSize: 40, color: '#D4A762' }} />,
      title: 'Trusted Service',
      points: [
        '•       24×7 emergency support.',
        '•       No middlemen involved.',
        '•       Trusted by customers in over 50 countries.',
      ],
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#111', color: '#fff', py: 8, px: 2 }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto', textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: '40px' }} gutterBottom>
          Why Us
        </Typography>
        <Typography variant="h6" sx={{ color: '#D4A762' }}>
          Because We Care!
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card sx={{ backgroundColor: '#1e1e1e', height: '80%', p: 2 }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  {feature.icon}
                  <Typography variant="h6" sx={{ color: '#E2E2E2', ml: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                </Box>
                {feature.points.map((point, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    sx={{ color: '#B9B9B9', lineHeight: 2, mb: 1 }}
                  >
                    {point}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
