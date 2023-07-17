import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPost();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://maximal-muse-392816-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData: any) => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPost();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPost() {
    this.http
      .get('https://maximal-muse-392816-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((responseData: { [key: string]: any }) => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key] , 
              id: key});
            }
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        console.log(posts);
      });
  }
}
