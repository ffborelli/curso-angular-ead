import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor(  ) {
    //private el : ElementRef, private renderer : Renderer2
    //console.log ( this.el );
    //this.el.nativeElement.style.backgroundColor = 'yellow';
    //this.renderer.setStyle (this.el.nativeElement, 'background-color', 'blue');
   }

   @HostBinding('style.background-color')
   private minhaCor : string;

   @HostListener('mouseenter')
   onMouseEnter(){
    //console.log ('onMouseEnter');
    //this.renderer.setStyle (this.el.nativeElement, 'background-color', 'blue');
    this.minhaCor = 'blue';
   }

   @HostListener ('mouseleave')
   onMouseLeave(){
    //this.renderer.setStyle (this.el.nativeElement, 'background-color', 'white');
    this.minhaCor = 'white';
   }

}
