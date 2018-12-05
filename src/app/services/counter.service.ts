import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

interface Count {
  value: number;
}

@Injectable()
export class CounterService {

  constructor() { }

  private initialCount: Count = {value: 0};
  private countTracker = new BehaviorSubject<Count>(this.initialCount);

  /** Allows subscription to the behavior subject as an observable */
  getCount(): Observable<Count> {
    return this.countTracker.asObservable();
  }

  /**
   * Allows updating the current value of the behavior subject
   * @param val a number representing the current value
   * @param delta a number representing the positive or negative change in current value
   */
  setCount(val: number, delta: number): void {
    this.countTracker.next({value: (val + delta)});
  }

  /** Resets the count to the initial value */
  resetCount(): void {
    this.countTracker.next(this.initialCount);
  }
}
