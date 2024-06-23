import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { rootPaths } from './paths';

import PageLoader from 'components/loading/PageLoader';
import Progress from 'components/loading/Progress';

const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
// const AuthLayout = lazy(() => import('layouts/auth-layout'));
const Dashboard = lazy(() => import('pages/dashboard/Dashboard'));
// const Login = lazy(() => import('pages/authentication/default/Login'));
// const Signup = lazy(() => import('pages/authentication/default/Signup'));
const Page404 = lazy(() => import('pages/errors/Page404'));

export const routes = [
  {
    element: (
      <Suspense fallback={<Progress />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: rootPaths.root,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          //   {
          //     path: paths.starter,
          //     element: <Starter />,
          //   },
          //   {
          //     path: paths.comingSoon,
          //     element: <ComingSoon />,
          //   },
        ],
      },
      //   {
      //     path: rootPaths.authRoot,
      //     element: <AuthLayout />,
      //     children: [
      //       {
      //         path: paths.login,
      //         element: <Login />,
      //       },
      //       {
      //         path: paths.signup,
      //         element: <Signup />,
      //       },
      //       {
      //         path: paths.forgotPassword,
      //         element: <ForgotPassword />,
      //       },
      //       {
      //         path: paths['2FA'],
      //         element: <TwoFA />,
      //       },
      //     ],
      //   },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
