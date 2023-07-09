import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map ,filter} from "rxjs/operators";
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
        if (count===5) {
          observer.complete();
        }
        if (count > 7) {
          // Observer.error method is used here
          observer.error(new Error('Count is greater than 10'));
        }
        count++;
      }, timeout);

      return () => {
        clearInterval(intervalHandler);
      };
    });

    // Here we are using Operators
    







    this.firstObsSubscription = customIntervalObservable.pipe(filter(data =>{
      return data>0;
    }),

    map((data:number)=> {
      return 'Round'+ (data+1);
    }))
       .subscribe(
      (data: string) => {
        console.log('Round:'+(data+1));
      },
      (error:Error) =>{
        
        console.error(error);
        alert(error);
      } , () =>{ 
        console.log('Completed');
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
