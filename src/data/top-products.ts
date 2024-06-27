export interface Product {
  id: number;
  name: string;
  color: string;
  sales: number;
}

export const topProducts: Product[] = [
  { id: 1, name: 'Home Decor Range', color: '#0095FF', sales: 45 },
  { id: 2, name: 'Disney Princess Pink Bag 18', color: '#00E096', sales: 29 },
  { id: 3, name: 'Bathroom Essentials', color: '#884DFF', sales: 18 },
  { id: 4, name: 'Apple Smartwatches', color: '#FF8F0D', sales: 25 },
];
