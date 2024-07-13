import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {

  constructor(private dataService:DataServiceService){

  }
enteredText:any


onBtnClick()
{
  // console.log(this.enteredText)
  // this.dataService.raiseDataEmitterEvent(this.enteredText)
  this.dataService.dataEmite.next(this.enteredText)
}
}
