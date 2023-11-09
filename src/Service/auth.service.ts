/* 
The AuthService class is responsible for handling authentication and authorization functionality. This has been disabled due to time constraints and troubleshooting.
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

  setUserId(userId: number = 0): void {
    this.userId = userId;
  }

  getUserId(): number {
    return this.userId;
  }

  auth(username: string, password: string, endpoint: string): Observable<any> {
    const userData = { username, password };
    return this.http.post(`${this.baseUrl}/${endpoint}`, userData);
  }

  setAuthenticated() {
    this.isAuthenticated = true;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  login(username: string, password: string): Observable<any> {
    return this.auth(username, password, 'login');
  }

  register(user: any): Observable<any> {
    return this.auth(user.username, user.password, 'register');
  }
}
