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
      next: (result: { success: boolean }) => {

        // Check the result from your authentication service.
        if (result.success) {

          // Registration successful, navigate to the login page.
          this.router.navigate(['/login']);
        } else {

          // Registration failed, display an error message to the user.
          this.errorMessage =
            'Registration failed. Please check your information.';
        }
      },
      error: (error: any) => {
        
        // Handle network or other errors
        console.error('Registration failed: ', error);
        this.errorMessage = 'Registration failed. Please try again later.';
      },
    });
  }
}
