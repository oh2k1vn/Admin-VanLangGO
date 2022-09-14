import * as React from 'react';
import {
  Category,
  Chat,
  Dashboard,
  Login,
  Order,
  Product,
  Promotion,
  Response,
  Setting,
  Store,
  User,
} from '~/Pages';
import { routes } from './route';

export function ProtectedRoute({ children }: any) {
  return <>{children}</>;
}

const publicRouters = [
  { path: routes.dashboard, component: Dashboard },
  { path: routes.category, component: Category },
  { path: routes.chat, component: Chat },
  { path: routes.order, component: Order },
  { path: routes.promotion, component: Promotion },
  { path: routes.setting, component: Setting },
  { path: routes.store, component: Store },
  { path: routes.user, component: User },
  { path: routes.product, component: Product },
  { path: routes.response, component: Response },
  { path: routes.login, component: Login, layout: null },
];

export { publicRouters };
