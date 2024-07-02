import { Button, Paper, Stack, Typography } from '@mui/material';
import VisitorInsightsChart from './VisitorInsightsChart';
import { useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import IconifyIcon from 'components/base/IconifyIcon';

const VisitorInsightsLegendToggleButton = ({
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
    <Stack>
      <Button
        size="small"
        startIcon={<IconifyIcon icon="ic:round-square" sx={{ color }} />}
        onClick={() => handleLegendToggle(name)}
        sx={{ opacity: legend[name] ? 0.5 : 1 }}
        disableRipple
      >
        <Typography variant="button" color="#464E5F" whiteSpace="nowrap" alignSelf="center">
          {name}
        </Typography>
      </Button>
    </Stack>
  );
};

const VisitorInsights = () => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  const [legend, setLegend] = useState({
    'Loyal Customers': false,
    'New Customers': false,
    'Unique Customers': false,
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
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" color="primary.dark" mb={4}>
        Visitor Insights
      </Typography>

      <VisitorInsightsChart chartRef={chartRef} style={{ height: 176 }} />

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'flex-start' }}
        mt={4}
        px={3}
        gap={1}
      >
        <VisitorInsightsLegendToggleButton
          name="Loyal Customers"
          color="#A700FF"
          legend={legend}
          handleLegendToggle={handleLegendToggle}
        />
        <VisitorInsightsLegendToggleButton
          name="New Customers"
          color="#EF4444"
          legend={legend}
          handleLegendToggle={handleLegendToggle}
        />
        <VisitorInsightsLegendToggleButton
          name="Unique Customers"
          color="#3CD856"
          legend={legend}
          handleLegendToggle={handleLegendToggle}
        />
      </Stack>
    </Paper>
  );
};

export default VisitorInsights;
