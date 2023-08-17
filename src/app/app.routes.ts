import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout';

export const routes: Routes = [
  { path: '', component: AuthLayoutComponent, loadChildren: () => import('./pages/auth/routes').then( r => r.routes) },
];
