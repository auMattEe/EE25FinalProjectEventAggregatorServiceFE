// Import necessary modules and components from Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventComponent } from './event/event.component';
import { HttpClientModule } from '@angular/common/http';

// Create an Angular module for your application
@NgModule({

  // Declare the components that belong to this module
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    EventComponent,
  ],

  // Import external modules that your application relies on
  imports: [
    BrowserModule, // For running the app in a web browser
    AppRoutingModule, // For routing configuration
    HttpClientModule, // For making HTTP requests
  ],

  // Providers (services) can be added here if needed
  providers: [],
  
  // Define the root component of your application
  bootstrap: [AppComponent],
})
export class AppModule {}
