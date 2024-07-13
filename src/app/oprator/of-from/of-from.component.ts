import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css',
})
export class OfFromComponent implements OnInit {
  ofList: any;

  fromList: any;
  //
  ngOnInit(): void {
    //of example

    const obs1 = of('tarun', 'kisna', 'abhishek');
    const obs2 = of({ a: 'tarun', b: 'kisna', c: 'abhishek' });

    // convert observable stream

    obs1.subscribe((res) => {
      // console.log(res);
    });

    obs2.subscribe((res) => {
      this.ofList = res;
      // console.log('tjndjn',this.ofList);
    });

    // from example  in array

    const obs3 = from(['bahubali', 'devsena', 'kttapa']);

    // convert into observable stream

    obs3.subscribe((res) => {
      // console.log('from array',res);

    });



    // from example of string 

    const obs4= from('tarun')
    obs4.subscribe((res)=>{
      // console.log('from string',res)
    })

  }
}
