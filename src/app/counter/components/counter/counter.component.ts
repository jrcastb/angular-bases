import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter: {{counter}}</h1>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 20;

  increaseBy(value: number): void{
    this.counter += value;
  }
  resetCounter(): void{
    this.counter = 10;
  }

}

