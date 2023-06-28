import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
tasks = [
  {name:'Mohsin', completed:true},
  {name:'Ali', completed:true},
  {name:'Raza', completed:true},
];
}
