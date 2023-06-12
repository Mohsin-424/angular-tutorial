import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ServerElementComponent implements OnInit, OnChanges {
  // Assigning an Alias
  @Input('srvElement') element!: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name!: string;

  constructor() {
    console.log('Constructer has been called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('NgOnchages called');
    console.log(changes);
  }
  ngOnInit() {
    console.log('NgOnInt has been initalized');
  }
}
