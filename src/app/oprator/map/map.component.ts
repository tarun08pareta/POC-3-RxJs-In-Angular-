import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, interval, map, mergeMap, of, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit {

  dataSubcription:Subscription | undefined

  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    const obs1 = of(2000, 3000, 4000, 5000);

    obs1.pipe(map((data) => data + 10)).subscribe((res: any) => {
      // console.log('tarun',res);
    });

    // example no. 2

    const letters = of('a', 'b', 'c', 'd');
    const indexedLetters = letters.pipe(
      map((value, index) => `${index + 1}: ${value}`)
    );

    // indexedLetters.subscribe(value => console.log(value));
    // Output:
    // 1: a
    // 2: b
    // 3: c
    // 4: d

    // example no. 3   is filter oprator

    const obs3 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    obs3.pipe(filter((data) => data % 2 == 0)).subscribe((res) => {
      // console.log(res);
    });




    // example no. 5   map and filter

    const obs4 = interval(2000);

    obs4
      .pipe(
        filter((data) => data % 2 == 0),
        map((data) => data + 1)
      )
      .subscribe((res) => {
        // console.log(res)

        if(res>=10)
        {
          this.dataSubcription?.unsubscribe()
        }
      });




      
  }


  
}
