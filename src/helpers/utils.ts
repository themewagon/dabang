export const numberFormat = (number: number, notation: 'standard' | 'compact' = 'standard') =>
  new Intl.NumberFormat('en-US', {
    notation,
  }).format(number);
