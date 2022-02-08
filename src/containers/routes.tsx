import React, { lazy } from 'react';
const Home = lazy(() => import('./Home'));

export const ROUTES = [
  {
    path: '/',
    component: Home,
    key: 'home',
    exact: true
  }, 
  {
    path: '*',
    component: () => <div>Not found</div>,
    key: 'not-found'
  }
];
