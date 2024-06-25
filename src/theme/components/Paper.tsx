import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Paper: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    elevation0: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 5,
      boxShadow: theme.shadows[1],
    }),
  },
};

export default Paper;
