// import { useEffect, useState } from 'react';
// import ReactECharts from 'echarts-for-react';
// import * as echarts from 'echarts/core';
// import {
//   TooltipComponent,
//   TooltipComponentOption,
//   GeoComponent,
//   GeoComponentOption,
// } from 'echarts/components';
// import { MapChart, MapSeriesOption } from 'echarts/charts';
// import { CanvasRenderer } from 'echarts/renderers';
// import { Paper, Typography } from '@mui/material';
// import { CallbackDataParams } from 'echarts/types/src/util/types.js';

// echarts.use([TooltipComponent, GeoComponent, MapChart, CanvasRenderer]);

// type EChartsOption = echarts.ComposeOption<
//   TooltipComponentOption | GeoComponentOption | MapSeriesOption
// >;

// const chartOption: EChartsOption = {
//   tooltip: {
//     trigger: 'item',
//     showDelay: 0,
//     transitionDuration: 0.2,
//     formatter: (params: CallbackDataParams) => {
//       const { name, value } = params;
//       return value ? `${name} : ${value}` : `${name} : 0`;
//     },
//   },
//   roam: true,
//   series: [
//     {
//       name: 'Sales',
//       type: 'map',
//       map: 'World',
//       selectedMode: false,
//       itemStyle: {
//         areaColor: '#ECECEC',
//         borderColor: '#fff',
//         borderWidth: 0.2,
//       },
//       emphasis: {
//         disabled: true,
//       },
//       data: [
//         { name: 'Brazil', value: 19000, itemStyle: { areaColor: '#F64E60' } },
//         // { name: 'United States', value: 11000, itemStyle: { areaColor: '#FFA800' } },
//         { name: 'United States of America', value: 11000, itemStyle: { areaColor: '#FFA800' } },
//         { name: 'China', value: 41000, itemStyle: { areaColor: '#8950FC' } },
//         { name: 'Saudi Arabia', value: 7000, itemStyle: { areaColor: '#00AB9A' } },
//         // { name: 'Dem. Rep. Congo', value: 27000, itemStyle: { areaColor: '#6993FF' } },
//         {
//           name: 'Democratic Republic of the Congo',
//           value: 27000,
//           itemStyle: { areaColor: '#6993FF' },
//         },
//         { name: 'Indonesia', value: 27000, itemStyle: { areaColor: '#0BB783' } },
//       ],
//     },
//   ],
// };
// const SalesMapping = () => {
//   const [option, setOption] = useState({});

//   useEffect(() => {
//     const fetchWorldJson = async () => {
//       // const ROOT_PATH = 'https://echarts.apache.org/examples';
//       try {
//         // const response = await fetch (`${ROOT_PATH}/data/asset/geo/world.json`);
//         const response = await fetch(
//           'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/world.json',
//         );
//         const worldJson = await response.json();
//         echarts.registerMap('World', worldJson);

//         setOption(chartOption as EChartsOption);
//       } catch (error) {
//         console.error('Error fetching world.json:', error);
//       }
//     };

//     fetchWorldJson();
//   }, []);

//   return (
//     <Paper sx={{ p: 3 }}>
//       <Typography variant="h4" color="primary.dark">
//         Sales Mapping by Country
//       </Typography>

//       <ReactECharts option={option} style={{ height: '600px', width: '100%' }} />
//       {/* <SalesMappingChart salesMappingChartRef={salesMappingChartRef} data={salesMappingData} /> */}
//     </Paper>
//   );
// };

// export default SalesMapping;
import { useRef } from 'react';
import { Paper, Typography } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import SalesMappingChart from './SalesMappingChart';
import { salesMappingData } from 'data/sales-mapping-data';

const SalesMapping = () => {
  const salesMappingChartRef = useRef<null | EChartsReactCore>(null);
  // const [salesMappingData] = useState([]);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" color="primary.dark">
        Sales Mapping by Country
      </Typography>

      <SalesMappingChart salesMappingChartRef={salesMappingChartRef} data={salesMappingData} />
    </Paper>
  );
};

export default SalesMapping;
