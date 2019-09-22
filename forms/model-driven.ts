import { Component,   } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';

@Component({
  selector: "model-driven-",
  templateUrl: `
 
  <section class="sample-app-content">
  <h1>Model-based Form Example:</h1>
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <p>
          <label>First Name:</label>
          <input type="text" formControlName="firstName">
      </p>
      <p>
          <label>Password:</label>
          <input type="password" formControlName="password">
      </p>
      <p>
          <button type="submit" [disabled]="!form.valid">Submit</button>
      </p>
  </form>
</section>
  
  `
})
export class  ModelDriven     {

    form: FormGroup;
    
    firstName = new FormControl("", Validators.required);
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "firstName": this.firstName,
            "password":["", Validators.required]
        });
    }
    onSubmitModelBased() {
        console.log("model-based form submitted");
        console.log(this.form);
    }

    // this.form.valueChanges
    //     .map((value) => {
    //         value.firstName = value.firstName.toUpperCase();
    //         return value;
    //     })
    //     .filter((value) => this.form.valid)
    //     .subscribe((value) => {
    //        console.log("Model Driven Form valid value: vm = ",
    //                    JSON.stringify(value));
    //     });

  }


//   https://gist.github.com/jhades/939d05ff8e062609a04e7e73bb337e64#file-02-ts