import {dateConfigs} from './dateTime';
import {RoutePermittedRole} from '../../../shared/constants/AppConst';
import React from 'react';

export const labConfigs = [
  ...dateConfigs,

  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/lab/masonry',
    component: React.lazy(() => import('./Masonry')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/lab/timeline',
    component: React.lazy(() => import('./Timeline')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/lab/trap-focus',
    component: React.lazy(() => import('./TrapFocus')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/lab/tree-view',
    component: React.lazy(() => import('./TreeView')),
  },
];
