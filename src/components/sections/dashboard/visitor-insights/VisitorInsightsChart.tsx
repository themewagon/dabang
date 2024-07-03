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
import ReactEchart from 'components/base/ReactEhart';
import EChartsReactCore from 'echarts-for-react/lib/core';

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

interface VisitorInsightsChartProps {
  chartRef: MutableRefObject<EChartsReactCore | null>;
  style?: {
    height: number;
    width?: number;
  };
}

const VisitorInsightsChart = ({ chartRef, style }: VisitorInsightsChartProps) => {
  const visitorInsightsChartOption = useMemo(() => {
    const option: EChartsOption = {
      color: ['#A700FF', '#EF4444', '#3CD856'],
      tooltip: {
        trigger: 'axis',
        confine: true,
        axisPointer: {
          lineStyle: {
            color: 'red',
          },
        },
      },

      legend: {
        show: false,
      },

      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontFamily: 'Epilogue',
          fontSize: 10,
          color: '#464E5F',
        },
        axisLine: {
          show: false,
        },
      },

      yAxis: {
        type: 'value',
        axisLabel: {
          fontFamily: 'Poppins',
          fontSize: 12,
          color: '#7B91B0',
        },
        splitLine: {
          lineStyle: {
            color: '#EFF1F3',
          },
        },
      },

      grid: {
        top: 8,
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true,
      },

      series: [
        {
          name: 'Loyal Customers',
          type: 'line',
          data: [320, 300, 240, 190, 200, 220, 300, 310, 300, 260, 180, 150],
          smooth: true,
          // smoothMonotone:'x',
          symbol: 'circle',
          showSymbol: false,
          symbolSize: 14,

          lineStyle: {
            width: 4,
          },
        },
        {
          name: 'New Customers',
          type: 'line',
          data: [250, 220, 180, 120, 180, 280, 350, 310, 300, 290, 200, 148],
          smooth: true,
          // smoothMonotone:'x',
          symbol: 'circle',
          showSymbol: false,
          symbolSize: 14,
          lineStyle: {
            // color: '#EF4444',
            width: 4,
          },
        },
        {
          name: 'Unique Customers',
          type: 'line',
          data: [280, 340, 310, 280, 220, 180, 250, 300, 305, 310, 250, 200],
          smooth: true,
          // smoothMonotone:'x',
          symbol: 'circle',
          showSymbol: false,
          symbolSize: 14,
          lineStyle: {
            width: 4,
          },
        },
      ],
    };
    return option;
  }, []);

  return (
    <ReactEchart
      echarts={echarts}
      option={visitorInsightsChartOption}
      ref={chartRef}
      style={style}
    />
  );
};

export default VisitorInsightsChart;
