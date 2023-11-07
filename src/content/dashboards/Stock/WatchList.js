import {
  // Button,
  Box,
  // Card,
  Typography,
  // styled
} from '@mui/material';
import WatchListColumn from './WatchListColumn';
// import WatchListRow from './WatchListRow';

// const EmptyResultsWrapper = styled('img')(
//   ({ theme }) => `
//       max-width: 100%;
//       width: ${theme.spacing(66)};
//       height: ${theme.spacing(34)};
// `
// );

function WatchList() {


  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 10
        }}
      >
        <Typography variant="h3">Enhancing Stock Analysis with Transformer-Based Models: Unlocking New Insights with a Large Language Model</Typography>
     
      </Box>

      <WatchListColumn />

    </>
  );
}

export default WatchList;
