import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      const { email, password } = this.loginForm.value;
      
      this.authService.login(email, password).subscribe({
        next: (response) => {
          this.snackBar.open('Login successful', 'Close', { duration: 3000 });
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.loading = false;
          const errorMessage = error.error?.message || 'Login failed';
          this.snackBar.open(errorMessage, 'Close', { duration: 3000 });
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }
}

