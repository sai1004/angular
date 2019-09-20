import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-child',
  templateUrl: `

  <div>
  {{ book }}
  </div>
  
  `
  
})
export class BookChildComponent implements OnInit {

  @Input() book: string;
  constructor() { }

  ngOnInit() {
  }

}
