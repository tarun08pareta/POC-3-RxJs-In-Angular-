import { Component, OnInit } from '@angular/core';
import { auditTime, debounce, debounceTime, fromEvent, interval, map, sampleTime, throttle, throttleTime } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-rate-limiting-throttling',
  templateUrl: './rate-limiting-throttling.component.html',
  styleUrl: './rate-limiting-throttling.component.css',
})
export class RateLimitingThrottlingComponent implements OnInit {
  data: any | undefined;
  message: string = 'Click the button to see throttling in action!';
  anotherData: any;
  constructor(private service: DataServiceService) {}
  // ngOnInit() {
  //   // example 1 auditTime
  //   const button = document.getElementById('myButton');
  //   const clicks = fromEvent(button!, 'click');
  //   const result = clicks.pipe(auditTime(3000));

  //   result.subscribe((event) => {
  //     console.log('Button clicked:', event);
  //     this.handleClick();
  //   });


  //   //example no two throttleTime 

  //   const button2 = document.getElementById('tarun');

  //   if (button2) {
  //     const clicks = fromEvent(button2, 'click');
  //     const throttled = clicks.pipe(
  //       throttleTime(3000)
  //     ); // 3 seconds throttle time

  //     throttled.subscribe(() => {
  //       this.message = `Button clicked at ${new Date().toLocaleTimeString()}`;
  //       // this.handleClick();
  //     });
  //   }
  // }


  //example no 3 throttleTime 

  // searchQuery: string = '';

  // ngOnInit() {
  //   const searchInput = document.querySelector('input');

  //   if (searchInput) {
  //     const inputEvents = fromEvent(searchInput, 'input');
  //     const throttledInput = inputEvents.pipe(
  //       // throttleTime(3000), // 1 second throttle time
  //       // auditTime(3000),
  //       sampleTime(3000),
  //       map((event: Event) => (event.target as HTMLInputElement).value)
  //     );

  //     throttledInput.subscribe(data => {
  //       this.searchQuery = data;
  //       this.performSearch(data);
  //     });
  //   }
  // }
  performSearch(data: string) {
    // Perform your search logic here
    console.log(`Searching for: ${data}`);
  }
  handleClick() {
    this.service.getAnotherData().subscribe((data) => {
      // console.log(data);
      this.data = new Date().toLocaleTimeString();

      this.anotherData = data;
    });
  }



  // example  throttle  oprator 

  ngOnInit(): void {
    const button3 = document.getElementById('throttleButton');
    const clicks = fromEvent(button3!, 'click');
    const result = clicks.pipe(throttle(() => interval(3000)));

    result.subscribe(() => this.handleClick2());
  }

  handleClick2() {
    console.log('Button clicked!');
  }
}
