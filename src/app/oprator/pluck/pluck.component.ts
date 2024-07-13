import { NgPlural } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, of, pluck, take } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.css',
})
export class PluckComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const users = of(
      { id: 1, name: 'tarun', age: 25 },
      { id: 2, name: 'kisna', age: 30 },
      { id: 3, name: 'abhishek', age: 21 }
    );

    const names = users.pipe(pluck('name'));
    names.subscribe((res) => {
      // console.log('pluck',res);
    });


    // example of take oprator 

    const obs1 = interval(1000)
    const obs2 = of(1,2,3,4,5)

    obs1.pipe(take(5)).
    subscribe((res)=>{
      // console.log('take',res)
    })

    obs2.pipe(take(2)).
    subscribe((res)=>{
      // console.log('obs2-Data',res)
    })
}
}
