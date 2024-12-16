import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../taskmanagement/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/api/tasks';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Create a new task
  createTask(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/`, task);
  }

  updateTask(taskId: string, task: any) {
    return this.http.put(`${this.apiUrl}/${taskId}`, task);
  }

  deleteTask(taskId: string) {
    return this.http.delete(`${this.apiUrl}/${taskId}`);
  }
}
