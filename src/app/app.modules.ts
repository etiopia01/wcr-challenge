import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { MatTabsModule } from '@angular/material/tabs';  // Import Material Tabs
import { MatFormFieldModule } from '@angular/material/form-field';  // Import Material Form Field
import { MatInputModule } from '@angular/material/input';  // Import Material Input
import { MatButtonModule } from '@angular/material/button';  // Import Material Buttons

import { FormsModule } from '@angular/forms';  // Required for ngModel

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, // For Two-way Binding with ngModel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
