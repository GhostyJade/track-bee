import React from 'react';
import {RoutePermittedRole} from '../../../shared/constants/AppConst';

export const feedbackConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/feedback/alert',
    component: React.lazy(() => import('./Alert')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/feedback/backdrop',
    component: React.lazy(() => import('./Backdrop')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/feedback/dialog',
    component: React.lazy(() => import('./Dialog')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/feedback/progress',
    component: React.lazy(() => import('./Progress')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/feedback/skeleton',
    component: React.lazy(() => import('./Skeleton')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/feedback/snackbars',
    component: React.lazy(() => import('./Snackbar')),
  },
];
