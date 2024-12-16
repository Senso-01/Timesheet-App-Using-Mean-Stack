import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }

    this.authService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        this.authService.logon('sampleAuthToken123'); // Simulated token
        // Navigate based on user role
        const role = response.role; // Expecting role to be returned by the backend
        this.router.navigate([role === 'Admin' ? '/admin' : '/user']);
      },
      error: (err) => {
        console.error('Login error:', err);
        this.errorMessage = err.error.message || 'Invalid username or password';
      },
    });
  }
}