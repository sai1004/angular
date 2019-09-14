import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-events',
  templateUrl:`
 
   <h1> Two way Binding </h1>
  <input [(ngModel)]='searchBox'> <!----- Bannana in a Box ------ >
  
  <p> need to import FormsModule in NgModule 
    import { FormsModule } from '@angular/forms';
    
    [] are used to indicate property binding,
    () are used to send the notification to class property in ts file when user enter some data in html input
    
  </p>
  
  
  
  `
})
export class OnewayDbinding implements OnInit {
 
 searchBox: string = "";
 
  constructor() { }

  ngOnInit() {
  }

}
