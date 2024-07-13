import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { StateServiceService } from '../services/state-service.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { Observable } from 'rxjs';
import { selectCount } from '../state/counter/counter.selector';
import { decrement, increment, reset } from '../state/counter/counter.actions';

@Component({
  selector: 'app-state-managnment',
  templateUrl: './state-managnment.component.html',
  styleUrl: './state-managnment.component.css',
})
export class StateManagnmentComponent  implements OnInit{

// example no. 1 for complex state management   start
  
  @Input() message: string ='';
  @Output() updateMessage: EventEmitter<string> = new EventEmitter<string>();

  changeMessage() {
    const newMessage= 'welcome in angular/java/python'
    this.updateMessage.emit(newMessage)
  }


  // second example 
  counter: number = 0;

  // increment() {
  //   this.counter++;
  // }

  // decrement() {
  //   this.counter--;
  // }
  // reset()
  // {
  //   this.counter=0
  // }


  // example no. 1 for components state management   end


  // example no. 2 for service and rxjs state management   start

  count :Observable<number> 
  constructor(private store:Store<AppState>){
    this.count = store.select(selectCount)
  }

   increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }
  reset()
  {
    this.store.dispatch(reset())

   
  }
  ngOnInit(): void {
      

  }

 
}
