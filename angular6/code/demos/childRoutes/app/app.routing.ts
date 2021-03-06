import { Routes } from '@angular/router';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
export const appRoutes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: 'movies',
    component: MovieListComponent,
    children: [
      // {path: 'detail/:id', component: MovieDetailComponent}
    ],
  },
  { path: 'movies/detail/:id', component: MovieDetailComponent },
];
