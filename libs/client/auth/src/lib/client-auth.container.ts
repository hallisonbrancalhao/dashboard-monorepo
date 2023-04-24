import { Component, inject } from '@angular/core';
import { ClientAuthFacade } from './+store/client-auth.facade';

@Component({
  template: `
    <fieldset dashboard-monorepo-register (authSubmit)="auth.register($event)">
      <legend>Register Form</legend>
      <button>Register</button>
    </fieldset>

    <fieldset dashboard-monorepo-login (authSubmit)="auth.login($event)">
      <legend>Login Form</legend>
      <button>Login</button>
    </fieldset>

    <ng-container *ngIf="state.pick('user') | async as user">
      <pre>{{ user | json }}</pre>
    </ng-container>
  `,
})
export class ClientAuthContainer {
  readonly auth = inject(ClientAuthFacade);

  readonly state = this.auth.use();
}
