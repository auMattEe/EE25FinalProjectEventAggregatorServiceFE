import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiBaseURL;
  public isAuthenticated: boolean = false; // Manages the user's authentication status in the service.
  private userId!: string; // Add the definite assignment assertion

  constructor(private http: HttpClient) {}

  // Set the user ID when the user logs in
  setUserId(userId: string) {
    this.userId = userId;
  }

  // Get the user ID
  getUserId(): string {
    return this.userId;
  }

  // A function to handle both login and registration based on the provided endpoint.
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

  // A function to check if the user is authenticated.
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // A function to log the user out.
  logout(): void {
    this.isAuthenticated = false;
  }

  // A function to log the user in using the provided HttpClient.
  login(username: string, password: string): Observable<any> {
    return this.auth(username, password, '/events/login');
  }

  // A function to register a user using the provided HttpClient.
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/events/register`, user);
  }
}
