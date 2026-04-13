import { Component, signal } from '@angular/core';
import { Input } from 'ui';

@Component({
  selector: 'app-users-page',
  imports: [Input],
  templateUrl: './users-page.html',
})
export class UsersPage {
  protected readonly search = signal('');
}
