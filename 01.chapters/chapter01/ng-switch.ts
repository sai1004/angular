import { Component  } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl:  `
  
 <div *ngFor="let item of persons">
    <ul [ngSwitch]="item.country">
  
        <li *ngSwitchCase="Egypt">
            {{ item.name }}  {{ item.age }}
        </li>
        <li *ngSwitchCase="France">
             {{ item.name }}  {{ item.age }}
        </li>
        <li *ngSwitchCase="Canada">
             {{ item.name }}  {{ item.age }}
        </li>
        <li *ngSwitchDefault>
             {{ item.name }}  {{ item.age }}
        </li> 

    </ul>

 </div>
  
  `
 
})

export class AppComponent  {


persons: any[] = [

  { name:"Jim", age:50,country:"France" },
  { name:"Kim", age:40,country:"Egypt" },
  { name:"JoJo", age:60,country:"Canada" },
  { name:"Pogo", age:80,country:"Egypt" },
  { name:"FOo", age:10,country:"Canada" },
  { name:"Bar", age:30,country:"France" },
  { name:"kimmy", age:20,country:"UK" },
  { name:"Jim", age:10,country:"India" },  

]

}
