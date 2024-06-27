import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  GeoComponent,
  GeoComponentOption,
} from 'echarts/components';
import { MapChart, MapSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

import { CallbackDataParams } from 'echarts/types/src/util/types.js';
import { MutableRefObject, useEffect, useState } from 'react';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { GeoJSONSourceInput } from 'echarts/types/src/coord/geo/geoTypes.js';
import { SalesMappingDataItem } from 'data/sales-mapping-data';
import ReactEchart from 'components/base/ReactEchart';

echarts.use([TooltipComponent, GeoComponent, MapChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<
  TooltipComponentOption | GeoComponentOption | MapSeriesOption
>;

// [
//   { name: 'Brazil', value: 19000, itemStyle: { areaColor: '#F64E60' } },
//   // { name: 'United States', value: 11000, itemStyle: { areaColor: '#FFA800' } },
//   { name: 'United States of America', value: 11000, itemStyle: { areaColor: '#FFA800' } },
//   { name: 'China', value: 41000, itemStyle: { areaColor: '#8950FC' } },
//   { name: 'Saudi Arabia', value: 7000, itemStyle: { areaColor: '#00AB9A' } },
//   // { name: 'Dem. Rep. Congo', value: 27000, itemStyle: { areaColor: '#6993FF' } },
//   {
//     name: 'Democratic Republic of the Congo',
//     value: 27000,
//     itemStyle: { areaColor: '#6993FF' },
//   },
//   { name: 'Indonesia', value: 27000, itemStyle: { areaColor: '#0BB783' } },
// ];

interface SalesMappingChartProps {
  salesMappingChartRef: MutableRefObject<EChartsReactCore | null>;
  data: SalesMappingDataItem[];
  style?: {
    height: number;
    width: number;
  };
}

const SalesMappingChart = ({ salesMappingChartRef, data }: SalesMappingChartProps) => {
  const [worldJson, setWorldJson] = useState<GeoJSONSourceInput>({
    type: 'FeatureCollection',
    features: [],
  });
  useEffect(() => {
    const fetchWorldJson = async () => {
      // const ROOT_PATH = 'https://echarts.apache.org/examples';
      try {
        // const response = await fetch (`${ROOT_PATH}/data/asset/geo/world.json`);
        const response = await fetch(
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/world.json',
        );
        const worldJson = await response.json();
        setWorldJson(worldJson);
      } catch (error) {
        console.error('Error fetching world.json:', error);
      }
    };

    fetchWorldJson();
  }, []);

  const option: EChartsOption = {
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: (params: CallbackDataParams) => {
        const { name, value } = params;
        if (value) return `${name} : ${value}`;
        else return `${name} : 0`;
      },
    },

    roam: true,

    series: [
      {
        name: 'Sales',
        type: 'map',
        map: 'world',

        selectedMode: false,
        itemStyle: {
          areaColor: '#ECECEC',
          borderColor: '#fff',
          borderWidth: 0.2,
        },

        emphasis: {
          //   label: {
          //     show: false
          //   },
          disabled: true,
        },

        data: data,
      },
    ],
  };
  echarts.registerMap('world', worldJson);

  return <ReactEchart echarts={echarts} option={option} ref={salesMappingChartRef} />;
};

export default SalesMappingChart;
