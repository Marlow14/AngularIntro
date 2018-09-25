import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './shared/counter';

@Component({
  selector: 'counter',
  template: `
       <button (click)="increment()">Increment</button>
       <button (click)="decrement()">Decrement</button>
       <button (click)="reset()">Reset</button>
       <br>
       <div>Current Count: {{counter | async}}</div>

    `,
})
export class CounterComponent implements OnInit {
  counter: Observable<number>;

  constructor() {}
  ngOnInit() {}

  increment() {}

  decrement() {}

  reset() {}
}
