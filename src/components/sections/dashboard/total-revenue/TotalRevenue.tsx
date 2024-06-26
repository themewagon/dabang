import { Paper, Typography } from '@mui/material';
import TotalRevenueChart from './TotalRevenueChart';

const TotalRevenue = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>
        Total Revenue
      </Typography>
      <TotalRevenueChart />
    </Paper>
  );
};

export default TotalRevenue;
