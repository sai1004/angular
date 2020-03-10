import { Component  } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl:  `
  
  <app-child [parnetProp]="name" [email]="email" (notify)=getNotification($event) (message)="getMsg=$event" ></app-child>
  
      <p> {{ getMsg }} </p>

  `
 
})

export class AppComponent  { // parentComponent

name: string = "sam"

email: string = "sam@example.com"
  
  getNotification($event){
     console.log($event)
  }

}

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

import { Component , Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl:  `
  
  <h1> hello {{name}}  </h1>
  <p> {{email}} </p>

<button (click)="onSubmit()"> submit </button>  

`
 
})
export class childComponent  {

@Input("parnetProp") public name:string; 

@Input()
email:string;
  
@Output() notify = new EventEmitter();
  
@Output() message = new EventEmitter();
  
  
  onSubmit($event){
    
    this.notify.emit($event)
    this.message.emit("I was clicked in child component")
  }

  

}
