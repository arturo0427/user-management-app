import { Component, inject, OnInit, signal } from '@angular/core';
import { Input } from 'ui';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-users-page',
  imports: [Input],
  templateUrl: './users-page.html',
})
export class UsersPage implements OnInit {
  readonly userService = inject(UserService);

  protected readonly search = signal('');

  ngOnInit(): void {
    this.userService.loadUsers();
  }
}
