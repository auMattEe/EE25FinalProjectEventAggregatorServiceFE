import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
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

    // Use an observer object for the subscription with tap operator
    this.authService
      .register(user)
      .pipe(
        tap((result: string) => {
          if (result === 'Registration successful') {
            this.router.navigate(['/login']);
          } else {
            this.errorMessage = 'Registration failed';
          }
        })
      )
      .subscribe();
  }
}
