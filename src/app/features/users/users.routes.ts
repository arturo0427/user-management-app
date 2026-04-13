import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/users-page/users-page').then((m) => m.UsersPage),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/users-detail-page/users-detail-page').then((m) => m.UsersDetailPage),
  },
];
