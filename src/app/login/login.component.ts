import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { LoginService } from '../../Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Initialize variables for the username, password, and error message
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Constructor to inject Router, AuthService and LoginService
  constructor(
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService
  ) {}

  // Function triggered when the login form is submitted
  onLogin() {
    // Call the login method from the AuthService and subscribe to its response
    this.loginService.login(this.username, this.password).subscribe({
      next: (result: { success: boolean; user: any }) => {
        // Check the result from your authentication service.
        if (result.success) {
          // If login is successful, set the user ID in AuthService and navigate to the dashboard page.
          this.authService.setUserId(result.user.id); // Assuming the user object returned has an 'id' property
          this.router.navigate(['/dashboard']);
        } else {
          // If authentication failed, display an error message to the user.
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      },
      error: (error: any) => {
        console.error('Login failed: ', error);

        if (error.status === 401) {
          // 401 Unauthorized status code: Invalid credentials
          this.errorMessage = 'Invalid username or password.';
        } else if (error.status === 0) {
          // 0 status code: Network error
          this.errorMessage =
            'Network error. Please check your internet connection.';
        } else {
          // Other errors
          this.errorMessage = 'Login failed. Please try again later.';
        }
      },
    });
  }
}
