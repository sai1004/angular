import { Component, ContentChild, Input, TemplateRef } from "@angular/core";
import { CardItemDirective } from "./card-item.directive";
import { ListItemDirective } from "./list-item.directive";

@Component({
  selector: "card-or-list-view",
  templateUrl: `
  <ng-container [ngSwitch]="mode">
<ng-container *ngSwitchCase="'card'">
  <ng-container *ngFor="let item of items">
    <ng-container *ngTemplateOutlet="cardItemTemplate"></ng-container>
  </ng-container>
</ng-container>
<ul *ngSwitchCase="'list'">
  <li *ngFor="let item of items">
    <ng-container *ngTemplateOutlet="listItemTemplate"></ng-container>
  </li>
</ul>
</ng-container>
  
  `
})
export class CardOrListViewComponent {
  @Input() items: any[] = [];

  @Input() mode: "card" | "list" = "card";

  // Read in our structural directives as TemplateRefs
  @ContentChild(CardItemDirective, { read: TemplateRef }) cardItemTemplate;
  @ContentChild(ListItemDirective, { read: TemplateRef }) listItemTemplate;
}
