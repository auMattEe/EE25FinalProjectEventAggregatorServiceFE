import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  // Initialize variables to store user registration data and error message
  username: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  errorMessage: string = '';

  // Constructor to inject dependencies (Router and AuthService)
  constructor(private router: Router, private authService: AuthService) {}

  // Method to handle user registration
  onRegister() {
    // Create a user object with the registration data
    const user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    };

    // Use an observer object for the subscription
    this.authService.register(user).subscribe({
      next: (result: string) => {
        // This part is called when the HTTP request is successful
        if (result === 'Registration successful') {
          // If the result is "Registration successful," it means the registration was successful and navigate the user to the login page.
          this.router.navigate(['/login']);
        } else {
          // If the result is not "Registration successful," there was an issue with registration. Set an error message to inform the user.
          this.errorMessage =
            'Registration failed. Please check your information.';
        }
      },
      error: (error: any) => {
        // This part is called when there is an error in the HTTP request
        console.error('Registration failed: ', error);
        // Log the error to the console for debugging purposes. Set an error message to inform the user that there was an issue with registration.
        this.errorMessage = 'Registration failed. Please try again later.';
      },
    });
  }
}
