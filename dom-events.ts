import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-events',
  templateUrl:`
   <button (click)="handleClick()">Save</button>
   
  <button (click)="handleClick1(); handleClick2(); …">Save</button>
  <button (click)="handleClick($event)">Save</button>
  <button (click)="handleClick($event.target)">Save</button>
  <input (keydown.enter)="onEnterKey($event)">
  <input (keyup.control.shift.enter)="onCtrlShiftEnter($event)">
  <button (document:click)="handleClick()">Save</button>
  `
 
})
export class DomEvents implements OnInit {

  name: string;
  myVar: any;

  handleClick(){
    this.name = 'sai'
  
  }
  secEve() {
    this.myVar = 1004
  }
  constructor() { }

  ngOnInit() {
  }

}
