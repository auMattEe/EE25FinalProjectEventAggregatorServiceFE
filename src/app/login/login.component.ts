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

  // Constructor to inject Router and AuthService
  constructor(private router: Router, private authService: AuthService, private loginService: LoginService) {}

  // Function triggered when the login form is submitted
  onLogin() {

    // Call the login method from the AuthService and subscribe to its response
    this.loginService.login(this.username, this.password).subscribe({
      next: (result: { success: boolean }) => {

        // Check the result from your authentication service.
        if (result.success) {

          // If login is successful, navigate to the dashboard page.
          this.router.navigate(['/dashboard']);
        } else {

          // If authentication failed, display an error message to the user.
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      },
      error: (error: any) => {

        // Handle errors and log them to the console
        console.error('Login failed: ', error);
        
        // Set an error message for the user
        this.errorMessage = 'Login failed. Please try again later.';
      },
    });
  }
}
