import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Typography variant="h1">Main Layout</Typography>

      {children}
    </div>
  );
};

export default MainLayout;
