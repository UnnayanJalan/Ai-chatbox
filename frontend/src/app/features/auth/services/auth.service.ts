import { Injectable } from '@angular/core';
import {HttpClient,HttpParams,} from '@angular/common/http';
import {BehaviorSubject,Observable,tap,} from 'rxjs';
import { environment } from '../../../../environments/environment';
import {LoginRequest,LoginResponse,} from '../models/login.model';
import {RegisterRequest,RegisterResponse,} from '../models/register.model';
import { AuthUser } from '../models/auth-user.model';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly apiUrl =
    `${environment.apiUrl}/auth`;

  private currentUserSubject =
    new BehaviorSubject<AuthUser | null>(
      this.storage.getUser()
    );

  currentUser$ =this.currentUserSubject.asObservable();

  private authenticatedSubject =
    new BehaviorSubject<boolean>(
      !!this.storage.getToken()
    );

  isAuthenticated$ =this.authenticatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private router: Router
  ) {}

  login(
    payload: LoginRequest
  ): Observable<LoginResponse> {

    const body = new HttpParams()
      .set('username', payload.email)
      .set('password', payload.password);

    return this.http
      .post<LoginResponse>(
        `${this.apiUrl}/login`,
        body.toString(),
        {
          headers: {
            'Content-Type':
              'application/x-www-form-urlencoded',
          },
        }
      )
      
      .pipe(
        tap((response) => {
          this.storage.saveToken(
            response.access_token
          );
          this.storage.saveUser(
            response.user
          );
          this.currentUserSubject.next(
            response.user
          );
          this.authenticatedSubject.next(
            true
          );
        })
      );
  }

  register(
    payload: RegisterRequest
  ): Observable<RegisterResponse> {

    return this.http.post<RegisterResponse>(
      `${this.apiUrl}/register`,
      {
        name: payload.fullName,
        email: payload.email,
        password: payload.password,
      }
    );
  }

  me(): Observable<AuthUser> {
    return this.http.get<AuthUser>(
      `${this.apiUrl}/me`
    );
  }

  logout(): void {
    this.storage.clear();
    this.currentUserSubject.next(null);
    this.authenticatedSubject.next(false);
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!this.storage.getToken();
  }

  getCurrentUser(): AuthUser | null {
    return this.currentUserSubject.value;
  }
}