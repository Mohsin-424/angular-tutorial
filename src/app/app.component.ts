import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  position!:number;
  name!: string;
  Subproject!: string;
  type!: string;
  
dataArray= [ 
{position:1,name:'Mohsin',Subproject:'Type1',type:'urgent'},
{position:2,name:'Alpha',Subproject:'Type2',type:'urgent'},
{position:3,name:'Bravo',Subproject:'Type3',type:'urgent'},
{position:4,name:'Charlie',Subproject:'Type4',type:'urgent'},
{position:5,name:'Delta',Subproject:'Type5',type:'urgent'},
{position:6,name:'Shoaib',Subproject:'Type6',type:'urgent'},
{position:7,name:'Usman',Subproject:'Type7',type:'urgent'},
{position:8,name:'Bakar',Subproject:'Type8',type:'urgent'},
{position:9,name:'Hnazala',Subproject:'Type9',type:'urgent'},
{position:10,name:'Ahmad',Subproject:'Type10',type:'urgent'}
];
 displayedColumns: string[] = ['position', 'name', 'Subproject', 'type'];
  dataSource = this.dataArray;
  
}
