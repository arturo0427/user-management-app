import { Component, inject, OnInit, signal } from '@angular/core';
import { Input } from 'ui';
import { UserService } from '../../../../core/services/user.service';
import { UserListComponent } from '../../components/user-list.component/user-list.component';
import { UserFormComponent } from '../../components/user-form.component/user-form.component';

@Component({
  selector: 'app-users-page',
  imports: [Input, UserListComponent, UserFormComponent],
  templateUrl: './users-page.html',
})
export class UsersPage implements OnInit {
  readonly userService = inject(UserService);

  protected readonly search = signal('');

  ngOnInit(): void {
    this.userService.loadUsers();
  }
}
