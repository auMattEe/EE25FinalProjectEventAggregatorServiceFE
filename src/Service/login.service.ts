import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {

    // Implement the logic to send a POST request to your Spring Boot API for login.
    const loginData = { username, password };
    return this.http.post<any>('/login', loginData);
  }

  register(user: any) {
    
    // Implement the logic to send a POST request to your Spring Boot API for registration.
    return this.http.post<any>('/register', user);
  }
}
