import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, AuthRequest, User } from '../client-auth.interfaces';

@Injectable()
export class ClientAuthService {
  constructor(private http: HttpClient) {}

  login<T extends AuthRequest>(value: T) {
    return this.http.post<AuthResponse>('/api/auth/login', value);
  }

  register<T extends AuthRequest>(value: T) {
    return this.http.post<User>('/api/auth/register', value);
  }

  profile(headers: Record<string, string>) {
    return this.http.get<User>('/api/auth/profile', { headers });
  }
}
