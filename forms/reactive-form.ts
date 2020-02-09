 
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: `
  
  <div fxLayoutAlign="center center">
  <div>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="username"> username</label>
        <input id="username" name="username" formControlName="username" />
        <span
          *ngIf="
            !loginForm.get('username').valid &&
            loginForm.get('username').touched
          "
        >
          username is required
        </span>
      </div>
      <div class="form-group">
        <label for="password"> password</label>
        <input name="password" id="password" formControlName="password" />
        <span
          *ngIf="
            !loginForm.get('password').valid &&
            loginForm.get('password').touched &&
            loginForm.get('password').errors?.minlength
          "
        >
          minlength is 4
        </span>
        <span
          *ngIf="
            !loginForm.get('password').valid &&
            loginForm.get('password').touched &&
            !loginForm.get('password').errors?.minlength
          "
        >
          password is required
        </span>
      </div>
      <div>
        <button type="submit" class="btn" [disabled]="!loginForm.valid">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
  
  `
 
})
export class ReactiveFormComponent implements OnInit {

  loginForm:FormGroup;

  constructor() { }

  ngOnInit( ) {
  this.loginForm = new FormGroup({
    username: new FormControl(null,Validators.required),
    password:new FormControl(null,[Validators.required,Validators.minLength(4)])
  })
  }

  onSubmit() {
    console.log('formGroup',this.loginForm);
    console.log('username:',this.loginForm.value.username);

    console.log('password:',this.loginForm.value.password)

  }

}
