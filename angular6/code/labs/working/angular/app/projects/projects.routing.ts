import { Routes, RouterModule} from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const projectRoutes: Routes = [
  {
    path: 'projects',
    component: ProjectListComponent,
  },
  {
    path:'projects/:id', component: ProjectDetailComponent
  }
]

export const projectsRoutingModule = RouterModule.forChild(projectRoutes);

