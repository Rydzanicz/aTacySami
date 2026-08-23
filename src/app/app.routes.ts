import { Routes } from '@angular/router';
import { ATACYSAMI_ROUTES } from './atacysami/atacysami.routes';

export const routes: Routes = [
  ...ATACYSAMI_ROUTES,
  { path: '', redirectTo: 'atacysami', pathMatch: 'full' },
  { path: '**', redirectTo: 'atacysami' }
];
