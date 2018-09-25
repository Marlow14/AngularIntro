import { HomeComponent } from './home/home.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { Routes, Router, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectListComponent },
];

export const appRoutingModule = RouterModule.forRoot(appRoutes, {
  useHash: true,
});
