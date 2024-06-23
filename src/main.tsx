import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import BreakpointsProvider from 'providers/BreakpointsProvider';
import { theme } from 'theme/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BreakpointsProvider>
        <CssBaseline />
        <App />
      </BreakpointsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
