import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

import { useLocation } from 'react-router-dom';
import { MenuItem } from 'routes/sitemap';

const NavItem = ({ item }: { item: MenuItem }) => {
  const location = useLocation();
  const { name, path, icon, svgIcon: SvgIcon, active } = item;

  const Icon = icon ? (
    <IconifyIcon icon={icon} fontSize={32} />
  ) : SvgIcon ? (
    <SvgIcon sx={{ fontSize: 32 }} />
  ) : null;
  return (
    <ListItem sx={{ opacity: active ? 1 : 0.5 }}>
      <ListItemButton
        selected={location.pathname === path}
        component={path ? Link : 'div'}
        href={path}
      >
        <ListItemIcon sx={{ mr: 3, color: 'primary.light' }}>{Icon}</ListItemIcon>
        <ListItemText primary={name} sx={[location.pathname === path && { fontWeight: 600 }]} />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
