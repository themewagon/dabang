import { Button, Paper, Stack, Typography } from '@mui/material';
import TotalRevenueChart from './TotalRevenueChart';
import { useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import IconifyIcon from 'components/base/IconifyIcon';

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

  const renderToggleButton = (name: keyof typeof legend, color: string) => (
    <Button
      size="small"
      startIcon={<IconifyIcon icon="codicon:circle-filled" sx={{ color }} />}
      onClick={() => handleLegendToggle(name)}
      sx={{ opacity: legend[name] ? 0.5 : 1, p: 0 }}
      disableRipple
    >
      <Typography variant="button" color="#464E5F" whiteSpace="nowrap" alignSelf="center">
        {name}
      </Typography>
    </Button>
  );
  return (
    <Paper sx={{ pt: 3.25, px: 3.5, pb: 3.5 }}>
      <Typography variant="h4" mb={3.125}>
        Total Revenue
      </Typography>

      <TotalRevenueChart chartRef={chartRef} style={{ height: 200 }} />

      <Stack direction="row" justifyContent="center" gap={5} mt={3}>
        {renderToggleButton('Online Sales', '#0095FF')}
        {renderToggleButton('Offline Sales', '#00E096')}
      </Stack>
    </Paper>
  );
};

export default TotalRevenue;
