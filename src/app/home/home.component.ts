import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private firstObsSubscription!: Subscription;

  constructor() { }

  ngOnInit() {
    const customIntervalObservable = new Observable<number>(observer => {
      let count = 0;
      const timeout = 1000;
      const intervalHandler = setInterval(() => {
        observer.next(count);
        if (count===9) {
          observer.complete();
        }
        if (count > 5) {
          // Observer.error method is used here
          observer.error(new Error('Count is greater than 10'));
        }
        count++;
      }, timeout);

      return () => {
        clearInterval(intervalHandler);
      };
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
        alert(error);
      } , () =>{
        console.log('Complered');
       alert('Completed');
      }
    );
  }

  ngOnDestroy() {
    if (this.firstObsSubscription) {
      this.firstObsSubscription.unsubscribe();
    }
  }
}
