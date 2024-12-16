import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

interface LoginResponse {
  success: boolean;
  message: string;
  role: string; // Add `role` property
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/users'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken'); // Example: Check token in localStorage
    return !!token; // Returns true if token exists
  }

  // Simulated login method
  logon(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Simulated logout method
  logout(): void {
    localStorage.removeItem('authToken');
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
}
