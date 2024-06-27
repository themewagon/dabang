import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { MutableRefObject, useMemo } from 'react';
import ReactEchart from 'components/base/ReactEhart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { SxProps } from '@mui/material';

echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | GridComponentOption | BarSeriesOption
>;

interface ReactEChartProps {
  chartRef: MutableRefObject<EChartsReactCore | null>;
  sx?: SxProps;
}

const VolumeVsServiceChart = ({ chartRef }: ReactEChartProps) => {
  const volumeVsServiceChartOption = useMemo(() => {
    const option: EChartsOption = {
      color: ['#00E096', '#0095FF'],
      legend: {
        show: false,
      },

      tooltip: {
        confine: true,
      },

      xAxis: {
        show: false,
        data: ['', '', '', '', '', '', ''],
      },

      yAxis: {
        type: 'value',
        show: false,
      },

      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        containLabel: true,
      },

      series: [
        {
          name: 'Volume',
          type: 'bar',
          data: [78, 89, 36, 78, 41, 36, 61],
          itemStyle: {
            borderRadius: 2,
          },
          stack: 'total',
          barWidth: '20%',
        },
        {
          name: 'Services',
          type: 'bar',
          data: [60, 79, 102, 92, 84, 60, 43],
          itemStyle: {
            borderRadius: 2,
          },

          stack: 'total',
          barWidth: '20%',
        },
      ],
    };
    return option;
  }, []);

  return <ReactEchart echarts={echarts} option={volumeVsServiceChartOption} ref={chartRef} />;
};

export default VolumeVsServiceChart;
