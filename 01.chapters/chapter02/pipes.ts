import { Component  } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl:  `
  
    <h1> Builtin Pipes:</h1>


   <h4> {{ name | uppercase }} </h4>
   
   <h4> {{ name | lowercase }}  </h4>
   
   <h4> {{ name | titlecase }}  </h4>
   
   <h4> {{ name | slice3:5 }} </h4>
   
   <h4>  {{ 5.678 | number:"1.2-3" }} </h4> // 5. == 1
   <h4>  {{ 5.678 | number:"3.2-3" }} </h4> //005. == 3
    
    <h4> percentage: </h4>
    <h4>  {{ 5.678 | percent }} </h4>
  
   <h4> currency </h4>
      <h4>  {{ 123 | currency }} </h4>
      <h4>  {{ 123 | currency:"GBP" }} </h4>
      <h4>  {{ 123 | currency:"IND" }} </h4>
      
    <h4>Date pipe:</h4>
 
   <h4>  {{ date }} </h4>
   
   <h4>  {{ date | date:"shortDate" }} </h4>
   <h4>  {{ date | date:"shorTime" }} </h4>
  
  `
 
})

export class AppComponent  {

name = "Angular"
date = new Date()

}
