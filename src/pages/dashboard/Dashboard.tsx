import { Grid } from '@mui/material';
import Sales from 'components/sections/dashboard/Sales';
import TotalRevenue from 'components/sections/dashboard/total-revenue/TotalRevenue';
import TopProducts from 'components/sections/dashboard/TopProducts';
import SalesMapping from 'components/sections/dashboard/sales-mapping/SalesMapping';
import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
import VolumeVsService from 'components/sections/dashboard/volume-vs-service/VolumeVsService';
import CustomerSatisfaction from 'components/sections/dashboard/customer-satisfaction/CustomerSatisfaction';

const Dashboard = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <Sales />
      </Grid>
      <Grid item xs={12} md={4}>
        <VisitorInsights />
      </Grid>

      <Grid item xs={12} md={6}>
        <TotalRevenue />
      </Grid>
      <Grid item xs={12} md={3}>
        <CustomerSatisfaction />
      </Grid>
      <Grid item xs={12}>
        Target Vs Reality
      </Grid>

      <Grid item xs={12} md={6}>
        <TopProducts />
      </Grid>
      <Grid item xs={12} md={3}>
        <SalesMapping />
      </Grid>
      <Grid item xs={12} md={3}>
        <VolumeVsService />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
