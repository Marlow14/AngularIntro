import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ProjectListComponent } from './projects/project-list/project-list.component';

const appRoutes: Routes =[
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
{
  path:'home', component: HomeComponent
},
// {
//   path: 'projects', component: ProjectListComponent
// }
]

export const appRoutingModule = RouterModule.forRoot(appRoutes, {useHash: true});
