/* 
The LoginService class is responsible for handling login requests and managing the authentication. Authentication was disabled due to troubleshooting and time constraints.
*/

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = environment.apiBaseURL;

  constructor(private http: HttpClient, private authService: AuthService) {}

  /*
The login function takes a username and password, sends a POST request to the server with the login data, and returns an Observable that returns the server response.
*/

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };

    return this.http.post(`${this.baseUrl}/events/login`, loginData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Login Request Error:', error);
        return throwError(error);
      }),
      tap((response: any) => {
        if (response && response.username) {
          // Only checks the username
          console.log('Login Successful:', response);
          this.authService.setUserId(response.id);
        } else {
          console.error('Login failed: Invalid response', response);
          throw new Error('Login failed: Invalid response');
        }
      })
    );
  }
}
