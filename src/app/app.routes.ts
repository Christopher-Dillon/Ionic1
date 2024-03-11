import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'ulster',
    loadComponent: () => import('./ulster/ulster.page').then( m => m.UlsterPage)
  },
  {
    path: 'munster',
    loadComponent: () => import('./munster/munster.page').then( m => m.MunsterPage)
  },
  {
    path: 'connacht',
    loadComponent: () => import('./connacht/connacht.page').then( m => m.ConnachtPage)
  },
  {
    path: 'lenster',
    loadComponent: () => import('./lenster/lenster.page').then( m => m.LensterPage)
  },
  {
    path: 'connacht-counties',
    loadComponent: () => import('./connacht-counties/connacht-counties.page').then( m => m.ConnachtCountiesPage)
  },
  {
    path: 'lenster-counties',
    loadComponent: () => import('./lenster-counties/lenster-counties.page').then( m => m.LensterCountiesPage)
  },
];
