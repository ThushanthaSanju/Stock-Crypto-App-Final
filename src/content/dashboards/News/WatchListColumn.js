import React, { useState } from 'react';
import {
  Card,
  Typography,
  Grid,
  Button,
  CircularProgress,
  TextField
} from '@mui/material';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:5000';

function WatchListColumn() {
  const [tickerInput, setTickerInput] = useState(''); // State to store the entered ticker
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/get_prediction', {
        input_text: tickerInput
      });
      setPrediction(response.data);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      <Card sx={{ width: '85%', marginLeft: 5 }}>
        <Grid p={4}>
          <h1>Paste the Stock News Here</h1>
          <Grid container spacing={2} md={10}>
            <Grid item md={6}>
              <TextField
                label="Stock News"
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Paste the Stock News Here"
                value={tickerInput}
                onChange={(e) => setTickerInput(e.target.value)}
                fullWidth  
              />
            </Grid>
            <Grid item md={6}>
              <Button onClick={handlePredict}>
               Generate Investment Recommendations
              </Button>
            </Grid>
          </Grid>

          {loading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                zIndex: 9999
              }}
            >
              <CircularProgress />
            </div>
          ) : (
           
            <Typography mt={5}variant="subtitle2">
              Generated Investment Recommendation: {prediction}
            </Typography>
          )}
        </Grid>
      </Card>
    </Grid>
  );
}

export default WatchListColumn;
