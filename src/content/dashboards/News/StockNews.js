import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    MenuItem,
    Select,
    Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const StockNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectedTicker, setSelectedTicker] = useState('AZN'); // Default ticker symbol

  const handleTickerChange = (event) => {
    setSelectedTicker(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
        `https://stocknewsapi.com/api/v1?tickers-only=${selectedTicker}&items=3&page=1&token=vpzwe9wwi5pmxledpe7ymhhpf2vsygyczzds6beh`
        );
        setNewsData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedTicker]);

  return (
    <Container>
      <Select
        label="Select Ticker"
        value={selectedTicker}
        onChange={handleTickerChange}
        style={{ marginBottom: '20px' }}
          sx={{
            width: '200px', // Adjust the width
            backgroundColor: 'white', // Change the background color
            borderRadius: '5px', // Add rounded corners
          }}
      >
        <MenuItem value="AZN">AZN - AstraZeneca plc</MenuItem>
        <MenuItem value="AMZN">AMZN - Amazon</MenuItem>
        <MenuItem value="GOOGL">GOOGL - Google</MenuItem>
      </Select>

      <Grid container spacing={2}>
        {newsData.map((news, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt="News Image"
                height="200"
                image={news.image_url}
              />
              <CardContent>
                <Typography variant="h6">{news.title}</Typography>
                <Typography variant="body2">{news.text}</Typography>
                <Typography variant="caption">
                  Source: {news.source_name} - {new Date(news.date).toDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StockNews;
