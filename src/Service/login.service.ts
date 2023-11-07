import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = environment.apiBaseURL;

  constructor(private http: HttpClient, private authService: AuthService) {}

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
  
    return this.http.post(`${this.baseUrl}/events/login`, loginData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Login Request Error:', error);
        return throwError(error);
      }),
      tap((response: any) => {
        if (response && response.username) { // check the username only
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