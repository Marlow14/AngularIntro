import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from './project.model';
import { PROJECTS } from './mock-projects';

@Injectable()
export class ProjectService {
  list(): Observable<Project[]> {
    return of(PROJECTS);
  }
}
