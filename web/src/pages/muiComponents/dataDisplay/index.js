import React from 'react';
import { RoutePermittedRole } from '../../../shared/constants/AppConst';

export const dataDisplayConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-display/avatars',
    component: React.lazy(() => import('./Avatar')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-display/badges',
    component: React.lazy(() => import('./Badges')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-display/chips',
    component: React.lazy(() => import('./Chips')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-display/divider',
    component: React.lazy(() => import('./Divider')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-display/lists',
    component: React.lazy(() => import('./Lists')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-display/tables',
    component: React.lazy(() => import('./Table')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-display/tooltip',
    component: React.lazy(() => import('./Tooltip')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/data-display/typography',
    component: React.lazy(() => import('./Typography')),
  },
];
