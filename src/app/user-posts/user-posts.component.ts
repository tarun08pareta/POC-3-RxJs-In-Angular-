import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { of, switchMap } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css',
})
export class UserPostsComponent implements OnInit {
  users: any[] = [];
  selectedUserPosts: any[] = [];
  errorMessage: any | undefined;
  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.providedUser();
  }

  providedUser() {
    this.dataService.getUsers().subscribe((res) => {
      this.users = res;
    },(error)=>{
      console.log(`${ error }: Retried 2 times then quit!`)
      this.errorMessage=error
    });
  }
  onSelectUser(userId: number): void {
    this.dataService.getPostsByUser(userId).subscribe({
      next: (posts) => (this.selectedUserPosts = posts),

      error: (err) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Posts data loading complete'),
    });
  }

  // onSelectUser(userId: number): void {
  //   of(userId).pipe(
  //     switchMap(id => this.dataService.getPostsByUser(id))
  //   ).subscribe({
  //     next: posts => this.selectedUserPosts = posts,
  //     error: err => console.error('Observer got an error: ' + err),
  //     complete: () => console.log('Posts data loading complete')
  //   });
  // }
}
