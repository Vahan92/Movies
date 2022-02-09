import { lazy } from 'react';
const Home = lazy(() => import('./Home'));

export const ROUTES = [
  {
    path: '*',
    component: Home,
    key: 'home',
    exact: false
  }
];
