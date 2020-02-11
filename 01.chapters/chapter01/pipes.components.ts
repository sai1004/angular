import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-events',
  templateUrl:`
 
   <h1> Types Of Pipes </h1>
  
  <ul>
  <li> Bulit-in Pipe <li>
  <p>  Ex: | uppercase | date  </p>
  
  <li> Custom Pipes  <li> 
  
  <p> | myPipeName </p> // reffer custompipe.component.ts 
 
  </ul>
  
  
  
  `
})
export class OnewayDbinding implements OnInit {
 
 
 
  constructor() { }

  ngOnInit() {
  }

}
