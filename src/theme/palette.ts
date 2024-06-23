import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import { indigo, grey, orange, red } from './colors';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
  interface Palette {
    neutral: PaletteColor;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

const palette: PaletteOptions = {
  grey,
  text: {
    primary: grey[800],
    secondary: grey[600],
    disabled: grey[400],
  },

  action: {
    active: indigo[500],
    hover: indigo[300],
    selected: indigo[500],
    // disabled: grey[400],
    // disabledBackground: grey[200],
    // focus: grey[300],
  },
  neutral: {
    lighter: grey[100],
    light: grey[300], // This is used
    main: grey[500],
    dark: grey[900],
    darker: grey[900],
    contrastText: '#fff',
  },
  primary: {
    // lighter: blue[50],
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700],
    darker: indigo[900],
  },
  // secondary: {
  //   lighter: purple[50],
  //   light: purple[300],
  //   main: purple[500],
  //   dark: purple[700],
  //   darker: purple[900],
  // },
  error: {
    light: red[300],
    main: red[500],
  },
  warning: {
    lighter: orange[50],
    light: orange[300],
    main: orange[500],
  },
  // success: {
  //   lighter: green[50],
  //   light: green[400],
  //   main: green[500],
  //   dark: green[700],
  //   darker: green[900],
  // },
  // info: {
  //   lighter: lightBlue[50],
  //   light: lightBlue[300],
  //   main: lightBlue[500],
  //   dark: lightBlue[700],
  //   darker: lightBlue[900],
  //   contrastText: '#ffffff',
  // },
};

export default palette;
