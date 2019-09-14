 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-events',
  templateUrl:`
 
   <h1> Types Of Directives </h1>
  
  <ul>
  <li> Component <li>
  <p> '<bs-app></bs-app>' </p>
  
  <li> Structural  <li>
  
  <p> NgIf, NgFor, NgStyle </p>
  
  <li> Attribute <li>

  <p highlight>  in-line attribute </p>   // reffer highlight.directive.ts 
  
  </ul>
  
  
  
  `
})
export class OnewayDbinding implements OnInit {
 
 showImg: boolean = true;
 
 hideImg():void {  // this void method wont return a value
  this.showImg = !this.showImg
 }
 
  constructor() { }

  ngOnInit() {
  }

}
