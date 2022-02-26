import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppConst';

export const userListConfig = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/list-type/flat',
    component: React.lazy(() => import('./Flat/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/list-type/morden',
    component: React.lazy(() => import('./Morden/index')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/list-type/standard',
    component: React.lazy(() => import('./Standard/index')),
  },
];
