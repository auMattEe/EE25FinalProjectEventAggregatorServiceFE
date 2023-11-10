/* 
The CreateEventComponent class is responsible for handling the creation of events.
*/

import { Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { EventService } from '../../Service/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent {
  name: string = '';
  eventStart: string = '';
  eventDuration: string = '';
  address: string = '';
  description: string = '';
  errorMessage: string = '';

  constructor(private eventService: EventService) {}

  onSubmit() {
    const eventData = {
      name: this.name,
      eventStart: this.eventStart,
      eventDuration: this.eventDuration,
      address: this.address,
      description: this.description,
    };

    // Handle form submission and send the data to the backend for event creation.

    this.eventService
      .createEvent(eventData)
      .pipe(
        switchMap((response) => {
          return of(response);
        }),
        catchError((error) => {
          this.errorMessage = 'Event creation failed. Please try again later.';
          return of(error);
        })
      )
      .subscribe();
  }
}
