import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ClientAuthForm } from '../client-auth.form';
import { AuthComponent } from './auth.component';

@Component({
  selector: 'dashboard-monorepo,fieldset[dashboard-monorepo-register]',
  templateUrl: './auth.component.html',
})
export class RegisterComponent extends AuthComponent implements OnInit {
  form = new ClientAuthForm({ updateOn: 'blur' });

  http = inject(HttpClient);

  ngOnInit() {
    this.form.controls.username.addAsyncValidators((control) => {
      return this.http.post('/api/auth/check', {
        username: control.value,
      });
    });
  }
}
