import { Component, OnInit } from '@angular/core';
import {
  animationFrameScheduler,
  asyncScheduler,
  delay,
  interval,
  observeOn,
  of,
  queueScheduler,
  Subscription,
  take,
  takeWhile,
} from 'rxjs';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-schedulers',
  templateUrl: './schedulers.component.html',
  styleUrl: './schedulers.component.css',
})
export class SchedulersComponent implements OnInit {
  dataSubcription: Subscription | undefined;
  sateSubcription: Subscription | undefined;

  constructor(private dataService: DataServiceService) {}
  // ngOnInit(): void {

  //   // async scheduler  example 1   start

  //   this.dataSubcription = interval(1000)
  //     .pipe(observeOn(asyncScheduler))
  //     .subscribe((res) => {
  //       // console.log('data-1',res);
  //       if (res >= 5) {
  //         this.dataSubcription?.unsubscribe();
  //         // console.log('unsubscribed-1');
  //       }
  //     });

  //   this.sateSubcription = interval(1000)
  //     // .pipe(observeOn(asyncScheduler))
  //     .subscribe((res) => {
  //       // console.log('data-2',res);
  //       if (res >= 5) {
  //         this.sateSubcription?.unsubscribe();
  //         // console.log('unsubscribed-2');
  //       }
  //     });

  //     // async scheduler  example 1   end

  // }

  // ngOnInit(): void {
  //          // queue scheduler example no 2

  //  this.dataSubcription =  interval(1000)
  //     .pipe(
  //       observeOn(queueScheduler)
  //     )
  //     .subscribe((res)=>{
  //       console.log('queueScheduler',res)

  //       if(res>=5)
  //       {
  //         console.log('unSubcribe queueScheduler')
  //         this.dataSubcription?.unsubscribe()

  //       }
  //     })

  //     this.sateSubcription=interval(1000)
  //     // .pipe(
  //     //   observeOn(queueScheduler)
  //     // )
  //     .subscribe((res)=>{
  //       console.log('withOut queueScheduler',res)
  //       if(res>=5)
  //         {
  //           console.log('unSubcribe without queueScheduler')
  //           this.sateSubcription?.unsubscribe()

  //         }
  //     })

  // }

  // example no 3 animation frame scheduler

  position = 0;
  maxPostion = 500;
  books: any[] = [];
  ngOnInit() {
    this.fetchBook();
  }

  fetchBook() {
    this.dataService.getAnimationSchedular().subscribe((data) => {
      this.books = data;
      this.animateBooks();
    });
  }

  animateBooks() {
    interval(0, animationFrameScheduler)
      .pipe(takeWhile(() => this.position < this.maxPostion))
      .subscribe(() => {
        this.position += 2;
      });
  }
}
