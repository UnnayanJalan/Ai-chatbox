import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators,} from '@angular/forms';

import { Router, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from '../components/auth-layout/auth-layout.component';
import { AuthCardComponent } from '../components/auth-card/auth-card.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthLayoutComponent,
    AuthCardComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  hidePassword = true;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ],
      ],
      rememberMe: [false],
    });
  }

  togglePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.loading = false;

        // Update with your dashboard route
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}