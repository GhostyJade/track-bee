import React from 'react';
import {RoutePermittedRole} from 'shared/constants/AppConst';

export const extraPagesConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/my-account',
    component: React.lazy(() => import('./Account')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/about-us',
    component: React.lazy(() => import('./AboutUs')),
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/knowledge-base',
    component: React.lazy(() => import('./KnowledgeBase')),
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/portfolio',
    component: React.lazy(() => import('./Portfolio')),
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/faq',
    component: React.lazy(() => import('./FAQ')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/contact-us',
    component: React.lazy(() => import('./ContactUs')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/extra-pages/pricing',
    component: React.lazy(() => import('./Pricing')),
  },
];
