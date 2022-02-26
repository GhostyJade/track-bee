import React from 'react';
import {RoutePermittedRole} from '../../../shared/constants/AppConst';

export const inputsConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/autocomplete',
    component: React.lazy(() => import('./AutoComplete')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/buttons',
    component: React.lazy(() => import('./Buttons')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/button-group',
    component: React.lazy(() => import('./ButtonGroup')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/checkboxes',
    component: React.lazy(() => import('./Checkboxes')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/floating-action-button',
    component: React.lazy(() => import('./FloatingActionButton')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/radios',
    component: React.lazy(() => import('./Radio')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/rating',
    component: React.lazy(() => import('./Rating')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/selects',
    component: React.lazy(() => import('./Selects')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/slider',
    component: React.lazy(() => import('./Slider')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/switches',
    component: React.lazy(() => import('./Switches')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/text-fields',
    component: React.lazy(() => import('./TextField')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/transfer-list',
    component: React.lazy(() => import('./TransferList')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/inputs/toggle-buttons',
    component: React.lazy(() => import('./ToggleButtons')),
  },
];
