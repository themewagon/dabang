import { Typography, Grid, Paper, Stack, Button } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { sales } from 'data/sales';
import SaleCard from './SaleCard';

const Sales = () => {
  return (
    <Paper sx={(theme) => ({ border: `1px solid ${theme.palette.grey[200]}`, p: 3 })}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <div>
          <Typography variant="h4" gutterBottom>
            Today's Sales
          </Typography>
          <Typography variant="subtitle1" color="primary.lighter" gutterBottom>
            Sales Summary
          </Typography>
        </div>
        <Button variant="outlined" startIcon={<IconifyIcon icon="solar:upload-linear" />}>
          Export
        </Button>
      </Stack>

      <Grid container spacing={4}>
        {sales.map((item) => (
          <SaleCard item={item} />
        ))}
      </Grid>
    </Paper>
  );
};

export default Sales;
