import React, { useState } from 'react';
import {  Button, Container, Grid, Typography, styled, TextField } from '@mui/material';
import { useNavigate  } from 'react-router-dom';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);



function Hero() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignIn = () => {
    if (email === 'thushanthasanju8@gmail.com' && password === '123456') {
    //  alert('Sign-in successful'); // You can replace this with your authentication logic
      navigate('/dashboards/stock');
    } else {
      alert('Invalid email or password'); // You can handle authentication failures here
    }
  };

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Sign In
          </TypographyH1>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            sx={{ mb: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            size="large"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;

