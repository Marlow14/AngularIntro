import { ProjectListComponent } from './project-list/project-list.component';
import { Routes, RouterModule } from '@angular/router';

const projectRoutes: Routes = [
  { path: 'projects', component: ProjectListComponent },
];

export const projectsRoutingModule = RouterModule.forChild(projectRoutes);
