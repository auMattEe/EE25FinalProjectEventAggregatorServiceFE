/* 
The EventService class is responsible for making HTTP requests to fetch and creating events. 
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/Models/event.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiServerUrl = environment.apiBaseURL;

  constructor(private http: HttpClient) {}

  /* 
The getEvent method is responsible for making an GET request to fetch all events. It returns an array of Event objects. 
*/

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiServerUrl}/events/all`);
  }

  /*
The getCreatedEvents method makes a GET request to fetch created events for a specific user.
*/

  public getCreatedEvents(userId: number): Observable<Event[]> {
    return this.http.get<Event[]>(
      `${this.apiServerUrl}/events/created/${userId}`
    );
  }

  /*
The function getAttendingEvents method makes a GET request to fetch attending events for a user.
*/

  public getAttendingEvents(userId: number): Observable<Event[]> {
    return this.http.get<Event[]>(
      `${this.apiServerUrl}/events/attending/${userId}`
    );
  }

  /*
The createEvent method sends a POST request to the server with the provided event data for creating a new event. 
*/
  public createEvent(eventData: any) {
    return this.http.post(`${this.apiServerUrl}/events/create`, eventData);
  }
}
