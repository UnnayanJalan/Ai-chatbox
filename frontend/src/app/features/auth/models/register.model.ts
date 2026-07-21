import { AuthUser } from './auth-user.model';

export interface RegisterRequest {
  fullName: string;
  companyName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user: AuthUser;
}