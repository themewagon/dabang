import { Divider, Paper, Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import VolumeVsServiceChart from './VolumeVsServiceChart';
import { CallbackDataParams } from 'echarts/types/src/util/types.js';
import LegendToggleButton from './LegendToggleButton';

const VolumeVsService = () => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  const [volume, setVolume] = useState<string>('');
  const [services, setServices] = useState<string>('');

  const [legend, setLegend] = useState({
    Volume: false,
    Services: false,
  });

  useEffect(() => {
    if (chartRef.current) {
      const instance = chartRef.current.getEchartsInstance();

      const handleMouseOver = (params: CallbackDataParams) => {
        if (params.seriesIndex === 0) {
          setVolume(params?.value?.toString() || '');
          // setVolume(params?.value!.toString());
        } else {
          setServices(params?.value?.toString() || '');
        }
      };

      const handleMouseOut = (params: CallbackDataParams) => {
        if (params.seriesIndex === 0) {
          setVolume('');
        } else {
          setServices('');
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
        name,
      });
    }
  };

  return (
    <Paper sx={{ pt: 3.125, pb: 1.875 }}>
      <Typography variant="h4" color="primary.dark" mb={3} px={3}>
        Volume vs Service Level
      </Typography>

      <VolumeVsServiceChart chartRef={chartRef} style={{ height: 190 }} sx={{ pb: 1 }} />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem sx={{ height: 24 }} />}
        sx={{ borderTop: 1, borderColor: '#EDF2F6', pt: 2 }}
        gap={2.5}
      >
        <LegendToggleButton
          name="Volume"
          color="#00E096"
          value={volume}
          legend={legend}
          icon="codicon:circle-filled"
          handleLegendToggle={handleLegendToggle}
        />
        <LegendToggleButton
          name="Services"
          color="#0095FF"
          value={services}
          legend={legend}
          icon="codicon:circle-filled"
          handleLegendToggle={handleLegendToggle}
        />
      </Stack>
    </Paper>
  );
};

export default VolumeVsService;
