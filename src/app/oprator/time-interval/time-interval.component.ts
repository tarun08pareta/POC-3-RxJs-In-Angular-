import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import internal from 'stream';

@Component({
  selector: 'app-time-interval',
  templateUrl: './time-interval.component.html',
  styleUrl: './time-interval.component.css',
})
export class TimeIntervalComponent implements OnInit {
  obsMsg: any;

  dataSubcription:Subscription | undefined
  ngOnInit(): void {
    // const intervalVideo = interval(1000);

    //(delay,interval)
    const intervalVideo = timer(2000,1000);

    this.dataSubcription=intervalVideo.subscribe((res) => {
      // console.log(res);
      this.obsMsg= 'emitData' +res

      if(res>=5)
      {
        this.dataSubcription?.unsubscribe()
      }
    });
  }
}
