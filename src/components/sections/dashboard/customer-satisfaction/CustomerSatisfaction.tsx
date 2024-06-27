import { Button, Divider, Paper, Stack, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import CustomerSatisfactionChart from './CustomerSatisfactionChart';
import Pin from 'components/icons/Pin';

const CustomerSatisfaction = () => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  const [legend, setLegend] = useState({
    'Last Month': false,
    'This Month': false,
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
      startIcon={<Pin sx={{ color: color }} />}
      onClick={() => handleLegendToggle(name)}
      sx={{ opacity: legend[name] ? 0.5 : 1 }}
      disableRipple
    >
      <Typography variant="button" color="#464E5F" whiteSpace="nowrap" alignSelf="center">
        {name}
      </Typography>
    </Button>
  );

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" color="primary.dark" mb={3}>
        Customer Satisfaction
      </Typography>

      <CustomerSatisfactionChart chartRef={chartRef} />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ borderTop: 1, borderColor: '#EDF2F6', pt: 2 }}
        gap={2.5}
      >
        {renderToggleButton('Last Month', '#0095FF')}
        {renderToggleButton('This Month', '#07E098')}
      </Stack>
    </Paper>
  );
};

export default CustomerSatisfaction;
