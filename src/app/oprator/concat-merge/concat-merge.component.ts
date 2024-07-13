import { Component, OnInit } from '@angular/core';
import { concat, delay, forkJoin, interval, merge, of, take, zip } from 'rxjs';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrl: './concat-merge.component.css',
})
export class ConcatMergeComponent implements OnInit {
  ngOnInit(): void {
    const obs1 = of(1, 2, 3);

    const obs2 = of(4, 5, 6);

    const obs3 = concat(obs1, obs2);

    obs3.subscribe((res) => {
      // console.log('concat', res);
    });

    // example no 2

    const observable1 = of('A', 'B', 'C');
    const observable2 = of('D', 'E');
    const observable3 = of('F', 'G', 'H');

    const observable4 = concat(observable1, observable2, observable3);
    observable4.subscribe((res) => {
      // console.log(res);
    });

    // example no 3 merge oprator

    const observable1$ = of(1, 2, 3);
    const observable2$ = of(4, 5, 6);

    const result$ = merge(observable1$, observable2$);

    // result$.subscribe(value => console.log(value));

    // example no 4 merge oprator
    const data1$ = interval(1000).pipe(take(3)); // Emits 0, 1, 2 every second
    const Data2$ = interval(500).pipe(take(3)); // Emits 0, 1, 2 every 500ms

    const result = merge(data1$, Data2$);

    // result.subscribe(value => console.log(value));




    // example no 5 forkJoin  oprator
    const obsr1 = of(1, 2, 3).pipe(delay(1000));

    const obsr2 = of('A', 'B', 'C').pipe(delay(2000));


    // forkJoin([obsr1, obsr2]).subscribe(result => console.log(result));

    // forkJoin({
    //   num: obsr1,
    //   char: obsr2
    // }).subscribe(result => console.log(result));



    // example no 6 zip oprator 

    const observable1$$ = of(1, 2, 3);
const observable2$$ = of('A', 'B', 'C');

const result$$ = zip(observable1$$, observable2$$);

// result$$.subscribe(value => console.log(value));


  }
}
