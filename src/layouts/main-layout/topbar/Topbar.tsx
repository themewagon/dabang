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

            {/* <IconButton color="inherit" aria-label="search-icon">
              <Search fontSize="small" />
            </IconButton> */}
          </Stack>
          {/* <SearchBox /> */}

          <Typography variant="h1">{title}</Typography>

          <Stack direction="row" alignItems="center" columnGap={{ xs: 1, sm: 2, md: 3 }}>
            <LanguageDropdown />
            <IconButton aria-label="notifications" color="inherit">
              {/* <OutlinedBadge badgeContent=" " color="error" variant="dot" overlap="circular">
                <Notification />
              </OutlinedBadge> */}
            </IconButton>
            <AccountDropdown />
          </Stack>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Topbar;
