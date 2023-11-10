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
    if (this.authService.isLoggedIn()) {
      const userId = this.authService.getUserId();

      this.eventService
        .getCreatedEvents(userId)
        .subscribe((events: Event[]) => {
          this.createdEvents = events;
        });

      this.eventService
        .getAttendingEvents(userId)
        .subscribe((events: Event[]) => {
          this.attendingEvents = events;
        });
    } else {
      // Handle the case where the user is not logged in
      console.error('User is not logged in.');

      // Redirect to the login page
      this.router.navigate(['/login']);
    }
  }
}
