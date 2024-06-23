import { List, Toolbar } from '@mui/material';
import sitemap from 'routes/sitemap';
import NavItem from './NavItem';
import LogoHeader from './LogoHeader';

const NavItems = () => {
  return (
    <div>
      <Toolbar>
        <LogoHeader />
      </Toolbar>

      <List
      // sx={{ overflowY: 'auto' }}
      >
        {sitemap.map((navItem) => (
          <NavItem key={navItem.id} item={navItem} />
        ))}
      </List>
    </div>
  );
};

export default NavItems;
