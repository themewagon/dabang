import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { topProducts } from 'data/top-products';
import TopProduct from './TopProduct';

const TopProducts = () => {
  return (
    <Paper sx={{ py: 3 }}>
      <Typography variant="h4" color="primary.dark" pl={3}>
        Top Products
      </Typography>

      <Table aria-label="top product table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Popularity</TableCell>
            <TableCell>Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topProducts.map((product) => (
            <TopProduct key={product.id} product={product} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TopProducts;
