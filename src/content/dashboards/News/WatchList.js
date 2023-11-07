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
          pb: 3
        }}
      >
        <Typography variant="h3">Sentiment Based Stock News Analyzer</Typography>
     
      </Box>

      <WatchListColumn />


      {/* {!tabs && (
        <Card
          sx={{
            textAlign: 'center',
            p: 3
          }}
        >
          <EmptyResultsWrapper src="/static/images/placeholders/illustrations/1.svg" />

          <Typography
            align="center"
            variant="h2"
            fontWeight="normal"
            color="text.secondary"
            sx={{
              mt: 3
            }}
            gutterBottom
          >
            Click something, anything!
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4
            }}
          >
            Maybe, a button?
          </Button>
        </Card>
      )} */}
    </>
  );
}

export default WatchList;
