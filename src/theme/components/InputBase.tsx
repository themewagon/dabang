import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputBase: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
  styleOverrides: {
    // inputAdornedStart: ({ theme }) => ({
    //   paddingLeft: `${theme.spacing(3)} !important`,
    // }),
    inputHiddenLabel: ({ theme }) => ({
      paddingTop: `${theme.spacing(2.125)} !important`,
      paddingBottom: `${theme.spacing(2.125)} !important`,
    }),
  },
};

export default InputBase;
