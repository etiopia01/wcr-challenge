import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true,
  imports: [
    MaterialModule,
    LoginComponent,
    SignupComponent
  ]
})
export class WelcomeComponent {}

