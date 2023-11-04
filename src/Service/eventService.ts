import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Event } from 'src/Models/event';

// Declare this service as injectable and provide it at the root level
@Injectable({
  providedIn: 'root',
})
export class EventService {

  // Define the API server base URL by using the environment variable
  private apiServerUrl = environment.apiBaseURL;

  // Inject the HttpClient service into the service constructor
  constructor(private http: HttpClient) {}

  // Define a public method to fetch events as an Observable of Event array
  public getEvents(): Observable<Event[]> {

    // Use the HttpClient to make an HTTP GET request to the event endpoint on the API server. The backticks (`) allow for string interpolation to include the API server URL
    return this.http.get<Event[]>(`${this.apiServerUrl}/events/all`);
  }
}
