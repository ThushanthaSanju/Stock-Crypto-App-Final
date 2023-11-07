import React, { useState } from 'react';
import {
  Card,
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
  CircularProgress,
  Paper
} from '@mui/material';
import axios from 'axios';
import StockChart from './StockChart ';

axios.defaults.baseURL = 'http://127.0.0.1:5000';

function WatchListColumn() {
  const [selectedTicker, setSelectedTicker] = useState(''); // State to store the selected ticker
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
   const [show, setShow] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/predict', {
        companyTicker: selectedTicker
      });
      setPrediction(response.data);
      setShow(true)
    } catch (error) {
      console.error('Error fetching prediction:', error);
    } finally {
      setLoading(false);
    }
  };

  // Define a list of ticker options
  const tickerOptions = ['GOOG', 'AAPL', 'TSLA', 'IBM'];
  const imageSources = [
    '/static/images/company/1.jpg',
    '/static/images/company/2.jpg',
    '/static/images/company/3.jpg',
    '/static/images/company/4.png'
  ];
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item md={12} xs={12} mb={5}>
        <Paper>
          <Grid container spacing={2}>
            {imageSources.map((imageSource, index) => (
              <Grid item xs={6} md={3} key={index}>
                <>
                  <img
                    src={imageSource}
                    height={150}
                    alt={`Company ${index + 1}`}
                    style={{ width: '100%' }}
                  />
                </>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
      <Card sx={{ width: '85%', marginLeft: 5 }}>
        <Grid p={4}>
          <h1>Enter Stock Ticker Symbol</h1>
          <Grid>
            <Grid container spacing={2} md={12}>
              <Grid item md={6}>
                <Select
                  value={selectedTicker}
                  onChange={(e) => setSelectedTicker(e.target.value)}
                  sx={{ width: '100%' }}
                >
                  {tickerOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      <b>{option}</b>
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item md={6}>
                <Button
                  variant="outlined"
                  sx={{ width: '100%', height: '105%' }}
                  onClick={handlePredict}
                >
                  Fetch Financial Recommendations
                </Button>
              </Grid>
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
            <Typography variant="subtitle1" mt={3} sx={{ textAlign: 'center' }}>
              <b>Predicted Financial Advice Will Appear Here:</b> {prediction}
            </Typography>
          )}
        </Grid>
      </Card>

      <Grid item md={12} xs={12}>
        {show?<Card>
            <Typography variant="h4" mt={3} mb={3} sx={{ textAlign: 'center' }}>
              <b>Stock datails of the selected stock ticker : {selectedTicker}</b> 
            </Typography>
          <StockChart ticker={selectedTicker} />
        </Card>:<></>}
        
      </Grid>
    </Grid>
  );
}

export default WatchListColumn;
