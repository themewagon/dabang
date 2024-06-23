import { Typography } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import Topbar from './topbar/Topbar';

const drawerWidth = 345;

const MainLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <div>
      <Topbar drawerWidth={drawerWidth} onHandleDrawerToggle={handleDrawerToggle} />
      {children}
    </div>
  );
};

export default MainLayout;
