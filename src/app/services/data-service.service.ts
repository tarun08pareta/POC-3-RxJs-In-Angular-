import { HttpClient } from '@angular/common/http';
import { ErrorHandler, EventEmitter, Injectable } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  catchError,
  delay,
  map,
  of,
  retry,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  getDataApi() {
    throw new Error('Method not implemented.');
  }
  //subject start

  // dataEmite= new EventEmitter<any>()
  // dataEmite= new Subject<any>() // subject
  dataEmite = new BehaviorSubject<any>('tarduhrun'); // behaviorSubject
  // raiseDataEmitterEvent(data:any)
  // {
  // // this.dataEmite.emit(data)
  // this.dataEmite.next(data)
  // }

  //subject end

  // replay subject start

  dataEmiteReplaySubject: ReplaySubject<number> = new ReplaySubject<number>(4);
  // dataEmiteReplaySubject:ReplaySubject<number> = new ReplaySubject<number>(4,5000)  //limit  set

  // replay subject end

  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
    // .pipe(
    //   map((data) => data),
    //   catchError((error) => {
    //     console.error('Error fetching data', error);
    //     throw error;
    //   })
    // );
  }

  getUsers(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/users`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    return throwError(error.errorMessage || 'server error');
  }

  getPostsByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`, {
      params: { userId: userId.toString() },
    });
    // .pipe(
    //   catchError((error) => {
    //     console.error(`Error fetching posts for user ${userId}`, error);
    //     throw error;
    //   })
    // );
  }

  // dynamic obserable
  getData1(): Observable<string> {
    return of('Data from Source 1').pipe(delay(1000));
  }

  getData2(): Observable<string> {
    return of('Data from Source 2').pipe(delay(2000));
  }

  getCommentsByPost(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/comments`, {
      params: { postId: postId.toString() },
    });
  }

  getDataAppi() {
    return this.http.get<any>('https://api.example.com/data').pipe(
    // return this.http.get<any>(`${this.apiUrl}/posts`).pipe(
      catchError(error => {
        console.error('API Error:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }



  // retry oprator 
  getAnotherData()
  {
    return this.http.get<any>('https://ipapi.co/8.8.8.8/json/')
  }


  // get concurrency managment
  // getDogBread()
  // {
  //   return this.http.get<any>('https://dogapi.dog/api/v2/breeds')
  // }


  // get data for animationFrameSchedular

  getAnimationSchedular()
  {
    return this.http.get<any>('https://potterapi-fedeperin.vercel.app/en/books')
  }


}
