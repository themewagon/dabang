import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  defaultProps: { disableUnderline: true },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 4,
    }),
    input: ({ theme }) => ({
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.fontSize + 4,

      // color: theme.palette.neutral.main,
      // '&::placeholder': {
      //   color: theme.palette.neutral.main,
      //   opacity: 1,
      // },
    }),
    adornedStart: ({ theme }) => ({
      backgroundColor: theme.palette.neutral.light,
    }),
  },
};

export default FilledInput;
