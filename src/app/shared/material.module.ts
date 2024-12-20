import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { GoogleButtonComponent } from '../components/google-button/google-button.component';
import { FbButtonComponent } from '../components/fb-button/fb-button.component';

@NgModule({
  imports: [
    CommonModule,
    GoogleButtonComponent,
    FbButtonComponent
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    GoogleButtonComponent,
    FbButtonComponent
  ]
})
export class MaterialModule { }
