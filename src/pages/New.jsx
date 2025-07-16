import React from 'react';
import { Button } from '@mui/material';

const RazorpayButton = () => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Failed to load Razorpay SDK.');
      return;
    }

    const options = {
      key: 'YOUR_KEY_ID', // ✅ Replace with your Razorpay key ID
      amount: 500 * 100, // amount in paise (500 INR)
      currency: 'INR',
      name: 'Luxury Tours',
      description: 'Test Payment',
      image: 'https://your-logo-url.com/logo.png', // optional
      handler: function (response) {
        alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
        console.log(response);
      },
      prefill: {
        name: 'Jinal',
        email: 'jinal@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Luxury Tours Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Button variant="contained" color="primary" onClick={handlePayment}>
      Pay Now
    </Button>
  );
};

export default RazorpayButton;
