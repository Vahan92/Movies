import React, { lazy } from 'react';
const Home = lazy(() => import('./Home'));

export const ROUTES = [
  {
    path: '/Movies',
    component: Home,
    key: 'home',
    exact: true
  }, 
  {
    path: '*',
    component: () => <p>Not Found</p>,
    key: 'not-found',
  }
];
