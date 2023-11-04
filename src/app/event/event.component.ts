import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/Service/eventService';
import { Event } from 'src/Models/event';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  // Define the component's selector, HTML template, and styles
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {

  // Define a public variable to store the list of events
  public events: Event[] | undefined;

  // Constructor for the EventComponent
  constructor(private eventService: EventService) {}

  // Define a title for the component
  title = 'eventmanagerapp';

  // Initialize the component when it is created
  ngOnInit() {

    // Call the 'getEvents' method to fetch and display events
    this.getEvents();
  }

  // Method to retrieve and store events from the service
  public getEvents(): void {

    // Call the 'getEvents' method from the 'eventService' and subscribe to the response
    this.eventService.getEvents().subscribe(

      // If the request is successful, store the events in 'this.events' and log them
      (response: Event[]) => {
        this.events = response;
        console.log(this.events);
      },
      
      // If there is an error in the HTTP request, display an alert with the error message
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
