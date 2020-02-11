import { Injectable } from '@angular/core';

@Injectable()
export class PopcornService {

  constructor() {
    console.log("Popcorn has been injected!");
  }

  cookPopcorn(qty) {
    console.log(qty, "bags of popcorn cooked!");
  }

}





import { Component } from '@angular/core';
import { PopcornService } from './popcorn.service';

@Component({
  selector: 'app-root',
  templateUrl:  `
  
  <input type="number" #qty placeholder="How many bags?">
<button type="button" (click)="cookIt(qty.value)">
  Cook it!
</button>
  
  `,
 
  providers: [PopcornService]
})
export class AppComponent {
  constructor(private popcorn: PopcornService) {}

  cookIt(qty) {
    this.popcorn.cookPopcorn(qty);
  }

}
