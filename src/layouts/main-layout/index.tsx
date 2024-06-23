import { PropsWithChildren, useState } from 'react';
import VerticalNavbar from './sidebar/VerticalNavbar';
import Topbar from './topbar/Topbar';

const drawerWidth = 345;

const MainLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <div>
      <Topbar drawerWidth={drawerWidth} onHandleDrawerToggle={handleDrawerToggle} />
      <VerticalNavbar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onHandleDrawerClose={handleDrawerClose}
      />
      {children}
    </div>
  );
};

export default MainLayout;
