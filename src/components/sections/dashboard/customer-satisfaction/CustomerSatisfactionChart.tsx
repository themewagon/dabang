import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
} from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { MutableRefObject, useMemo } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import ReactEchart from 'components/base/ReactEhart';

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | GridComponentOption | LegendComponentOption | LineSeriesOption
>;

interface CustomerSatisfactionChart {
  chartRef: MutableRefObject<EChartsReactCore | null>;
  style?: {
    height?: number;
    width?: number;
  };
}

const CustomerSatisfactionChart = ({ chartRef, style }: CustomerSatisfactionChart) => {
  const customerSatisfactionChartOption = useMemo(() => {
    const option: EChartsOption = {
      color: ['#0095FF', '#07E098'],
      tooltip: {
        // trigger: 'axis',
        show: false,
      },

      legend: {
        show: false,
      },

      grid: {
        top: 0,
        // left: '-8%',
        left: 0,
        right: 4,
        bottom: 0,
        containLabel: true,
      },

      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          show: false,
        },
      ],
      yAxis: [
        {
          type: 'value',
          show: false,
        },
      ],
      series: [
        {
          name: 'Last Month',
          type: 'line',
          stack: 'Customer Satisfaction',
          smooth: true,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: 'rgba(0, 149, 255, 0)',
              },
              {
                offset: 0,
                color: 'rgba(0, 157, 255, 0.32)',
              },
            ]),
          },

          emphasis: {
            focus: 'series',
          },
          data: [120, 132, 101, 134, 90, 230, 210],
          symbol: 'circle',
          symbolSize: 8,
        },
        {
          name: 'This Month',
          type: 'line',
          stack: 'Customer Satisfaction',
          smooth: true,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0)',
              },
              {
                offset: 0,
                color: 'rgba(0, 224, 150, 0.33)',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290, 330, 310],
          symbol: 'circle',
          symbolSize: 8,
        },
      ],
    };
    return option;
  }, []);

  return (
    <ReactEchart
      echarts={echarts}
      option={customerSatisfactionChartOption}
      ref={chartRef}
      style={style}
    />
  );
};

export default CustomerSatisfactionChart;
