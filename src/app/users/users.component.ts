import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit{



constructor( private route:Router ) {}
ngOnInit() {

};


  users = [
    {
      id: 10,
      name: 'Muhammad '
    },
    {
      id: 20,
      name: 'Mohsin'
    },
    {
      id: 30,
      name: 'Ismail'
    }
  ];


onLoadHome() {
  this.route.navigateByUrl('');
}
};