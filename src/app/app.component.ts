import { Component } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';

@Component({
  selector: 'app-root',
  template: `<app-welcome></app-welcome>`,
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [WelcomeComponent]
})
export class AppComponent {}
