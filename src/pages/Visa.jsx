import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const Visa = () => {
  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Box>
        <Typography sx={{ lineHeight: 1.8 }}>
          Indonesia provides visa on arrival facilities to Indian Nationals. The on-arrival visa fee is <strong>35 USD per person</strong> and must be paid directly by the guest at the airport.
          <br /><br />
          Ensure your <strong>original passport</strong> has a minimum validity of <strong>6 months</strong> from your return date, with at least <strong>three unused/blank visa pages</strong>.
          If applicable, please attach your old passport as well.
        </Typography>
      </Box>
    </Container>
  );
};

export default Visa;
