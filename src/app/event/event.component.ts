/* 
The EventComponent class is responsible for fetching and displaying events from the EventService. 
*/

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/Models/event.model';
import { EventService } from 'src/Service/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  public events: Event[] | undefined;

  title = 'eventmanagerapp';

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.getEvents();
  }

  /*
The getEvents method makes a request to retrieve events, stores the response in this.events, and logs them, or displays an alert with the error message if there is an error.
*/

  public getEvents(): void {
    this.eventService.getEvents().subscribe(
      (response: Event[]) => {
        this.events = response;
        console.log(this.events);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /*
The goToDashboard method navigates to the /dashboard page.
*/

  public goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
