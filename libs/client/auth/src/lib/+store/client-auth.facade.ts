import { Injectable } from '@angular/core';
import { take } from 'rxjs';

import { ClientAuthState, AuthRequest } from '../client-auth.interfaces';
import { ClientAuthService } from './client-auth.service';
import { Store } from './store';

@Injectable()
export class ClientAuthFacade extends Store<ClientAuthState> {
  constructor(private authService: ClientAuthService) {
    super({
      loading: false,
      user: null,
      token: null,
    });
  }

  login<T extends AuthRequest>(value: T) {
    this.authService
      .login(value)
      .pipe(take(1))
      .subscribe(({ access_token }) => {
        this.setState({ token: access_token });
        this.loadUser();
      });
  }

  register<T extends AuthRequest>(value: T) {
    this.authService
      .register(value)
      .pipe(take(1))
      .subscribe((user) => {
        this.setState({ user });
      });
  }

  loadUser() {
    /**
     * @todo move to HttpInterceptor
     */
    const Authorization = `Bearer ${this.state.token}`;
    const headers = { Authorization };

    this.authService
      .profile(headers)
      .pipe(take(1))
      .subscribe((user) => {
        this.setState({ user });
      });
  }
}
