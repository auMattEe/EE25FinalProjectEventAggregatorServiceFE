import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateEventComponent } from './create-event/create-event.component';

// Create an Angular module for your application
@NgModule({
  // Declare the components that belong to this module
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    EventComponent,
    DashboardComponent,
    CreateEventComponent
  ],

  // Import external modules that your application relies on
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],

  // Providers (services) can be added if needed
  providers: [],

  // Define the root component of the application
  bootstrap: [AppComponent],
})
export class AppModule {}
