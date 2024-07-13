import { Component, OnInit } from '@angular/core';

import { find, of,count, max, min } from 'rxjs';

@Component({
  selector: 'app-find-count-max',
  templateUrl: './find-count-max.component.html',
  styleUrl: './find-count-max.component.css',
})
export class FindCountMaxComponent implements OnInit {
  ngOnInit(): void {
    // const source$ = of(1, 2, 3, 4, 5);
    const source$ = of('tarun', 'pareta', 'kumar');

    const result$ = source$.pipe(
      // find(value => value > 3)
      find((value) => value === 'kumar')
    );

    // result$.subscribe((value) => console.log(value));




    // example no. 2  counnt oprator 

    const obs1 = of(20,21,22,23,24)
   const result = obs1.pipe(
      // count((value) => value > 22),

      // max(),
      // min()
    ).subscribe((res) => {
      // console.log(res)
    })
  }
}
