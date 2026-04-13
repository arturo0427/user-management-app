import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-users-detail-page',
  imports: [RouterLink],
  templateUrl: './users-detail-page.html',
})
export class UsersDetailPage implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly userService = inject(UserService);

  readonly userId = Number(this.route.snapshot.paramMap.get('id') ?? 0);

  readonly user = computed(() => this.userService.getUserById(this.userId));

  ngOnInit(): void {
    if (!this.userService.users().length) {
      this.userService.loadUsers();
    }
  }
}
