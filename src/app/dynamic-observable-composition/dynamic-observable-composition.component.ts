import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, forkJoin, of, ReplaySubject, switchMap } from 'rxjs';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-dynamic-observable-composition',
  templateUrl: './dynamic-observable-composition.component.html',
  styleUrl: './dynamic-observable-composition.component.css',
})
export class DynamicObservableCompositionComponent implements OnInit {
  combinedData!: string;

  constructor(private dataService: DataServiceService) {


    // behaviorSubject type is Subject
    let behaviorSubject = new BehaviorSubject(0);
    // behaviorSubject.subscribe((data) => console.log('behaviorSubject',data));
    behaviorSubject.next(1);
    behaviorSubject.next(2);


    //ReplaySubject type is Subject
  let replaySubject= new ReplaySubject(2);// Buffer size is 2
  replaySubject.next(1)
  replaySubject.next(2)
  replaySubject.next(3)

  // replaySubject.subscribe((data) => console.log('ReplaySubject',data));



  //AsyncSubject type is Subject
  let asyncSubject = new AsyncSubject();
  asyncSubject.next(1)
  asyncSubject.next(2)
  asyncSubject.next(3)
  asyncSubject.next(4)
  asyncSubject.complete()   // if remove this then does no working this type object 
  // asyncSubject.subscribe(value => console.log('asyncSubject',value));
  }


  users: any[] = [];
  selectedUserPosts: any[] = [];
  selectedPostComments: { [key: number]: any[] } = {};
  ngOnInit(): void {
    forkJoin([
      this.dataService.getData1(),
      this.dataService.getData2()
    ]).subscribe(([data1, data2]) => {
      this.combinedData = `${data1} and ${data2}`;

      // console.log(this.combinedData);
    });

    this.dataService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  onSelectUser(userId: number): void {
    of(userId)
      .pipe(switchMap((id) => this.dataService.getPostsByUser(id)))
      .subscribe((posts) => {
        this.selectedUserPosts = posts;
        this.selectedPostComments = {}; // Reset comments when a new user is selected
      });
  }

  onSelectPost(postId: number): void {
    if (!this.selectedPostComments[postId]) {
      this.dataService.getCommentsByPost(postId).subscribe((comments) => {
        this.selectedPostComments[postId] = comments;
      });
    }
  }
}
