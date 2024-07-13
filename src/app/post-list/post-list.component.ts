import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent  implements OnInit{
posts: any[] = [];
constructor(private service:DataServiceService){}

ngOnInit(): void {
  this.service.getPosts().subscribe({
    next: data => this.posts = data,
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification')
  });
}
}
