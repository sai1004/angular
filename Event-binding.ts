import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-events',
  templateUrl:`
 
   <h1> Event Binding </h1>
 
 <img src='../../assetss/img.png'  *ngif='showImg'>  
 
 <button (click)='hideImg()'> {{ showImg ? 'Hide Img':'Show Img' }}</button>
  
  <p>  event binding is response to user actions such as click event 
  </p>
  
  
  
  `
})
export class OnewayDbinding implements OnInit {
 
 showImg: boolean = true;
 
 hideImg():void {  // this void method wont return a value
  this.showImg = !this.showImg
 }
 
  constructor() { }

  ngOnInit() {
  }

}
