import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  getProjects():Observable<object>
  {
    return this.http.get("http://localhost:3050/projects");
  }
}
