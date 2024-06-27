import { Grid } from '@mui/material';
import Sales from 'components/sections/dashboard/Sales';
import TotalRevenue from 'components/sections/dashboard/total-revenue/TotalRevenue';
import TopProducts from 'components/sections/dashboard/TopProducts';
import SalesMapping from 'components/sections/dashboard/sales-mapping/SalesMapping';

const Dashboard = () => {
  return (
    <Grid container rowGap={4}>
      <Grid item xs={12} md={8}>
        <Sales />
      </Grid>
      <Grid item xs={12}>
        Visior Insights
      </Grid>

      <Grid item xs={12} md={6}>
        <TotalRevenue />
      </Grid>
      <Grid item xs={12}>
        Customer Satisfaction
      </Grid>
      <Grid item xs={12}>
        Target Vs Reality
      </Grid>

      <Grid item xs={12} md={6}>
        <TopProducts />
      </Grid>
      <Grid item xs={12} md={4}>
        <SalesMapping />
      </Grid>
      <Grid item xs={12}>
        Volume vs Service Level
      </Grid>
    </Grid>
  );
};

export default Dashboard;
