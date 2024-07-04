import { Typography, Grid, Paper, Stack, Button } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { sales } from 'data/sales';
import SaleCard from './SaleCard';

const Sales = () => {
  return (
    <Paper sx={{ pt: 2.875, pb: 4, px: 4 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={5.375}>
        <div>
          <Typography variant="h4" mb={0.5}>
            Today's Sales
          </Typography>
          <Typography variant="subtitle1" color="primary.lighter">
            Sales Summary
          </Typography>
        </div>
        <Button variant="outlined" startIcon={<IconifyIcon icon="solar:upload-linear" />}>
          Export
        </Button>
      </Stack>

      <Grid container spacing={4}>
        {sales.map((item) => (
          <SaleCard key={item.label} item={item} />
        ))}
      </Grid>
    </Paper>
  );
};

export default Sales;
