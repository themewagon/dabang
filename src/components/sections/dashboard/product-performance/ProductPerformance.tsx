import { Box, Chip, Paper, Stack, Typography } from '@mui/material';
import { DataGrid, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import CustomPagination from 'components/common/CustomPagination';
import { rows } from 'data/product-performance';

const ProductPerformance = () => {
  const apiRef = useGridApiRef();

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'assigned',
      headerName: 'Assigned',
      flex: 1.5,
      minWidth: 200,
      renderCell: (params) => {
        return (
          <Stack justifyContent="center" height={1}>
            <Typography variant="h6">{params.value}</Typography>
            <Typography variant="subtitle2">{params.row.role}</Typography>
          </Stack>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1.5,
      minWidth: 200,
    },
    {
      field: 'priority',
      headerName: 'Priority',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => {
        let color: string = '';
        switch (params.value) {
          case 'Low':
            color = 'success.lighter';
            break;
          case 'Medium':
            color = 'info.lighter';
            break;
          case 'High':
            color = 'error.lighter';
            break;
          case 'Critical':
            color = 'warning.lighter';
            break;
        }
        return <Chip label={params.value} sx={{ bgcolor: color }} />;
      },
    },
    {
      field: 'budget',
      headerName: 'Budget',
      flex: 0.5,
      minWidth: 150,
      renderCell: (params) => {
        return (
          <Stack justifyContent="center" height={1}>
            <Typography variant="body1" color="common.dark">
              ${params.value}k
            </Typography>
          </Stack>
        );
      },
    },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" color="primary.dark">
        Product Performance
      </Typography>

      <Box
        sx={{
          height: 400,
          width: 1,
          mt: 1.75,
        }}
      >
        <DataGrid
          apiRef={apiRef}
          columns={columns}
          rows={rows}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
      <CustomPagination apiRef={apiRef} />
    </Paper>
  );
};

export default ProductPerformance;
