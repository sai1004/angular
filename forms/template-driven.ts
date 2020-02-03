 
import { Component, OnInit } from '@angular/core';
import { Profile } from "../../entities/Profile";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl:`
 
<section>
  <h1>Template driven Form Example:</h1>

  <form #newUserForm="ngForm" (ngSubmit)="onSubmit(newUserForm)">
    <input
      type="text"
      placeholder="Enter name"
      required
      maxlength="25"
      [(ngModel)]="profile.name"
      name="name"
      #profileName="ngModel"
    />
    <div *ngIf="!profileName.valid && profileName.touched">
      User name is required!
    </div>

    <br />
    <br />
    <input
      type="number"
      placeholder="Mobile"
      required
      [(ngModel)]="profile.mobile"
      name="mobile"
      #profileMobile="ngModel"
    />
    <div *ngIf="!profileMobile.valid && profileMobile.touched">
      Mobile is required!
    </div>

    <br />
    <br />
    <input
      type="email"
      placeholder="Email"
      required
      [(ngModel)]="profile.email"
      name="email"
      #profileEmail="ngModel"
    />
    <div *ngIf="!profileEmail.valid && profileEmail.touched">
      Email is required!
    </div>

    <br />
    <br />

    <input
      type="password"
      placeholder="Password"
      required
      [(ngModel)]="profile.password"
      name="password"
      #profilePassword="ngModel"
    />
    <div *ngIf="!profilePassword.valid && profilePassword.touched">
      Password is required!
    </div>

    <br />
    <br />
    <button type="submit" [disabled]="!newUserForm.form.valid">
      Register
    </button>

    <button type="button" (click)="newUserForm.reset()">
      Reset
    </button>
  </form>
  <br />
  <br />
  <pre>{{ newUserForm.form.value | json }}</pre>
  <!-- Value of whole form -->
  <pre>User name: {{ profileName.value }}</pre>
  <!-- Value of userName field -->
  <pre>Valid form? {{ newUserForm.form.valid | json }}</pre>
  <!-- Validity of whole form -->
</section>

  
  `
})
export class TemplateDriven implements OnInit {
 
 
    @Input() profile: Profile;

  constructor() {
    this.profile = new Profile()
  }

  ngOnInit() {}
 

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // ...our form is valid, we can submit the data
    }
  }

}
