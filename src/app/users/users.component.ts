import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
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
}
