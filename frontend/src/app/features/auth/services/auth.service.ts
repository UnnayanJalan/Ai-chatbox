import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of, delay, tap } from 'rxjs';

import { LoginRequest, LoginResponse } from '../models/login.model';
import {
  RegisterRequest,
  RegisterResponse,
} from '../models/register.model';
import { AuthUser } from '../models/auth-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly STORAGE_KEY = 'ai-chat-auth';

  private readonly currentUserSubject =
    new BehaviorSubject<AuthUser | null>(this.loadUser());

  currentUser$ = this.currentUserSubject.asObservable();

  private readonly isAuthenticatedSubject =
    new BehaviorSubject<boolean>(!!this.loadUser());

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {}

  login(payload: LoginRequest): Observable<LoginResponse> {
    const mockUser: AuthUser = {
      id: crypto.randomUUID(),
      fullName: 'Admin User',
      email: payload.email,
      role: 'Admin',
      avatar: '',
      isActive: true,
      lastLogin: new Date(),
      createdAt: new Date(),
    };

    const response: LoginResponse = {
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
      expiresIn: 3600,
      user: mockUser,
    };

    return of(response).pipe(
      delay(1200),
      tap((res) => {
        this.currentUserSubject.next(res.user);
        this.isAuthenticatedSubject.next(true);

    //     return this.http.post<LoginResponse>(
    //     '/api/auth/login',
    //     payload
    // );

        if (payload.rememberMe) {
          localStorage.setItem(
            this.STORAGE_KEY,
            JSON.stringify(res.user)
          );
        }
      })
    );
  }

  register(
    payload: RegisterRequest
  ): Observable<RegisterResponse> {
    const user: AuthUser = {
      id: crypto.randomUUID(),
      fullName: payload.fullName,
      email: payload.email,
      role: 'Admin',
      avatar: '',
      isActive: true,
      createdAt: new Date(),
    };

    const response: RegisterResponse = {
      success: true,
      message: 'Registration successful.',
      user,
    };

    return of(response).pipe(delay(1500));
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);

    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): AuthUser | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  private loadUser(): AuthUser | null {
    const user = localStorage.getItem(this.STORAGE_KEY);

    if (!user) {
      return null;
    }

    return JSON.parse(user);
  }
}