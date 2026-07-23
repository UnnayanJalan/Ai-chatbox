import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, } from '@angular/forms';

import { Router, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from '../components/auth-layout/auth-layout.component';
import { AuthCardComponent } from '../components/auth-card/auth-card.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthLayoutComponent,
    AuthCardComponent,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  hidePassword = true;
  hideConfirmPassword = true;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        fullName: ['', Validators.required],
        companyName: [''],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [Validators.required, Validators.minLength(6)],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  passwordMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;

    return password === confirm ? null : { passwordMismatch: true };
  }

  register(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.authService.register(
      this.registerForm.value
    ).subscribe({
      next: () => {
        this.loading = false;
        alert(
          'Registration Successful'
        );
        this.router.navigate([
          '/auth/login'
        ]);
      },

      error: (error) => {
        this.loading = false;
        alert(
          error.error?.detail ??
          'Registration Failed'
        );
      }
    });
  }
}