import { ActivatedRoute,Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: {id: number, name: string};
// To get data from user child component
  constructor ( private route: ActivatedRoute ) { }

  ngOnInit() {
// We load our data to DOM using snapshot object in route
    this.user = {
      id: this.route.snapshot.params['id'],
      name:  this.route.snapshot.params['name']
    };
    // params is an observable is feature to perform asynchronous tasks

      this.route.params.subscribe(
      ( params : Params ) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
      );
  }

}
