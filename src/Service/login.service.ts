import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = environment.apiBaseURL;
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Implement the logic to send a POST request to theSpring Boot API for login.
    const loginData = { username, password };
    return this.http.post(`${this.baseUrl}/login`, loginData).pipe(
      tap((response) => {
        console.log('Login Response:', response);
      }),
      catchError((error) => {
        console.error('Login Error:', error);
        throw error; // Re-throw the error to propagate it further
      })
    );
  }

  register(user: any) {
    // Implement the logic to send a POST request to the Spring Boot API for registration.
    return this.http.post<any>('/register', user);
  }
}
