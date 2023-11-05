import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../Models/event.model';
import { AuthService } from '../../Service/auth.service';
import { EventService } from '../../Service/event.service';

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
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check if the user is authenticated
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
