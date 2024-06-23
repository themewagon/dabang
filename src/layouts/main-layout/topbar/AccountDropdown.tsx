import { Avatar, Button, ListItemIcon, Menu, MenuItem, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { MouseEvent, useState } from 'react';
import Profile from 'assets/Profile.svg';

interface MenuItem {
  id: number;
  label: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  {
    id: 0,
    label: 'Profile',
    icon: 'material-symbols:person',
  },
  {
    id: 1,
    label: 'My Account',
    icon: 'material-symbols:account-box-sharp',
  },
  {
    id: 2,
    label: 'Logout',
    icon: 'uiw:logout',
  },
];

const AccountDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        onClick={handleClick}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar
          sx={{ width: 60, height: 60, borderRadius: 4, mr: 2.5 }}
          alt="User Profile"
          src={Profile}
        />
        <div>
          <Stack direction="row" alignItems="center" columnGap={7}>
            <Typography variant="h6" component="p" color="primary.darker">
              Musfiq
            </Typography>
            <IconifyIcon icon="ph:caret-down-bold" fontSize={16} color="primary.darker" />
          </Stack>
          <Typography variant="subtitle2" textAlign="left" color="primary.light" mt={0.5}>
            Admin
          </Typography>
        </div>
      </Button>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} onClick={handleClose}>
            <ListItemIcon>
              <IconifyIcon icon={menuItem.icon} />
            </ListItemIcon>
            <Typography variant="body1">{menuItem.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default AccountDropdown;
