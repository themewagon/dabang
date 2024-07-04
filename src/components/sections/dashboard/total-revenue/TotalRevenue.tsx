import { Paper, Stack, Typography } from '@mui/material';
import TotalRevenueChart from './TotalRevenueChart';
import { useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { totalRevenue } from 'data/total-revenue';
import LegendToggleButton from 'components/common/LegendToggleButton';

const TotalRevenue = () => {
  const chartRef = useRef<EChartsReactCore | null>(null);

  const [legend, setLegend] = useState({
    'Online Sales': false,
    'Offline Sales': false,
  });

  const handleLegendToggle = (name: keyof typeof legend) => {
    setLegend((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));

    if (chartRef.current) {
      const instance = chartRef.current.getEchartsInstance();
      instance.dispatchAction({
        type: 'legendToggleSelect',
        name: name,
      });
    }
  };

  return (
    <Paper sx={{ pt: 3.125, px: 3.5, pb: 3.5 }}>
      <Typography variant="h4" mb={3}>
        Total Revenue
      </Typography>

      <TotalRevenueChart chartRef={chartRef} data={totalRevenue} style={{ height: 190 }} />

      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="center" gap={1} mt={3} px={3}>
        <LegendToggleButton
          name="Online Sales"
          icon="codicon:circle-filled"
          color="info.main"
          legend={legend}
          onHandleLegendToggle={handleLegendToggle}
        />
        <LegendToggleButton
          name="Offline Sales"
          icon="codicon:circle-filled"
          color="success.main"
          legend={legend}
          onHandleLegendToggle={handleLegendToggle}
        />
      </Stack>
    </Paper>
  );
};

export default TotalRevenue;
