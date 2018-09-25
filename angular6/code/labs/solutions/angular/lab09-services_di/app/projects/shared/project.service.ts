import { Injectable } from '@angular/core';

import { Project } from './project.model';
import { PROJECTS } from './mock-projects';
import { Observable, of } from 'rxjs';


@Injectable()
export class ProjectService {
  list(): Observable<Project[]> {
    return of(PROJECTS);
  }
}
