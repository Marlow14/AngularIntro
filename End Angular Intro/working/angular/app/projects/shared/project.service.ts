import { Injectable, Inject} from '@angular/core';
// import { Observable, of} from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import { Project} from './project.model';
import {PROJECTS} from './mock-projects';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
}

@Injectable({
  providedIn: 'root',
})

export class ProjectService{

  private projectsUrl = 'http://localhost:3000/projects/';

  constructor(private http: HttpClient){}

list(): Observable<Project[]>{
  return this.http.get<Project[]>(this.projectsUrl).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(error);
      return throwError('An error occurred loading the projects.');
    })
  );
}

put(project:Project): Observable<Project>{
  const url = this.projectsUrl + project.id;
  return this.http.put<Project>(url, project, httpOptions).pipe(
    catchError((error: HttpErrorResponse) => {
      return throwError('An error occured updating the project.')
    })
  )
}

delete(project: Project): Observable<Project>{
  const url = this.projectsUrl + project.id;
  return this.http.delete<Project>(url, httpOptions).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(error);
      return throwError('An error occured deleting the project.');
    })
  );

}

find(id:number): Observable<Project>{
  const url = this.projectsUrl + id;
  return this.http.get<Project>(url);
}

  // list(): Observable<Project[]>{
  //   return of(PROJECTS);
  // }
}


