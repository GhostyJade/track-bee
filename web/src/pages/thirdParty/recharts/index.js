import React from 'react';

export const rechartsConfigs = [
  {
    path: '/recharts/area',
    component: React.lazy(() => import('./Area')),
  },
  {
    path: '/recharts/bar',
    component: React.lazy(() => import('./Bar')),
  },
  {
    path: '/recharts/composed',
    component: React.lazy(() => import('./Composed')),
  },
  {
    path: '/recharts/line',
    component: React.lazy(() => import('./Line')),
  },
  {
    path: '/recharts/pie',
    component: React.lazy(() => import('./Pie')),
  },
  {
    path: '/recharts/radar',
    component: React.lazy(() => import('./Radar')),
  },
  {
    path: '/recharts/radial',
    component: React.lazy(() => import('./Radial')),
  },
  {
    path: '/recharts/treemap',
    component: React.lazy(() => import('./Treemap')),
  },
  {
    path: '/recharts/scatter',
    component: React.lazy(() => import('./Scatter')),
  },
  {
    path: '/recharts/funnel',
    component: React.lazy(() => import('./Funnel')),
  },
];
