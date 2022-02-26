import React from 'react';
import {RoutePermittedRole} from '../../../shared/constants/AppConst';

export const utilConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/click-away-listener',
    component: React.lazy(() => import('./ClickawayListener')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/modal/',
    component: React.lazy(() => import('./Modal')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/NoSSR1/',
    component: React.lazy(() => import('./NoSSR1')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/popover/',
    component: React.lazy(() => import('./Popover')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/popper/',
    component: React.lazy(() => import('./Popper')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/portal/',
    component: React.lazy(() => import('./Portal')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/textarea-autosize/',
    component: React.lazy(() => import('./Text')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/transitions/',
    component: React.lazy(() => import('./Transitions')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/utility/media-query/',
    component: React.lazy(() => import('./MediaQuery')),
  },
];
