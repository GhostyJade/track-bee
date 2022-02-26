import React from 'react';
import {RoutePermittedRole} from 'shared/constants/AppConst';

export const dashBoardConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/dashboards/academy',
    component: React.lazy(() => import('./Academy')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/dashboards/analytics',
    component: React.lazy(() => import('./Analytics')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/dashboards/e-commerce',
    component: React.lazy(() => import('./ECommerce')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/dashboards/crm',
    component: React.lazy(() => import('./CRM')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/dashboards/health-care',
    component: React.lazy(() => import('./HealthCare')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/dashboards/crypto',
    component: React.lazy(() => import('./Crypto')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/dashboards/metrics',
    component: React.lazy(() => import('./Metrics')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/dashboards/widgets',
    component: React.lazy(() => import('./Widgets')),
  },
];
