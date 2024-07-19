import { Component, OnInit } from '@angular/core';
import { bufferTime, debounceTime, interval, throttleTime } from 'rxjs';

@Component({
  selector: 'app-back-pressure-handling',
  templateUrl: './back-pressure-handling.component.html',
  styleUrl: './back-pressure-handling.component.css'
})
export class BackPressureHandlingComponent implements OnInit {

  ngOnInit(): void {
      const data = interval(500)
      .pipe(
        // throttleTime(1000)
        // bufferTime(1000)
       

      )

      const subscription = data.subscribe((res)=>{
        // console.log('data',res)
        // console.log(`Buffered values: ${res}`);
      })

      setTimeout(() => {
        subscription.unsubscribe();
      }, 5000);
      
  }



}
