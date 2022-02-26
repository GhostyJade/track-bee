import React from 'react';
import {RoutePermittedRole} from '../../../shared/constants/AppConst';

export const layoutConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/layout/box',
    component: React.lazy(() => import('./Box')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/layout/container',
    component: React.lazy(() => import('./Container')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/layout/Grid',
    component: React.lazy(() => import('./Grid')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/layout/Stack',
    component: React.lazy(() => import('./Stack')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/layout/Image-list',
    component: React.lazy(() => import('./ImageList')),
  },
];
