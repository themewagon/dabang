import { TypographyOptions } from '@mui/material/styles/createTypography';

// lineHeight: lineHeight/fontSize;
const typography: TypographyOptions = {
  fontFamily: ['Poppins', 'Open Sans', 'Epilogue', 'sans-serif'].join(','),

  // fontWeightLight: 300,
  // fontWeightRegular: 400,
  // fontWeightMedium: 500,
  // fontWeightBold: 700,

  h1: {
    fontWeight: 600,
    fontSize: '2.25rem', // 36px
    lineHeight: 1.4, // 50.4px
  },

  h2: {
    fontWeight: 600,
    fontSize: '1.875rem', // 30px
    lineHeight: 1.5, // 45px
  },

  h3: {
    fontWeight: 600,
    fontSize: '1.5rem', // 24px
    lineHeight: 1.33, //32px
  },

  h4: {
    fontWeight: 600,
    fontSize: '1.25rem', // 20px
    lineHeight: 1.6, // 32px
  },

  h5: {
    fontWeight: 600,
    fontSize: '1.125rem', // 18px
    lineHeight: 1.5, // 27px
  },

  h6: {
    fontWeight: 500,
    fontSize: '1rem', // 16px
    lineHeight: 1.5, // 24px
  },

  subtitle1: {
    fontWeight: 400,
    fontSize: '1rem', // 16px
    lineHeight: 1.875, //30px
  },

  subtitle2: {
    fontWeight: 400,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.42, //20px
  },

  body1: {
    fontWeight: 500,
    fontSize: '1rem', // 16px
    lineHeight: 1.5, // 24px
  },

  body2: {
    fontWeight: 400,
    fontSize: '0.8125rem', // 13px
    lineHeight: 1.23, // 16px
    fontFamily: 'Open Sans',
  },

  caption: {
    fontWeight: 500,
    fontSize: '0.75rem', // 12px
    lineHeight: 1.33, // 16px
  },

  button: {
    textTransform: 'none',
    fontFamily: 'Epilogue',
    fontWeight: 500,
    fontSize: '0.75rem', // 12px
    lineHeight: 1.025, // 12.3px
  },
};

export default typography;
