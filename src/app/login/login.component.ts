/* 
The LoginComponent is responsible for handling the login functionality, including validating the form inputs, calling the login service, and navigating to the dashboard page upon successful login. 
*/

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
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService
  ) {}

  /*
The onLogin method handles the login process by checking form inputs, creating a loginData object, calling the login method from the LoginService, and handling the response.
*/

  onLogin() {
    const username = this.username;
    const password = this.password;

    console.log(username, password); // Check the form inputs. Used for log in troubleshooting. To be disabled for production.

    // Create the loginData object with the username and password.
    const loginData = { username, password };
    console.log('loginData', loginData); // Used for log in troubleshooting. To be disabled for production.

    // Reset both error and success messages
    this.errorMessage = '';
    this.successMessage = '';

    // Call the login method from the LoginService and subscribe to its response
    this.loginService.login(username, password).subscribe({
      next: (result: { id: number; username: string }) => {
        // assuming that a successful login will always return a username
        if (result.username) {
          // If login is successful, set the user ID in AuthService and navigate to the dashboard page.
          this.authService.setUserId(result.id);
          this.successMessage = 'Login successful';
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1000);
        } else {
          // If authentication failed, display an error message to the user.
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      },
      error: (error: any) => {
        console.error('Login failed: ', error);

        if (error.status === 401) {
          this.errorMessage = 'Invalid username or password.';
        } else if (error.status === 0) {
          this.errorMessage =
            'Network error. Please check your internet connection.';
        } else {
          this.errorMessage = 'Login failed. Please try again later.';
        }
      },
    });
  }
}
