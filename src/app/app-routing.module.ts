import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

// Define the routes for your application
const routes: Routes = [
  { path: 'events', component: EventComponent }, // Events page route
  { path: 'login', component: LoginComponent }, // Login page route
  { path: 'register', component: RegistrationComponent }, // Registration page route
];

// Create an Angular module for routing
@NgModule({
  
  // Import the configured routes into the module
  imports: [RouterModule.forRoot(routes)],

  // Export the configured RouterModule for use in other parts of the application
  exports: [RouterModule],
})
export class AppRoutingModule {}
