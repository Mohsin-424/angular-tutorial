
import { interval} from "rxjs";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

 private firstObsSubscription!: Subscription;
 
  constructor() { }

  ngOnInit() {
    // I am building a new Observalbe here
    // 1000 is period and next in refering next counting word as prefixes
    this.firstObsSubscription = 
    interval( 1000).subscribe( count => {
      console.log(count);
    });
  }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
// We unsubscibe each Observable to prevent Memory leaks

