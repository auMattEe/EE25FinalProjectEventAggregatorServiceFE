/* 
The DashboardComponent class is responsible for fetching and storing created and attending events for a user. 
*/

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

  constructor(private eventService: EventService, private router: Router) {}

  /*
The ngOnInit method fetches the created and attending events for a user using the getCreatedEvents and getAttendingEvents methods of the EventService class.
*/

  ngOnInit(): void {
    this.eventService.getCreatedEvents('').subscribe((events: Event[]) => {
      this.createdEvents = events;
    });

    this.eventService.getAttendingEvents('').subscribe((events: Event[]) => {
      this.attendingEvents = events;
    });
  }
}
