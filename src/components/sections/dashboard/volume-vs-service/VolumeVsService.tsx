import { Button, Divider, Paper, Stack, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import IconifyIcon from 'components/base/IconifyIcon';
import VolumeVsServiceChart from './VolumeVsServiceChart';

const VolumeVsService = () => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  const [legend, setLegend] = useState({
    Volume: false,
    Services: false,
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
      sx={{ opacity: legend[name] ? 0.5 : 1 }}
      disableRipple
    >
      <Typography variant="button" color="#464E5F" whiteSpace="nowrap" alignSelf="center">
        {name}
      </Typography>
    </Button>
  );

  return (
    <Paper sx={{ py: 3 }}>
      <Typography variant="h4" color="primary.dark" mb={3} pl={3}>
        Volume vs Service Level
      </Typography>

      <VolumeVsServiceChart chartRef={chartRef} style={{ height: 175 }} />

      <Stack
        direction="row"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ borderTop: 1, borderColor: '#EDF2F6', pt: 2 }}
        gap={2.5}
      >
        {renderToggleButton('Volume', '#0095FF')}
        {renderToggleButton('Services', '#00E096')}
      </Stack>
    </Paper>
  );
};

export default VolumeVsService;
