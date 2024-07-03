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

echarts.use([TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer]);
type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | GridComponentOption | LegendComponentOption | BarSeriesOption
>;

interface TotalRevenueChartProps {
  chartRef: MutableRefObject<EChartsReactCore | null>;
  style?: {
    height: number;
    width?: number;
  };
}

const TotalRevenueChart = ({ chartRef, style }: TotalRevenueChartProps) => {
  const option: EChartsOption = useMemo(() => {
    return {
      color: ['#0095FF', '#00E096'],

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
          fontFamily: 'Poppins',
          fontSize: 12,
          color: '#7B91B0',
          margin: 18,
        },
      },

      yAxis: {
        type: 'value',
        axisLabel: {
          fontFamily: 'Poppins',
          fontSize: 12,
          color: '#7B91B0',
          formatter: '{value}k',
          margin: 18,
        },

        splitLine: {
          lineStyle: {
            color: '#EFF1F3',
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
          data: [14, 18, 6, 17, 12, 16, 22],
          itemStyle: {
            borderRadius: 2,
          },
          barCategoryGap: '65%',
        },
        {
          name: 'Offline Sales',
          type: 'bar',
          data: [12, 11, 23, 6, 11, 14, 11],
          itemStyle: {
            borderRadius: 2,
          },
          barCategoryGap: '65%',
        },
      ],
    };
  }, []);

  return <ReactEchart echarts={echarts} option={option} ref={chartRef} style={style} />;
};

export default TotalRevenueChart;
