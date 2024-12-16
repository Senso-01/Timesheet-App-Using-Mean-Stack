import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = 'http://localhost:5000/api/projects';

  constructor(private http: HttpClient) {}

  getProjects() {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  addProject(projectData: any) {
    return this.http.post(`${this.baseUrl}`, projectData);
  }

  updateProject(projectId: string, projectData: any) {
    return this.http.put(`${this.baseUrl}/${projectId}`, projectData);
  }

  deleteProject(projectId: string) {
    return this.http.delete(`${this.baseUrl}/${projectId}`);
  }

  assignUsersToProject(projectId: string, userIds: string[]) {
    return this.http.post(`${this.baseUrl}/${projectId}/assign-users`, { userIds });
  }

  getUsers() {
    return this.http.get<any[]>('http://localhost:5000/api/users');
  }
}