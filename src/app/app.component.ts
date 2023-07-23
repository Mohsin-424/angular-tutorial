import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  Post} from "./post.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts:Post[] = [];
  // Showing a Loading Indicactor
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    // this.isFetching = true;

    this.http
      .post(
        'https://http-28fc2-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe((responseData: any) => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = false;
    
    this.http
      .get<{ [key:string]: Post}> ( // Specify 'any' as the response type too get data back

        'https://http-28fc2-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map(responseData => {
          // Update the type of responseData to 'any'
          // Convert the JavaScript object into an array
          const postsArray : Post[]= [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        //  .... 
        // console.log(posts);
        this.isFetching = false;

        // It will fetch the loaded post
        this.loadedPosts = posts;

      });
  }
}

