import { Component } from '@angular/core';
import { EventService } from '../../Service/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent {

  eventName: string = '';
  eventStartDate: string = '';
  eventDuration: number | null = null;
  eventAddress: string = '';
  eventDescription: string = '';
  errorMessage: string = '';

  constructor(private eventService: EventService) {}

  onSubmit() {
    const eventData = {
      name: this.eventName,
      eventStart: new Date(this.eventStartDate),
      eventDuration: this.eventDuration,
      address: this.eventAddress,
      description: this.eventDescription,
    };

    // Handle form submission and send the data to the backend for event creation
    this.eventService.createEvent(eventData).subscribe(
      (response) => {
        // Handle a successful event creation (e.g., display a success message or navigate to another page)
      },
      (error) => {
        // Handle event creation error (e.g., display an error message)
        this.errorMessage = 'Event creation failed. Please try again later.';
      }
    );
  }
}
