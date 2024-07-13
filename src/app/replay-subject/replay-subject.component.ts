import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css',
})
export class ReplaySubjectComponent implements OnInit{
  interText: any;

  userList1: any[] = ['tarun', 'pareta'];
  userList2: any[] = [];
  userList3: any[] = [];

  constructor(private dataService: DataServiceService) {}

  addData(data: any) {
    this.dataService.dataEmiteReplaySubject.next(data);
    // console.log('tarun',data)

    
  }

  ngOnInit(): void {
    // replay subject

    this.dataService.dataEmiteReplaySubject.subscribe((data) => {
      this.userList1.push(data);
      // console.log(this.userList1)
     
    });


  

   
  }

  //subscripation
  subscripation2: Subscription = new Subscription();
 subscripation3: Subscription = new Subscription();

  //subscribe mode

  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  isRed: boolean = false;
  mod: string = 'subscribe';
  user2() {
    // this.mod='unsubscribe'
    this.isRed = !this.isRed;
    this.mod = this.isRed ? 'Unsubscribe' : 'Subscribe';

    if (this.subscribeMode2) {
      this.subscripation2.unsubscribe();
      // console.log('unsubscribe');
    } else {
      this.dataService.dataEmiteReplaySubject.subscribe((data) => {
        this.userList2.push(data);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  isbuttonRed2: boolean = false;
  mod2: string = 'subscribe';
  user3() {
    // this.mod='unsubscribe'
    this.isbuttonRed2 = !this.isbuttonRed2;

    this.mod2 = this.isbuttonRed2 ? 'Unsubscribe' : 'Subscribe';

    if (this.subscribeMode3) {
      this.subscripation3.unsubscribe();
    } else {
      this.dataService.dataEmiteReplaySubject.subscribe((data) => {
        this.userList3.push(data);
      });
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }
  



  
  
}

