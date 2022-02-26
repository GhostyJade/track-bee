import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppConst';

export const ecommerceConfig = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/ecommerce/invoice-1',
    component: React.lazy(() => import('./Invoice1')),
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/ecommerce/invoice-2',
    component: React.lazy(() => import('./Invoice2')),
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/ecommerce/invoice-3',
    component: React.lazy(() => import('./Invoice3')),
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/ecommerce/products',
    component: React.lazy(() => import('./Products')),
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/ecommerce/product_detail/:id?',
    component: React.lazy(() => import('./ProductDetail')),
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/ecommerce/customers',
    component: React.lazy(() => import('./Customers')),
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/ecommerce/checkout',
    component: React.lazy(() => import('./Checkout')),
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/ecommerce/cart',
    component: React.lazy(() => import('./Carts')),
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/ecommerce/orders',
    component: React.lazy(() => import('./Orders')),
  },

  {
    permittedRole: RoutePermittedRole.user,
    path: '/ecommerce/confirmation',
    component: React.lazy(() => import('./Confirmation')),
  },
];
