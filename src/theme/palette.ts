import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import { indigo, grey, orange, red, green, purple } from './colors';

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
    primary: indigo[600],
    secondary: indigo[200],
    // disabled: grey[400],
  },

  action: {
    hover: indigo[300],
    selected: indigo[500],
    // disabled: grey[400],
    // disabledBackground: grey[200],
    // focus: grey[300],
  },
  neutral: {
    lighter: grey[50], //used
    light: grey[300], // This is used
    main: grey[500],
    dark: grey[700],
    darker: grey[900],
    contrastText: '#fff',
  },

  primary: {
    lighter: indigo[50],
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700],
    darker: indigo[900],
  },

  secondary: {
    lighter: purple[50],
    main: purple[500],
  },

  error: {
    lighter: red[50],
    light: red[300],
    main: red[500],
    dark: red[700],
  },

  warning: {
    lighter: orange[50],
    light: orange[300],
    main: orange[500],
    dark: orange[700],
  },

  success: {
    lighter: green[50],
    main: green[500],
  },
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
