import { Component } from '@angular/core';
import { ClientAuthForm } from '../client-auth.form';
import { AuthComponent } from './auth.component';

@Component({
  selector: 'dashboard-monorepo,fieldset[dashboard-monorepo-login]',
  templateUrl: './auth.component.html',
})
export class LoginComponent extends AuthComponent {
  form = new ClientAuthForm();
}
