import { Chip, LinearProgress, TableCell, TableRow } from '@mui/material';
import { Product } from 'data/top-products';

const TopProduct = ({ product }: { product: Product }) => {
  const { id, name, color, sales } = product;

  return (
    <TableRow>
      <TableCell>0{id}</TableCell>
      <TableCell sx={{ whiteSpace: 'nowrap' }}>{name}</TableCell>
      <TableCell>
        <LinearProgress
          variant="determinate"
          value={product.sales}
          //   sx={{ bgcolor: color, width: 140 }}
          //   color="warning"
        />
      </TableCell>
      <TableCell>
        <Chip label={`${sales}%`} variant="outlined" sx={{ color: color, borderColor: color }} />
      </TableCell>
    </TableRow>
  );
};

export default TopProduct;
