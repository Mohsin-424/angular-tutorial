import { Component, OnInit, Input, ViewEncapsulation,OnChanges,SimpleChanges,DoCheck ,AfterContentInit
,AfterViewChecked,OnDestroy


  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.

} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ServerElementComponent implements OnInit, OnChanges , DoCheck , AfterContentInit, AfterViewChecked,OnDestroy{


  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.


  // Assigning an Alias
  @Input('srvElement') element!: {
    type: string,
    name: string,
    content: string
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
  ngDoCheck(){
    console.log("ngDoCheck has been called");
  }
  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('AfterContent Init has been called ');
  }
  ngAfterViewChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("NgAfterViewChecked  has been called")
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ngOnDestroy haS BEEN CALLED")
  }
}
