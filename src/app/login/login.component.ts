import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    // Call the login method from the AuthService
    this.authService.login(this.username, this.password).subscribe({
      next: (result: { success: boolean }) => {
        // Check the result from your authentication service.
        if (result.success) {
          // Login successful, navigate to the dashboard.
          this.router.navigate(['/dashboard']);
        } else {
          // Authentication failed, display an error message to the user.
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      },
      error: (error: any) => {
        // Handle errors
        console.error('Login failed: ', error);
        this.errorMessage = 'Login failed. Please try again later.';
      },
    });
  }
}
