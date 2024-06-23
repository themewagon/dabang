import DashboardIcon from 'components/icons/DashboardIcon';
import { rootPaths } from './paths';
import { SvgIconProps } from '@mui/material';

export interface MenuItem {
  id: number;
  name: string;
  pathName: string;
  path?: string;
  active?: boolean;
  icon?: string;
  svgIcon?: (props: SvgIconProps) => JSX.Element;
  items?: MenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 1,
    name: 'Dashboard',
    path: rootPaths.root,
    pathName: 'dashboard',
    svgIcon: DashboardIcon,
    active: true,
  },
  {
    id: 2,
    name: 'Leaderboard',
    path: '#!',
    pathName: 'leaderboard',
    icon: 'ri:bar-chart-line',
  },
  {
    id: 3,
    name: 'Order',
    path: '#!',
    pathName: 'order',
    icon: 'ph:shopping-cart-light',
  },
  {
    id: 4,
    name: 'Products',
    path: '#!',
    pathName: 'products',
    icon: 'mdi:shopping-outline',
  },
  {
    id: 5,
    name: 'Sales Report',
    path: '#!',
    pathName: 'sales-report',
    icon: 'ph:chart-line',
  },
  {
    id: 6,
    name: 'Messages',
    path: '#!',
    pathName: 'messages',
    icon: 'mdi:message-processing-outline',
  },
  {
    id: 7,
    name: 'Settings',
    path: '#!',
    pathName: 'settings',
    icon: 'fluent:settings-24-regular',
    active: true,
  },
  {
    id: 8,
    name: 'Sign Out',
    path: '#!',
    pathName: 'sign-out',
    icon: 'humbleicons:logout',
    active: true,
  },
  // {
  //   name: 'Authentication',
  //   pathName: 'authentication',
  //   icon: 'material-symbols:security-rounded',
  //   active: true,
  //   items: [
  //     {
  //       name: 'Login',
  //       path: paths.login,
  //       pathName: 'login',
  //       active: true,
  //     },
  //     {
  //       name: 'Sign up',
  //       path: paths.signup,
  //       pathName: 'sign-up',
  //       active: true,
  //     },
  //     {
  //       name: 'Forgot password',
  //       path: paths.forgotPassword,
  //       pathName: 'forgot-password',
  //       active: true,
  //     },
  //     {
  //       name: '2FA',
  //       path: paths['2FA'],
  //       pathName: '2FA',
  //       active: true,
  //     },
  //   ],
  // },
];

export default sitemap;
