import { createTheme } from '@mui/material';
import palette from './palette';
import typography from './typography';
import CssBaseline from './components/CssBaseline';
import Link from './components/Link';
import Paper from './components/Paper';
import Button from './components/Button';
import ListItemButton from './components/ListItemButton';
import ListItemText from './components/ListItemText';
import ListItemIcon from './components/ListItemIcon';
import Stack from './components/Stack';
import AppBar from './components/AppBar';
// import Link from './components/Link';
// import Paper from './components/Paper';

import FilledInput from './components/FilledInput';
import InputAdornment from './components/InputAdornment';
import InputBase from './components/InputBase';
import Badge from './components/Badge';
// import ListItemButton from './components/ListItemButton';
// import ListItemText from './components/ListItemText';
// import ListItemIcon from './components/ListItemIcon';

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiAppBar: AppBar,
    MuiPaper: Paper,
    MuiStack: Stack,
    // MuiButtonBase: ButtonBase,
    MuiButton: Button,
    MuiListItemButton: ListItemButton,
    MuiListItemText: ListItemText,
    MuiListItemIcon: ListItemIcon,
    MuiBadge: Badge,

    // input fields
    // MuiTextField: TextField,
    MuiInputBase: InputBase,
    MuiFilledInput: FilledInput,
    MuiInputAdornment: InputAdornment,
    // MuiOutlinedInput: OutlinedInput,
    // MuiInputLabel: InputLabel,
    // MuiFormHelperText: FormHelperText,
    // MuiInput: Input,
    // MuiFormControlLabel: FormControlLabel,
    MuiCssBaseline: CssBaseline,
    MuiLink: Link,
  },
});

// // Add custom shadows to theme
// shadows.forEach((shadow, index) => {
//   theme.shadows[index + 1] = shadow;
// });
