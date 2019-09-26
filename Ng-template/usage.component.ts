import { Component } from '@angular/core';

@Component({
  template: `
    <card-or-list-view
        [items]="items"
        [mode]="mode">
      <div*cardItem="let item">
        <h1>{{item.header}}</h1>
        <p>{{item.content}}</p>
      </div>
      <li*listItem="let item">
        {{item.header}}: {{item.content}}
      </li>
    </card-or-list-view>
`
})
export class UsageExample {
  mode = 'list';
  items = [
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    } // ... more items
  ];
}