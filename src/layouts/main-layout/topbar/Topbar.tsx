import { AppBar, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material';

import { rootPaths } from 'routes/paths';

import { useLocation } from 'react-router-dom';
import sitemap from 'routes/sitemap';
import { useMemo } from 'react';
import Logo from 'components/icons/Logo';
import ElevationScroll from './ElevationScroll';
import IconifyIcon from 'components/base/IconifyIcon';
import AccountDropdown from './AccountDropdown';
import LanguageDropdown from './LanguageDropdown';
import Search from 'components/common/Search';
import Notification from './Notification';

interface TopbarProps {
  drawerWidth: number;
  onHandleDrawerToggle: () => void;
}

const Topbar = ({ drawerWidth, onHandleDrawerToggle }: TopbarProps) => {
  const location = useLocation();

  const title = useMemo(() => {
    const navItem = sitemap.find((item) => location.pathname === item.path);
    return navItem?.name;
  }, [location]);

  return (
    <ElevationScroll>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth + 1}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            alignItems="center"
            columnGap={{ xs: 1, sm: 2 }}
            sx={{ display: { md: 'none' } }}
          >
            <Link href={rootPaths.root}>
              <IconButton color="inherit" aria-label="logo">
                <Logo />
              </IconButton>
            </Link>

            <IconButton color="inherit" aria-label="open drawer" onClick={onHandleDrawerToggle}>
              <IconifyIcon icon="mdi:hamburger-menu" />
            </IconButton>

            <IconButton color="inherit" aria-label="search-icon">
              <IconifyIcon icon="gravity-ui:magnifier" sx={{ color: 'primary.main' }} />
            </IconButton>
          </Stack>

          <Typography variant="h1" color="primary.darker">
            {title}
          </Typography>

          <Search />

          <Stack direction="row" alignItems="center" columnGap={{ xs: 1, sm: 2, md: 3 }}>
            <LanguageDropdown />
            <Notification />
            <AccountDropdown />
          </Stack>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Topbar;
