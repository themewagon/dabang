export interface SalesMappingDataItem {
  name: string;
  value: number;
  itemStyle: {
    areaColor: string;
  };
}

export const salesMappingData: SalesMappingDataItem[] = [
  { name: 'Brazil', value: 19000, itemStyle: { areaColor: '#F64E60' } },
  { name: 'United States', value: 11000, itemStyle: { areaColor: '#FFA800' } },
  // { name: 'United States of America', value: 11000, itemStyle: { areaColor: '#FFA800' } },
  { name: 'China', value: 41000, itemStyle: { areaColor: '#8950FC' } },
  { name: 'Saudi Arabia', value: 7000, itemStyle: { areaColor: '#00AB9A' } },
  { name: 'Dem. Rep. Congo', value: 27000, itemStyle: { areaColor: '#6993FF' } },
  // {
  //   name: 'Democratic Republic of the Congo',
  //   value: 27000,
  //   itemStyle: { areaColor: '#6993FF' },
  // },
  { name: 'Indonesia', value: 27000, itemStyle: { areaColor: '#0BB783' } },
];
