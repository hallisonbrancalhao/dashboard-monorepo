import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { ClientAuthFacade } from './+store/client-auth.facade';
import { ClientAuthService } from './+store/client-auth.service';
import { ClientAuthContainer } from './client-auth.container';

const routes = [
  {
    path: '',
    component: ClientAuthContainer,
  },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ClientAuthContainer],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [LoginComponent, RegisterComponent],
  providers: [ClientAuthService, ClientAuthFacade],
})
export class ClientAuthModule {}
