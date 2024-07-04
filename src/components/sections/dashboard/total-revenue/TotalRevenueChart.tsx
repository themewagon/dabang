import * as echarts from 'echarts/core';
import ReactEchart from 'components/base/ReactEhart';

import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { MutableRefObject, useMemo } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { useTheme } from '@mui/material';

echarts.use([TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer]);
type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | GridComponentOption | LegendComponentOption | BarSeriesOption
>;

interface TotalRevenueChartProps {
  chartRef: MutableRefObject<EChartsReactCore | null>;
  data: {
    'Online Sales': number[];
    'Offline Sales': number[];
  };
  style?: {
    height: number;
    width?: number;
  };
}

const TotalRevenueChart = ({ chartRef, data, style }: TotalRevenueChartProps) => {
  const theme = useTheme();

  const option: EChartsOption = useMemo(() => {
    return {
      color: [theme.palette.info.main, theme.palette.success.main],

      tooltip: {
        confine: true,
      },

      legend: {
        show: false,
      },

      xAxis: {
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          fontSize: theme.typography.fontSize - 2,
          color: theme.palette.grey.A200,
          margin: 18,
        },
      },

      yAxis: {
        type: 'value',
        axisLabel: {
          // fontFamily: 'Poppins',
          fontSize: theme.typography.fontSize - 2,
          color: theme.palette.grey.A200,
          formatter: '{value}k',
          margin: 18,
        },

        splitLine: {
          lineStyle: {
            color: theme.palette.grey.A400,
          },
        },
      },

      grid: {
        top: '4%',
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true,
      },

      series: [
        {
          name: 'Online Sales',
          type: 'bar',
          data: data['Online Sales'],
          itemStyle: {
            borderRadius: 2,
          },
          barCategoryGap: '65%',
        },
        {
          name: 'Offline Sales',
          type: 'bar',
          data: data['Offline Sales'],
          itemStyle: {
            borderRadius: 2,
          },
          barCategoryGap: '65%',
        },
      ],
    };
  }, [theme, data]);

  return <ReactEchart echarts={echarts} option={option} ref={chartRef} style={style} />;
};

export default TotalRevenueChart;
