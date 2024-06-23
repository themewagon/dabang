import { createTheme } from '@mui/material';
import palette from './palette';
import typography from './typography';
import CssBaseline from './components/CssBaseline';
// import Link from './components/Link';
// import Paper from './components/Paper';
// import Button from './components/Button';
// import ListItemButton from './components/ListItemButton';
// import ListItemText from './components/ListItemText';
// import ListItemIcon from './components/ListItemIcon';

export const theme = createTheme({
  palette,
  typography,
  components: {
    // MuiAppBar: AppBar,
    // MuiPaper: Paper,
    // // MuiButtonBase: ButtonBase,
    // MuiButton: Button,
    // MuiListItemButton: ListItemButton,
    // MuiListItemText: ListItemText,
    // MuiListItemIcon: ListItemIcon,
    // MuiIconButton: IconButton,
    // input fields
    // MuiTextField: TextField,
    // MuiFilledInput: FilledInput,
    // MuiOutlinedInput: OutlinedInput,
    // MuiInputLabel: InputLabel,
    // MuiInputAdornment: InputAdornment,
    // MuiFormHelperText: FormHelperText,
    // MuiInput: Input,
    // MuiFormControlLabel: FormControlLabel,
    MuiCssBaseline: CssBaseline,
    // MuiLink: Link,
  },
});

// // Add custom shadows to theme
// shadows.forEach((shadow, index) => {
//   theme.shadows[index + 1] = shadow;
// });
