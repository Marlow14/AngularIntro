import { HomeComponent } from './home/home.component';
import { Routes, Router, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'projects',
    loadChildren: 'app/projects/projects.module#ProjectsModule',
  },
];

export const appRoutingModule = RouterModule.forRoot(appRoutes, {
  useHash: true,
});
