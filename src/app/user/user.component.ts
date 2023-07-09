import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id!: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Here Params is an Observable
    // /we subscibe observables to nake them ablke to emit data
    this.route.params.subscribe((params: Params) => {
      // here +params is making id a number
      this.id = +params['id'];
    });
  }
}
// Angular observables are protected by angular itself and we dont need to manually unsubscribe observables manually here
