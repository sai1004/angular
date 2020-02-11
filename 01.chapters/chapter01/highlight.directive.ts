import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // use it any where in the project in tags
})
export class HighlightDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement,'backgroundColor', 'yellow');
    }
}

// Example

// @Component({
//   selector: 'app-dom-events',
//   templateUrl:`
 
//    <h1 appHighlight>  property Binding </h1>
  
//   `
// })
