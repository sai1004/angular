import { Component } from '@angular/core'


@Component({
  template: `
  <div [ngClass]=" server ? 'active' : 'inactive' ">
  <h1> server is in {{ server }} state </h1>
  
  </div>
 
 <button (click)="onClick()"> click </button>
 
  `,
  
  styles: [
  
  `
  .active{
  
  color:cyan;
  
  }
  
  .inactive{
  color: red;
  
  }
  
  `
  
  ]

})


export class NgClassComponent {

  server: boolean = true;
  
  onClick() {
  
  this.server = !this.server
  
  }


}
