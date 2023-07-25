import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Post } from './post.model';
import { map,catchError  } from 'rxjs/operators';
import { Subject,throwError } from "rxjs";
@Injectable({ providedIn: 'root' })
export class PostsService {
  // Using Subject as an error

   error = new Subject<string>();




  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };

    this.http
      .post<{ name: string }>(
        'https://http-28fc2-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      } ,error => {
        this.error.next(error.message);
        
      } );
  }

  DeletePosts() {
    return this.http.delete(
      'https://http-28fc2-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    );

  }
  fetchPosts() {
    // Implement the logic to fetch posts from the server

    return this.http
      .get<{ [key: string]: Post }>(
        'https://http-28fc2-default-rtdb.europe-west1.firebasedatabase.app/posts.json', 
        {
          headers: new HttpHeaders({"Custom-Header": 'Hello'})
        }
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
          catchError( errorRes => {
            //Sent to analytics Server
             return throwError(errorRes)
          })
      )
  }
}

