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
  message: string = '';

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
      next: (response: any) => {
        this.message = response.message;
        if (response.success) {
          // Registration was successful, navigate to login page after a short delay
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000); // 1-second delay
        }
      },
      error: (error) => {
        console.error('Registration failed:', error);
        this.message = 'Registration failed. Please try again later.';
      },
    });
  }
}
