import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-child',
  templateUrl: `

  <div>
  {{ book }}
  </div>

   <button (click)='sendNotification()'> Notification </button> // from child
   
  `
  
})
export class BookChildComponent implements OnInit {

  @Input() book: string;
  
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  sendNotification() {
      this.notifyParent.emit('Some value to send to the parent');
  }
  
  constructor() { }

  ngOnInit() {
  }

}
