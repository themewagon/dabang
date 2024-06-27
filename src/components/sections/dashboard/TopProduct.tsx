import { Chip, LinearProgress, TableCell, TableRow, alpha } from '@mui/material';
import { Product } from 'data/top-products';

const TopProduct = ({ product }: { product: Product }) => {
  const { id, name, color, sales } = product;

  return (
    <TableRow>
      <TableCell>0{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <LinearProgress
          variant="determinate"
          value={product.sales}
          sx={{
            bgcolor: alpha(color, 0.2),
            borderRadius: 2,
            width: 140,
            '& .MuiLinearProgress-bar': {
              bgcolor: color,
            },
          }}
        />
      </TableCell>
      <TableCell>
        <Chip label={`${sales}%`} variant="outlined" sx={{ color: color, borderColor: color }} />
      </TableCell>
    </TableRow>
  );
};

export default TopProduct;