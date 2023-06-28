import {} from '@angular/core';
import { Directive,
  OnInit,
  Renderer2 ,
   ElementRef ,
    HostListener,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit{
@Input() defaultColor:string = 'transprent';
@Input('appBetterHighlight') highLightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor:string ='';



  constructor( private elRef:ElementRef ,private  renderer :Renderer2) { 

  }
ngOnInit(){
// this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue',false,false);
this.backgroundColor = this.defaultColor;

}
@HostListener('mouseenter') mouseover(eventData:Event){
//  this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
// this.backgroundColor = 'magenta';
this.backgroundColor = this.highLightColor;

}

@HostListener('mouseleave') mouseleave(eventData:Event){
//  this.renderer.setStyle(this.elRef.nativeElement,'background-color','trasnparent');
// this.backgroundColor ='pink';
this.backgroundColor = this.defaultColor;

}
}
