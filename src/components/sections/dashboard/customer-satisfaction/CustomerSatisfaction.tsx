import { Divider, Paper, Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import CustomerSatisfactionChart from './CustomerSatisfactionChart';
import Pin from 'components/icons/Pin';
import { CallbackDataParams } from 'echarts/types/dist/shared.js';
import { customerSatisfaction } from 'data/customer-satisfaction';
import LegendToggleButtonWithValue from 'components/common/LegendToggleButtonWithValue';

const CustomerSatisfaction = () => {
  const chartRef = useRef<EChartsReactCore | null>(null);

  const [lastMonth, setLastMonth] = useState<string>('');
  const [thisMonth, setThisMonth] = useState<string>('');
  const [legend, setLegend] = useState({
    'Last Month': false,
    'This Month': false,
  });

  useEffect(() => {
    if (chartRef.current) {
      const instance = chartRef.current.getEchartsInstance();

      const handleMouseOver = (params: CallbackDataParams) => {
        if (params.seriesIndex === 0) {
          setLastMonth(params?.value?.toString() || '');
        } else {
          setThisMonth(params?.value?.toString() || '');
        }
      };

      const handleMouseOut = (params: CallbackDataParams) => {
        if (params.seriesIndex === 0) {
          setLastMonth('');
        } else {
          setThisMonth('');
        }
      };

      instance.on('mouseover', handleMouseOver);
      instance.on('mouseout', handleMouseOut);

      // return () => {
      //   instance.off('mouseover', handleMouseOver);
      //   instance.off('mouseout', handleMouseOut);
      //   if (chartRef.current) {
      //     instance.dispose();
      //   }
      // };
    }
  }, []);

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
    <Paper sx={{ pt: 3, px: 1.375, pb: 2 }}>
      <Typography variant="h4" color="primary.dark" mb={3}>
        Customer Satisfaction
      </Typography>

      <CustomerSatisfactionChart
        chartRef={chartRef}
        data={customerSatisfaction}
        style={{ height: 190 }}
      />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem sx={{ height: 24 }} />}
        sx={{ borderTop: 1, borderColor: 'grey.A100', pt: 2 }}
        gap={2.5}
      >
        <LegendToggleButtonWithValue
          name="Last Month"
          svgIcon={Pin}
          color="info.main"
          value={lastMonth}
          currency={true}
          legend={legend}
          onHandleLegendToggle={handleLegendToggle}
        />
        <LegendToggleButtonWithValue
          name="This Month"
          svgIcon={Pin}
          color="success.dark"
          value={thisMonth}
          legend={legend}
          currency={true}
          onHandleLegendToggle={handleLegendToggle}
        />
      </Stack>
    </Paper>
  );
};

export default CustomerSatisfaction;
