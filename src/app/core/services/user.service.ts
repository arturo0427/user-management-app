import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import { CreateUserPayload } from '../models/create-user-payload.model';
import { delay, Observable, of, tap } from 'rxjs';
import { calculateAge } from '../utils/calculate-age.util';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

  private readonly _users = signal<User[]>([]);
  private readonly _searchTerm = signal('');
  private readonly _isLoading = signal(false);
  private readonly _hasLoadedUsers = signal(false);

  readonly users = this._users.asReadonly();
  readonly searchTerm = this._searchTerm.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();
  readonly hasLoadedUsers = this._hasLoadedUsers.asReadonly();

  readonly filteredUsers = computed(() => {
    const term = this._searchTerm().trim().toLowerCase();

    if (!term) {
      return this._users();
    }

    return this._users().filter((user) => user.name.toLowerCase().includes(term));
  });

  loadUsers(): void {
    this._isLoading.set(true);

    this.http.get<User[]>(this.apiUrl).subscribe({
      next: (users) => {
        this._users.set(users);
        this._isLoading.set(false);
        this._hasLoadedUsers.set(true);
      },
      error: () => {
        this._isLoading.set(false);
        this._hasLoadedUsers.set(true);
      },
    });
  }

  updateSearchTerm(term: string): void {
    this._searchTerm.set(term);
  }

  createUser(payload: CreateUserPayload): Observable<User> {
    const newUser: User = {
      id: Date.now(),
      name: payload.name,
      email: payload.email,
      company: {
        name: payload.company,
      },
      birthDate: payload.birthDate,
      age: calculateAge(payload.birthDate),
    };

    return of(newUser).pipe(
      delay(1500),
      tap((user) => {
        this._users.update((currentUsers) => [user, ...currentUsers]);
      }),
    );
  }

  getUserById(id: number): User | undefined {
    return this._users().find((user) => user.id === id);
  }
}
