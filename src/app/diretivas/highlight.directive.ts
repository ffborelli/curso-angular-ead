import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor( private el : ElementRef, private renderer : Renderer2 ) {

    //console.log ( this.el );
    //this.el.nativeElement.style.backgroundColor = 'yellow';

    this.renderer.setStyle (this.el.nativeElement, 'background-color', 'blue');
   }

}
