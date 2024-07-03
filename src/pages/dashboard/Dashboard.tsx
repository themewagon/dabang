import { Grid } from '@mui/material';
import Sales from 'components/sections/dashboard/todays-sales/Sales';
import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
import TotalRevenue from 'components/sections/dashboard/total-revenue/TotalRevenue';
import CustomerSatisfaction from 'components/sections/dashboard/customer-satisfaction/CustomerSatisfaction';
import TargetVsReality from 'components/sections/dashboard/target-vs-reality/TargetVsReality';
import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
import SalesMapping from 'components/sections/dashboard/sales-mapping/SalesMapping';
import VolumeVsService from 'components/sections/dashboard/volume-vs-service/VolumeVsService';

const Dashboard = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} xl={7}>
        <Sales />
      </Grid>
      <Grid item xs={12} xl={5}>
        <VisitorInsights />
      </Grid>

      <Grid item xs={12} xl={6}>
        <TotalRevenue />
      </Grid>
      <Grid item xs={12} xl={3}>
        <CustomerSatisfaction />
      </Grid>
      <Grid item xs={12} xl={3}>
        <TargetVsReality />
      </Grid>

      <Grid item xs={12} xl={6}>
        <TopProducts />
      </Grid>
      <Grid item xs={12} xl={3}>
        <SalesMapping />
      </Grid>
      <Grid item xs={12} xl={3}>
        <VolumeVsService />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
