import {
  // Button,
  Box,
  Card,
  // Card,
  Typography
} from '@mui/material';
import StockNews from './StockNews';
import WatchListColumn from './WatchListColumn';


function WatchList() {


  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3" sx={{ fontSize: '24px', marginBottom: '10px' }}>Sentiment Based Stock News Analyzer</Typography>
     
      </Box>
      
      <WatchListColumn />

      <Box sx={{ my: 2 }}>
        <Card>
          <Typography variant="h6" marginLeft={3} sx={{ fontSize: '18px', color: 'darkgray', marginBottom: '10px' }}>Select Stock Ticker</Typography>
          <StockNews />
        </Card>
      </Box>
    </>
  );
}

export default WatchList;