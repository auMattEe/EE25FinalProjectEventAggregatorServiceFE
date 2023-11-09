/* 
The AuthGuard class is a service that checks if a user is authenticated and allows or prevents access to certain routes accordingly. This has been disabled due to time constraints and troubleshooting.
*/

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  /* 
The canActivate method checks if the user is logged in and either allows access or redirects to the login page.
*/

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
