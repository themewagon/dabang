import { Button, Paper, Stack, Typography } from '@mui/material';
import TotalRevenueChart from './TotalRevenueChart';
import { useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import IconifyIcon from 'components/base/IconifyIcon';

const TotalRevenueLegendToggleButton = ({
  name,
  color,
  legend,
  handleLegendToggle,
}: {
  name: keyof typeof legend;
  color: string;
  legend: { [key: string]: boolean };
  handleLegendToggle: (name: keyof typeof legend) => void;
}) => {
  return (
    <Button
      size="small"
      startIcon={<IconifyIcon icon="codicon:circle-filled" sx={{ color }} />}
      onClick={() => handleLegendToggle(name)}
      sx={{ opacity: legend[name] ? 0.5 : 1 }}
      disableRipple
    >
      <Typography variant="button" color="#464E5F" whiteSpace="nowrap" alignSelf="end">
        {name}
      </Typography>
    </Button>
  );
};

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

      <TotalRevenueChart chartRef={chartRef} style={{ height: 190 }} />

      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="center" gap={1} mt={3} px={3}>
        <TotalRevenueLegendToggleButton
          name="Online Sales"
          color="#0095FF"
          legend={legend}
          handleLegendToggle={handleLegendToggle}
        />
        <TotalRevenueLegendToggleButton
          name="Offline Sales"
          color="#00E096"
          legend={legend}
          handleLegendToggle={handleLegendToggle}
        />
      </Stack>
    </Paper>
  );
};

export default TotalRevenue;
