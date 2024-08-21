import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'destination',
    loadComponent: () =>
      import('./pages/destination/destination.component').then(
        (m) => m.DestinationComponent
      ),
  },
  {
    path: 'crew',
    loadComponent: () =>
      import('./pages/crew/crew.component').then((m) => m.CrewComponent),
  },
  {
    path: 'technology',
    loadComponent: () =>
      import('./pages/technology/technology.component').then(
        (m) => m.TechnologyComponent
      ),
  },
];
