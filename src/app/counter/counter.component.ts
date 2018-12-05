import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private counter: CounterService) { }

  currentCount: number;

  ngOnInit(): void {
    this.counter.getCount().subscribe(
      res => {
        this.currentCount = res.value;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  increment(): void {
    this.counter.setCount(this.currentCount, 1);
  }

  decrement(): void {
    this.counter.setCount(this.currentCount, -1);
  }

  reset(): void {
    this.counter.resetCount();
  }

}
