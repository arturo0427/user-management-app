import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';
import { calculateAge } from '../../../../core/utils/calculate-age.util';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly userService = inject(UserService);

  readonly isSubmitting = signal(false);
  readonly successMessage = signal('');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    birthDate: [''],
    age: [{ value: 0, disabled: true }],
  });

  constructor() {
    this.form.controls.birthDate.valueChanges.subscribe((birthDate) => {
      const age = calculateAge(birthDate);
      this.form.controls.age.setValue(age, { emitEvent: false });
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.successMessage.set('');

    const rawValue = this.form.getRawValue();

    this.userService
      .createUser({
        name: rawValue.name,
        email: rawValue.email,
        company: rawValue.company,
        birthDate: rawValue.birthDate,
      })
      .subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.successMessage.set('Guardado exitoso.');
          this.resetForm();
        },
        error: () => {
          this.isSubmitting.set(false);
        },
      });
  }

  showError(controlName: 'name' | 'email', errorType = 'required'): boolean {
    const control = this.form.controls[controlName];
    return control.touched && control.hasError(errorType);
  }

  resetForm(): void {
    this.form.reset({
      name: '',
      email: '',
      company: '',
      birthDate: '',
      age: 0,
    });
  }
}
