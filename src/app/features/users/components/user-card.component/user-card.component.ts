import { Component, input } from '@angular/core';
import { User } from '../../../../core/models/user.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
})
export class UserCardComponent {
  readonly user = input.required<User>();

  companyName(): string {
    return this.user().company?.name || 'Sin empresa';
  }
}
