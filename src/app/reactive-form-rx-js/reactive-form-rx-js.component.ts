import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { merge, Observable, of, throwError } from 'rxjs';
import { auditTime, catchError, debounceTime, delay, distinctUntilChanged, sampleTime } from 'rxjs/operators';
import { StateServiceService } from '../services/state-service.service';

@Component({
  selector: 'app-reactive-form-rx-js',
  templateUrl: './reactive-form-rx-js.component.html',
  styleUrl: './reactive-form-rx-js.component.css',
})
export class ReactiveFormRxJsComponent  {
  // searchControl = new FormControl('');
  // constructor()
  // {
  //   this.searchControl.valueChanges
  //   .pipe(
  //     debounceTime(3000),
  //   distinctUntilChanged()
    
  // )
  //   .subscribe((searchItem) => {
  //     console.log('searchItem',searchItem);
  //   });
  // }

  // example no 2
  myForm!: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      middleName: new FormControl('')
    });

    const firstNameChanges: Observable<any> = this.myForm.get('firstName')?.valueChanges ?? new Observable();
    const middleNameChanges: Observable<any> = this.myForm.get('middleName')?.valueChanges ?? new Observable();
    const lastNameChanges: Observable<any> = this.myForm.get('lastName')?.valueChanges ?? new Observable();

    merge(
      firstNameChanges,
      middleNameChanges,
      lastNameChanges
    )
    // .pipe(debounceTime(3000))
    .subscribe((res) => {
      console.log('Form value changed:',res);
    })
  }


  // example no 3 

//   myForm!: FormGroup;
//   errorMessage: string='';

//   constructor(private service : StateServiceService) {
//     this.myForm = new FormGroup({
//       username: new FormControl(''),
//     });
//   }

//   submitForm() {
//     const username = this.myForm.get('username')?.value;

//     // Simulating an API request that might fail
//     performApiRequest(username)

//     .pipe(
//       catchError((error) => {
//         this.errorMessage = 'An error occurred. Please try again.';
//         return throwError(error);
//       })
//     ).subscribe((response:any) => {
//       // Handle successful response here
//       console.log('API response:', response);
//     });
//   }
// }

// function performApiRequest(username: string) {
//   // Simulating an API request that might fail
  
//   if (username === 'admin') {
//     return throwError('Invalid username');
//   } else {
//     return of('Success');
//   }


// example no 4
lastValue: any;

studentForm: FormGroup = new FormGroup({
  firstName: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('\\s*[a-zA-Z]+(\\s*[a-zA-Z]+)*\\s*'),
   
  ]),
  middleName: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('\\s*[a-zA-Z]+(\\s*[a-zA-Z]+)*\\s*'),
  
  ]),
  lastName: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('\\s*[a-zA-Z]+(\\s*[a-zA-Z]+)*\\s*'),
  ]),
  fullName: new FormControl(''),
  dob: new FormControl('', [Validators.required, Validators.minLength(3)]),
  age: new FormControl('', [Validators.required]),
  licenceNo: new FormControl(''),
  country: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]),
  state: new FormControl(''),
  identityType: new FormControl(''),
  cardNo: new FormControl(''),
});



// constructor()
// {
//   this.studentForm.valueChanges
  

//   .pipe(
//     debounceTime(500),
//   distinctUntilChanged(),
//   // delay(2000)
 
// )
//   .subscribe((data) => {
//     console.log('Form data changed:',data);
    
//   });
// }



addData()
{
  
    console.log(this.studentForm.value)
    this.studentForm.reset();
  
}


resetButton()
{
  this.studentForm.reset();
}


ngOnInit(): void {
  this.studentForm.controls['firstName'].valueChanges
  .pipe(debounceTime(500))
  .subscribe((value) => {
    console.log('firstName',value)
    
  });
  this.studentForm.controls['middleName'].valueChanges
  .pipe(debounceTime(500))
  .subscribe((value) => {
    console.log('middleName',value)
    
  });
  this.studentForm.controls['lastName'].valueChanges
  .pipe(debounceTime(500))
  .subscribe((value) => {
    console.log('lastName',value)
   
  });
}
}


