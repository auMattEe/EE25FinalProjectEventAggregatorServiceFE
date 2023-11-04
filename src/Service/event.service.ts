import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Event } from 'src/Models/event.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiServerUrl = environment.apiBaseURL;

  constructor(private http: HttpClient) {}

  // Define a method to get all events
  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiServerUrl}/events/all`);
  }

  // Define a method to get created events for a user
  public getCreatedEvents(userId: string): Observable<Event[]> {
    // Make an HTTP GET request to fetch created events for the user
    return this.http.get<Event[]>(
      `${this.apiServerUrl}/events/created/${userId}`
    );
  }

  // Define a method to get attending events for a user
  public getAttendingEvents(userId: string): Observable<Event[]> {
    // Make an HTTP GET request to fetch attending events for the user
    return this.http.get<Event[]>(
      `${this.apiServerUrl}/events/attending/${userId}`
    );
  }
}
