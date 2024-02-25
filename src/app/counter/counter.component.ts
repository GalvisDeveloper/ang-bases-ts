import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 10;

  increment = (value: number = 1): void => {
    this.counter += value || 1;
  }

  decrement = (value: number = 1): void => {
    this.counter -= value || 1;
  }

  reset = (value: number = 10): void => {
    this.counter = value;
  }
}
