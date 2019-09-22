 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl:`
 
  <section class="sample-app-content">
    <h1>Template-driven Form Example:</h1>
    <form #f="ngForm" (ngSubmit)="onSubmitTemplateBased()">
        <p>
            <label>First Name:</label>
            <input type="text"  
                [(ngModel)]="user.firstName" required>
        </p>
        <p>
            <label>Password:</label>
            <input type="password"  
                [(ngModel)]="user.password" required>
        </p>
        <p>
            <button type="submit" [disabled]="!f.valid">Submit</button>
        </p>
    </form>
</section>
  
  `
})
export class TemplateDriven implements OnInit {
 
 
    user: Object = {};

    onSubmitTemplateBased() {
        console.log(this.vm);
    }
 
  constructor() { }

  ngOnInit() {
  }

}
