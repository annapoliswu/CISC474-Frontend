import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private path="http://localhost:3000/api/projects/"
  constructor(private http:HttpClient) { }

  getProjects(): Observable<any>{
    return this.http.get(this.path+'semesters');
  }
}
