import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-book-parent",
  templateUrl: `
  
  <section class="container">
  <div *ngFor="let book of books">
  <app-book-child [book]='book' > </app-book-child>
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
