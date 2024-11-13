import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./Partials/home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'favorite',
    loadComponent: () =>
      import('./Partials/favorites/favorites.component').then((x) => x.FavoritesComponent),
  },
  {
    path: 'favorite/detail/:id',
    loadComponent: () =>
      import('./Partials/favorites/favorites-detail/favorites-detail.component').then((x) => x.FavoritesDetailComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];
