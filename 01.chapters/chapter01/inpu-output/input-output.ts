import { Component  } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl:  `
  
  <app-child [parnetProp]="name" [email]="email"></app-child>
  
  `
 
})

export class AppComponent  { // parentComponent

name: string = "sam"

email: string = "sam@example.com"

}

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

import { Component , Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl:  `
  
  <h1> hello {{name}}  </h1>
  <p> {{email}} </p>

  `
 
})
export class childComponent  {

@Input("parnetProp") public name:string; 

@Input()
email:string;

}
