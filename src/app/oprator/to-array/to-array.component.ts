import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.css',
})
export class ToArrayComponent implements OnInit {

user = [
  {name:'tarun',skill:'angular'},
  {name:'sorabh',skill:'java'},
  {name:'kisna',skill:'python'},
  {name:'abhishek',skill:'machine Learning'},
]

  dataSubscription: Subscription | undefined;



  ngOnInit(): void {
    const obs1 = interval(2000);

    this.dataSubscription = obs1.pipe(take(5), toArray()).subscribe((res) => {
      // console.log(res)

      if (res.length >= 5) {
        this.dataSubscription?.unsubscribe();
      }
    });


    // example two 

    const obs2 = from(this.user)
    obs2.pipe(toArray()).subscribe((res)=>{
  //  console.warn('toArray',res)
    })

  }
}
