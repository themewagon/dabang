import { Components, Theme } from '@mui/material';

const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
  styleOverrides: {
    gutters: ({ theme }) => ({
      //   alignItems: 'flex-start',
      //   padding: theme.spacing(0.875, 1),
      borderRadius: theme.shape.borderRadius * 4,
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.common.white,
      },
      '&.Mui-selected': {
        backgroundColor: theme.palette.action.selected,
        color: theme.palette.common.white,
      },
    }),
  },
};
export default ListItemButton;
