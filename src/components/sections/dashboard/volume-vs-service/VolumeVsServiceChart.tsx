import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  GridComponent,
  GridComponentOption,
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { MutableRefObject, useMemo } from 'react';
import ReactEchart from 'components/base/ReactEhart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { SxProps, useTheme } from '@mui/material';

echarts.use([TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | GridComponentOption | BarSeriesOption
>;

interface VolumeVsServiceChartProps {
  chartRef: MutableRefObject<EChartsReactCore | null>;
  data: {
    Volume: number[];
    Services: number[];
  };
  style?: {
    height: number;
    width?: number;
  };
  sx: SxProps;
}

const VolumeVsServiceChart = ({ chartRef, data, style, ...rest }: VolumeVsServiceChartProps) => {
  const theme = useTheme();

  const volumeVsServiceChartOption = useMemo(() => {
    const option: EChartsOption = {
      color: [theme.palette.success.main, theme.palette.info.main],
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
          name: 'Services',
          type: 'bar',
          data: data.Services,
          itemStyle: {
            borderRadius: 2,
          },

          stack: 'total',
          barWidth: '20%',
        },
        {
          name: 'Volume',
          type: 'bar',
          data: data.Volume,
          itemStyle: {
            borderRadius: 2,
          },
          stack: 'total',
          barWidth: '20%',
        },
      ],
    };
    return option;
  }, [theme, data]);

  return (
    <ReactEchart
      echarts={echarts}
      option={volumeVsServiceChartOption}
      ref={chartRef}
      style={style}
      {...rest}
    />
  );
};

export default VolumeVsServiceChart;
