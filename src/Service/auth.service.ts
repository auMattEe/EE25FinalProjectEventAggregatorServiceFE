/* 
The AuthService class is responsible for handling authentication and authorization functionality. This is only partially implemented due to time constraints and troubleshooting.
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiBaseURL;
  private token: string = '';
  private userId!: number;
  public isAuthenticated: boolean = false;

  constructor(private http: HttpClient) {}

  setToken(token: string = ''): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  // Set the user ID when the user logs in
  setUserId(userId: number = 0): void {
    this.userId = userId;
  }

  // Get the user ID
  getUserId(): number {
    return this.userId;
  }

  auth(username: string, password: string, endpoint: string): Observable<any> {
    const userData = { username, password };
    return this.http.post(`${this.baseUrl}/${endpoint}`, userData);
  }

  // Set isAuthenticated to true if the user is authenticated
  setAuthenticated() {
    this.isAuthenticated = true;
  }

  // Check if the user is authenticated
  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  // A function to check if the user is logged in. This is essentially a duplicate of the above and should be consolidated into a single function. Will be implemented if time permits.
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Logout not yet implemented.
  logout(): void {
    this.isAuthenticated = false;
  }

  // A function to log the user in
  login(username: string, password: string): Observable<any> {
    return this.auth(username, password, '/events/login');
  }

  // A function to register a user
  register(user: any): Observable<any> {
    const userData = {
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
    return this.http.post(`${this.baseUrl}/events/register`, userData);
  }
}
