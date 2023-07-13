import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dateToday!: string;
  name!:string;
construcotr(){

}
ngOnInit(){
  this.dateToday =  new Date().toDateString();

  this.name = 'Muhammad Mohsin';
}
}
