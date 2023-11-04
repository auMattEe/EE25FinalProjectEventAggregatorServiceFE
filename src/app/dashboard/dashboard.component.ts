import { Component, OnInit } from '@angular/core';
import { EventService } from '../../Service/event.service';
import { Event } from '../../Models/event.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  createdEvents: Event[] = []; // Define the type for createdEvents
  attendingEvents: Event[] = []; // Define the type for attendingEvents

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    // Fetch created and attending events for the logged-in user
    const userId = 'your-user-id'; // Replace with the actual user ID

    this.eventService.getCreatedEvents(userId).subscribe((events: Event[]) => {
      this.createdEvents = events;
    });

    this.eventService
      .getAttendingEvents(userId)
      .subscribe((events: Event[]) => {
        this.attendingEvents = events;
      });
  }
}
