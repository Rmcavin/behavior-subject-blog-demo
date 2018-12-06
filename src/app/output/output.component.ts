import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit, OnDestroy {

  constructor(private counter: CounterService) { }

  @Input() text: string;
  currentCount: number;
  subscription;

  ngOnInit(): void {
    this.subscription = this.counter.getCount().subscribe(
      res => {
        this.currentCount = res.value;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
