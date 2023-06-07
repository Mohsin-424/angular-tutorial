import { Component ,OnInit} from '@angular/core';

type ServerElement = { type: string; name: string; content: string };
type ServerElements = ServerElement[];

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // Rest of your component code...
  constructor(){}
ngOnInit(){

}
onAddServer(){
  this.serverElements.push({
    type:'server',
    name: this.newServerName,
    content: this.newServerContent
  });
}
onAddBlueprint () {
    this. serverElements.push({
      type:'server',
      name: this.newServerName,
      content: this. newServerContent,
    });
  }
}

