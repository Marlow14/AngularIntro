import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { PROJECTS } from './mock-projects';
import { Observable, of } from 'rxjs';
import { Logger } from '../../shared/logger.service';

@Injectable()
export class ProjectService {
  constructor(private logger: Logger) {
    if (this.logger) {
      this.logger.log('In the project service constructor.');
    }
  }

  list(): Observable<Project[]> {
    return of(PROJECTS);
  }
}
