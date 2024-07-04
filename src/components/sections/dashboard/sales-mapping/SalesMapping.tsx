import { useRef } from 'react';
import { Paper, Typography } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import SalesMappingChart from './SalesMappingChart';
import { getSalesMappingData } from 'data/sales-mapping-data';

const SalesMapping = () => {
  const salesMappingChartRef = useRef<null | EChartsReactCore>(null);
  const salesMappingData = getSalesMappingData();

  return (
    <Paper sx={{ py: 3, px: 3 }}>
      <Typography variant="h4" color="primary.dark" mb={1.375}>
        Sales Mapping by Country
      </Typography>

      <SalesMappingChart
        salesMappingChartRef={salesMappingChartRef}
        data={salesMappingData}
        style={{ height: 260 }}
      />
    </Paper>
  );
};

export default SalesMapping;
