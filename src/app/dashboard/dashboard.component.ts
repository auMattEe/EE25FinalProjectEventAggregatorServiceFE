import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../Models/event.model';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    // You can directly fetch the events without authentication
    this.eventService
      .getCreatedEvents('')
      .subscribe((events: Event[]) => {
        this.createdEvents = events;
      });

    this.eventService
      .getAttendingEvents('')
      .subscribe((events: Event[]) => {
        this.attendingEvents = events;
      });
  }
}
