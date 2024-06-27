import { Grid } from '@mui/material';
import Sales from 'components/sections/dashboard/Sales';
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

      <Grid item xs={12}>
        Total Revenue
      </Grid>
      <Grid item xs={12}>
        Customer Satisfaction
      </Grid>
      <Grid item xs={12}>
        Target Vs Reality
      </Grid>

      <Grid item xs={12}>
        Top Products
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
