export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  avatar?: string;
  isActive: boolean;
  lastLogin?: Date;
  createdAt?: Date;
}

export type UserRole =
  | 'Super Admin'
  | 'Admin'
  | 'Manager'
  | 'User';