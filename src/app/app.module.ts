import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventComponent } from './event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Create an Angular module for your application
@NgModule({
  // Declare the components that belong to this module
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    EventComponent,
    DashboardComponent,
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
