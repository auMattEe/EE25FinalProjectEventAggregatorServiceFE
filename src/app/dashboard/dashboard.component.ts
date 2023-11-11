/* 
The DashboardComponent class is responsible for fetching and storing created and attending events for a user. 
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../Models/event.model';
import { EventService } from '../../Service/event.service';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // Define the types
  createdEvents: Event[] = [];
  attendingEvents: Event[] = [];

  constructor(
    private eventService: EventService,
    private router: Router,
    private authService: AuthService
  ) {}

  /*
The ngOnInit method fetches the created and attending events for a user using the getCreatedEvents and getAttendingEvents methods of the EventService class.
*/

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      console.error('User is not logged in.');
      this.router.navigate(['/login']);
      return;
    }

    const userId = this.authService.getUserId();

    this.eventService.getCreatedEvents(userId).subscribe(
      (events: Event[]) => {
        this.createdEvents = events;
      },
      (error: any) => {
        console.error('Failed to fetch created events:', error);
      }
    );

    this.eventService.getAttendingEvents(userId).subscribe(
      (events: Event[]) => {
        this.attendingEvents = events;
      },
      (error: any) => {
        console.error('Failed to fetch attending events:', error);
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
