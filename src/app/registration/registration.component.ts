/* 
The RegistrationComponent is responsible for handling user registration by sending the registration data to the server and navigating to the login page upon successful registration. 
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})

// Initialize variables to store user registration data and error message
export class RegistrationComponent {
  username: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  /* 
The onRegister method is responsible for handling the user registration process. It creates a user object using the registration data entered by the user. This user object is then passed to the register method of the
authService (currently disabled due to time constraints and troubleshooting) to send the registration data to the server for storing. 
*/

  onRegister() {
    // Create a user object with the registration data
    const user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    };

    /* 
    Use an observer object for the subscription to the register method of the authService and wait for the response.
    */

    this.authService.register(user).subscribe({
      next: (response: any) => {
        this.errorMessage = response.errorMessage; // This line may not be required.
        if (response.success) {
          // Registration was successful, navigate to login page after a short delay
          this.successMessage = 'Registration successful';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000); // 1-second delay
        }
      },
      error: (error) => {
        console.error('Registration failed:', error);
        this.errorMessage = 'Registration failed. Please try again later.';
      },
    });
  }
}
