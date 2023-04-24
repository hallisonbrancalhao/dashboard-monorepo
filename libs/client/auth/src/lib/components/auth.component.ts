import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ClientAuthForm } from '../client-auth.form';

@Directive()
export abstract class AuthComponent {
  @Output() authSubmit = new EventEmitter();

  @Input() legend?: string;

  abstract form: ClientAuthForm;

  onSubmit() {
    if (this.form.valid) {
      this.authSubmit.emit(this.form.value);
    }
  }
}
