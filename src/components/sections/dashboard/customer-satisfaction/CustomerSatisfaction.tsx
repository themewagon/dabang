import { Button, Divider, Paper, Stack, SvgIconProps, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import CustomerSatisfactionChart from './CustomerSatisfactionChart';
import Pin from 'components/icons/Pin';
import { CallbackDataParams } from 'echarts/types/dist/shared.js';
import IconifyIcon from 'components/base/IconifyIcon';
import { numberFormat } from 'helpers/utils';

const CustomerLegendToggleButton = ({
  name,
  color,
  legend,
  icon,
  svgIcon: SvgIcon,
  value,
  handleLegendToggle,
}: {
  name: keyof typeof legend;
  color: string;
  value: string;
  legend: { [key: string]: boolean };
  icon?: string;
  svgIcon?: (props: SvgIconProps) => JSX.Element;
  handleLegendToggle: (name: keyof typeof legend) => void;
}) => {
  const Icon = icon ? (
    <IconifyIcon icon={icon} sx={{ color }} />
  ) : SvgIcon ? (
    <SvgIcon sx={{ color: color }} />
  ) : null;

  return (
    <Stack>
      <Button
        size="small"
        startIcon={Icon}
        onClick={() => handleLegendToggle(name)}
        sx={{ opacity: legend[name] ? 0.5 : 1 }}
        disableRipple
      >
        <Typography variant="button" color="#464E5F" whiteSpace="nowrap" alignSelf="end">
          {name}
        </Typography>
      </Button>
      <Typography variant="subtitle2" sx={{ height: 20, ml: 4, fontWeight: 'fontWeightMedium' }}>
        {value && `$${numberFormat(+value)}`}
      </Typography>
    </Stack>
  );
};

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
          // setVolume(params?.value!.toString());
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

      <CustomerSatisfactionChart chartRef={chartRef} style={{ height: 190 }} />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem sx={{ height: 24 }} />}
        sx={{ borderTop: 1, borderColor: '#EDF2F6', pt: 2 }}
        gap={2.5}
      >
        <CustomerLegendToggleButton
          name="Last Month"
          color="#0095FF"
          value={lastMonth}
          legend={legend}
          svgIcon={Pin}
          handleLegendToggle={handleLegendToggle}
        />
        <CustomerLegendToggleButton
          name="This Month"
          color="#07E098"
          value={thisMonth}
          legend={legend}
          svgIcon={Pin}
          handleLegendToggle={handleLegendToggle}
        />
      </Stack>
    </Paper>
  );
};

export default CustomerSatisfaction;
