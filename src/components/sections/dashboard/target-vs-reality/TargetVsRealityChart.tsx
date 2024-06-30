import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import ReactEchart from 'components/base/ReactEhart';
import { useMemo } from 'react';

echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | GridComponentOption | BarSeriesOption
>;

interface TargetVsRealityChartProps {
  style?: {
    height?: number;
    width?: number;
  };
}

const TargetVsRealityChart = ({ style }: TargetVsRealityChartProps) => {
  const targetVsRealityChartOption = useMemo(() => {
    const option: EChartsOption = {
      color: ['#4AB58E', '#FFCF00'],

      tooltip: {
        confine: true,
      },

      xAxis: {
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
        // boundaryGap: false,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          fontFamily: 'Poppins',
          // fontWeight:'normal',
          fontSize: 10,
          color: '#7B91B0',
        },
      },

      yAxis: {
        show: false,
      },

      grid: {
        top: 0,
        bottom: 0,
        left: '-5%',
        right: '-2%',
        containLabel: true,
      },

      series: [
        {
          type: 'bar',
          data: [78, 68, 58, 78, 95, 95, 95],
          itemStyle: {
            borderRadius: 5,
          },
          barCategoryGap: '30%',
        },
        {
          type: 'bar',
          data: [102, 92, 116, 92, 133, 133, 133],
          itemStyle: {
            borderRadius: 5,
          },
          barCategoryGap: '30%',
        },
      ],
    };
    return option;
  }, []);

  return <ReactEchart echarts={echarts} option={targetVsRealityChartOption} style={style} />;
};

export default TargetVsRealityChart;
