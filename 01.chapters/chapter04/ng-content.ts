import { Component  } from "@angular/core";

@Component({
  selector: "app-fav",
  templateUrl:  `
  
  <h1> hello from {{name}} Component </h1>
  
  <ng-content select="p"> </ng-content>  // select tag that is used in the componet selector
  
  `
 
})
export class favComponent  {

name: string = "fav"

}

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

import { Component  } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl:  `
  
  <app-fav>
  
      <p> hello world </p>
  
  </app-fav>
  
  `
 
})

export class AppComponent  {



}
