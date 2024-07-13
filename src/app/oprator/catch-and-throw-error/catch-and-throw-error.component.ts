import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { catchError, delay, of, retry, retryWhen, scan, throwError } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-catch-and-throw-error',
  templateUrl: './catch-and-throw-error.component.html',
  styleUrl: './catch-and-throw-error.component.css',
})
export class CatchAndThrowErrorComponent implements OnInit {
  data: any;
  errorMessage: string | undefined;

  anotherData: any;

  fatching:boolean=false

  status:string='No Data'

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    // this.getData();

    // this.collectData();
  }

  collectData() {
    this.fatching=true
    this.dataService.getAnotherData()
    .pipe(
      // retry(3),

      retryWhen((error)=>error.pipe(
        delay(3000),

        scan((retryCount)=>{
          if(retryCount>=3)
          {
            throw error
          }else{
            retryCount= retryCount+1
            console.log('retryCount'+retryCount)
            this.status= 'Retrying Attempt # '+retryCount
            return retryCount
          }
        },0)
      ))
    
    ).
    subscribe((res) => {
      console.log('data',res)

      this.anotherData = res;
      this.status='Data fetched successfully'
      this.fatching=false
    },(error)=>{
      console.log(error)
      this.status='Error fetching data'
      this.fatching=false
    });
  }

  // getData() {
  //   this.dataService.getDataAppi().subscribe(
  //     (response) => {
  //       this.data = response;
  //     },
  //     (error) => {
  //       this.errorMessage = error;
  //     }
  //   );
  // }
}
