import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(private counter: CounterService) { }

  @Input() text: string;
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

}
