import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';

// Define the routes for your application
const routes: Routes = [{ path: 'events', component: EventComponent }];

// Create an Angular module for routing
@NgModule({

  // Import the configured routes into the module
  imports: [RouterModule.forRoot(routes)],

  // Export the configured RouterModule for use in other parts of the application
  exports: [RouterModule],
})
export class AppRoutingModule {}
