import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const TableCell: Components<Omit<Theme, 'components'>>['MuiTableCell'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      //   paddingTop: theme.spacing(2),
      //   paddingBottom: theme.spacing(2),
      //   borderBottom: theme.shape.borderRadius * 0.5,
      borderBottomColor: theme.palette.grey.A100,
    }),

    head: ({ theme }) => ({
      fontWeight: theme.typography.body2.fontWeight,
      fontSize: theme.typography.body2.fontSize,
      lineHeight: theme.typography.body2.lineHeight,
      fontFamily: theme.typography.body2.fontFamily,
      color: theme.palette.neutral.main,
    }),

    body: ({ theme }) => ({
      fontSize: theme.typography.subtitle2.fontSize,
      fontWeight: theme.typography.subtitle2.fontWeight,
      lineHeight: theme.typography.subtitle2.lineHeight,
      color: theme.palette.neutral.darker,
    }),
  },
};

export default TableCell;
