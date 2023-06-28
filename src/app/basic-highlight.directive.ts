
import { OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef:ElementRef) { 
    
}
ngOnInit(){
  this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.Color = 'purple';
}
}


