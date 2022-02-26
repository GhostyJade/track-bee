import React from 'react';
import {RoutePermittedRole} from 'shared/constants/AppConst';

export const dateConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/lab/date-time/date-picker',
    component: React.lazy(() => import('./DatePicker')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/lab/date-time/date-range-picker',
    component: React.lazy(() => import('./DateRangePicker')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/lab/date-time/date-time-picker',
    component: React.lazy(() => import('./DateTimePicker')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/mui/lab/date-time/time-picker',
    component: React.lazy(() => import('./TimePicker')),
  },
];
