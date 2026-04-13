import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-input',
  imports: [],
  templateUrl: './input.html',
})
export class Input {
  readonly id = input<string>('');
  readonly label = input<string>('');
  readonly type = input<string>('text');
  readonly placeholder = input<string>('');
  readonly value = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly errorMessage = input<string>('');

  readonly valueChange = output<string>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
