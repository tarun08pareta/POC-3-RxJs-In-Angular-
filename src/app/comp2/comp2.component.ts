import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component implements OnInit {


  interText:any

  constructor(private dataService:DataServiceService){

  
  }

  ngOnInit(): void {
    this.dataService.dataEmite.subscribe((data:any)=>{
      // console.log(data)
     this.interText=data
    })
  }
}
