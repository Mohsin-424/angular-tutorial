import { Component, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';

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
        count++;
      }, timeout);

      return () => {
        clearInterval(intervalHandler);
      };
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    if (this.firstObsSubscription) {
      this.firstObsSubscription.unsubscribe();
    }
  }
}
