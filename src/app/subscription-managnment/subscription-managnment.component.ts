import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { concat, forkJoin, interval, merge, of, Subject, Subscription, take, takeUntil, zip } from 'rxjs';

@Component({
  selector: 'app-subscription-managnment',
  templateUrl: './subscription-managnment.component.html',
  styleUrl: './subscription-managnment.component.css',
})
export class SubscriptionManagnmentComponent implements OnInit, OnDestroy {
  anotherData: any;
  data: string|undefined;
  
  private destroy$ = new Subject<void>();
  private stop$ = new Subject<void>();
  private dataSubscription: Subscription | undefined;
  constructor(private dataService: DataServiceService) {}
  ngOnInit(): void {
    this.dataSubscription = this.dataService
      .getAnotherData()
      .subscribe((res) => {
        this.anotherData = res;
      });


      //another example
    const observable1 = of('A', 'B', 'C');
    const observable2 = of('D', 'E');
    const observable3 = of('F', 'G', 'H');

    // const observable4 = merge(observable1, observable2, observable3);
    // const observable4 = forkJoin(observable1, observable2, observable3);
    const observable4 = zip(observable1, observable2, observable3);
    observable4.subscribe((res) => {
      // console.log(res);
      // this.data = res;
    });



    // another example 


    // This observable will emit five values and then complete automatically.
    // Using takeUntil
    
    const observable$ = interval(1000).pipe(take(5));
observable$.subscribe({
  // next: value => console.log('Next:', value),
  // complete: () => console.log('Complete')
});



// another example Using Subject
this.dataService.getUsers()
     .pipe(takeUntil(this.destroy$))   // takeUntil automatic unsucbribe from observable
      .subscribe(data => {
        // console.log(data);
      });
  }
  startFetching()
  {
    interval(1000).pipe(takeUntil(this.stop$))   // takeUntil automatic unsucbribe from observable
    .subscribe(data => {
      console.log(data);
    });
  }
  stopFetching() {
    this.stop$.next();
  }
  
  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
      // ensures that the subscription is properly cleaned up to prevent memory leaks.



      
    }

    this.destroy$.next();
    this.destroy$.complete();
  }
}
