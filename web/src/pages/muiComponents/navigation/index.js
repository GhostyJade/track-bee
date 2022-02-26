import React from 'react';
import {RoutePermittedRole} from '../../../shared/constants/AppConst';

export const navigationConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/navigation/bottom-navigation',
    component: React.lazy(() => import('./BottomNavigation')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/navigation/breadcrumbs',
    component: React.lazy(() => import('./Breadcrumbs')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/navigation/drawers',
    component: React.lazy(() => import('./Drawer')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/navigation/links',
    component: React.lazy(() => import('./Links')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/navigation/menus',
    component: React.lazy(() => import('./Menu')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/navigation/pagination',
    component: React.lazy(() => import('./Pagination')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/navigation/speed-dial',
    component: React.lazy(() => import('./SpeedDial')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/navigation/steppers',
    component: React.lazy(() => import('./Stepper')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/navigation/tabs',
    component: React.lazy(() => import('./Tabs')),
  },
];
