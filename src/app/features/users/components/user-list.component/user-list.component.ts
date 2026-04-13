import { Component, input } from '@angular/core';
import { User } from '../../../../core/models/user.model';
import { UserCardComponent } from '../user-card.component/user-card.component';

@Component({
  selector: 'app-user-list',
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  readonly users = input.required<User[]>();
}
