import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import {
  catchError,
  concatMap,
  delay,
  from,
  fromEvent,
  interval,
  mergeMap,
  of,
  Subject,
  switchMap,
  take,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-concurrency-management',
  templateUrl: './concurrency-management.component.html',
  styleUrl: './concurrency-management.component.css',
})
export class ConcurrencyManagementComponent implements OnInit {
  posts: any[] = [];
  users: any[] = [];
  anotherData: any;

  constructor(
    private dataService: DataServiceService // @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    //example no, 1
   of(1,2,3)

      .pipe(mergeMap((data) => this.dataService.getPosts().pipe(delay(1000))))
      .subscribe((data) => {
        // this.posts=data
        // this.users = data;
        // console.log('post',this.posts)
        // console.log('users',this.users)
      });

    // example no 2
    // if (isPlatformBrowser(this.platformId)) {
    const clicks = fromEvent(document, 'click');

    clicks
      // .pipe(
      //   mergeMap((res) => this.dataService.getAnotherData())
      // )
      .subscribe((response: any) => {
        this.anotherData = response;
        // console.log('tarun', this.anotherData);
      });
    // }

    

    // example no 3
    const requestQueue = new Subject();

    requestQueue
      .pipe(
        concatMap((request: any) => ajax.getJSON(request.url).pipe(delay(1000)))
      )
      .subscribe((response: any) => {
        // console.log(response)
      });

    // Adding requests to the queue
    requestQueue.next({ url: 'https://dogapi.dog/api/v2/breeds' });
    requestQueue.next({ url: 'https://dogapi.dog/api/v1/facts' });






// another example 

// Source observable emitting values every second
const source$ = interval(1000).pipe(take(5)); // Emits 0, 1, 2, 3, 4

// Inner observable emitting a value after a 1.5 second delay
const inner$ = (value:any) => of(`Inner Observable: ${value}`).pipe(delay(500));

source$
.pipe(
  switchMap(value => {
    // console.log(`Source emitted: ${value}`);
    return inner$(value);
  })
).
subscribe(result => {
  // console.log(result);
});
  }
}
