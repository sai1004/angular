import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-book-parent",
  templateUrl: `
  
  <section class="container">
  <div *ngFor="let book of books">
  <app-book-child [book]='book' > </app-book-child> //sending input value to the child component by property name and value
  </div>
  </section>

  `
})
export class BookParentComponent implements OnInit {
  books: string[];

  constructor() {
    this.string = [
      "harry potter",
      "student of year",
      " angular ",
      "python",
      "nodejs"
    ];
  }

  ngOnInit() {}
}
