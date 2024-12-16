import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Timelog {
  _id?: string;
  date: string; // ISO date
  project: string;
  task: string;
  hours: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TimelogService {

  private apiUrl = 'http://localhost:5000/api/timelogs';

  constructor(private http: HttpClient) { }

  // Create a new timelog
  createTimelog(timelog: Timelog): Observable<Timelog> {
    return this.http.post<Timelog>(`${this.apiUrl}`, timelog);
  }

  // Get all timelogs
  getTimelogs(): Observable<Timelog[]> {
    return this.http.get<Timelog[]>(`${this.apiUrl}`);
  }

  // Get timelogs by time filter
  getTimelogsByFilter(filter: string): Observable<Timelog[]> {
    return this.http.get<Timelog[]>(`${this.apiUrl}?filter=${filter}`);
  }
}
