import React from 'react';
import {Redirect} from 'react-router-dom';
import {RoutePermittedRole} from 'shared/constants/AppConst';

export const appsConfig = [
  {
    permittedRole: RoutePermittedRole.user,
    path: ['/apps/mail/label/:label/:id?', '/apps/mail/:folder/:id?'],
    component: React.lazy(() => import('./Mail')),
  },
  {
    path: '/apps/mail',
    component: () => <Redirect to='/apps/mail/inbox' />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: ['/apps/todo/label/:label/:id?', '/apps/todo/:folder/:id?'],
    component: React.lazy(() => import('./ToDo')),
  },
  {
    path: '/apps/todo',
    component: () => <Redirect to='/apps/todo/all' />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: ['/apps/contact/folder/:name', '/apps/contact/label/:name'],
    component: React.lazy(() => import('./Contact')),
  },
  {
    path: '/apps/contact',
    component: () => <Redirect to='/apps/contact/folder/all' />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: ['/apps/chat'],
    component: React.lazy(() => import('./Chat')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: ['/apps/scrum-board/:id', '/apps/scrum-board'],
    component: React.lazy(() => import('./ScrumBoard')),
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: ['/apps/wall'],
    component: React.lazy(() => import('./Wall')),
  },
];
