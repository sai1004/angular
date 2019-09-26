import { Component } from '@angular/core';

@Component({
  template: `
    <ng-container *ngTemplateOutlet="templateRef; context: exampleContext"></ng-container>
    <ng-template #templateRef let-default let-other="aContextProperty">
      <div>
        $implicit = '{{default}}'
        aContextProperty = '{{other}}'
      </div>
    </ng-template>
`
})
export class NgTemplateOutletExample {
  exampleContext = {
    $implicit: 'default context property when none specified',
    aContextProperty: 'a context property'
  };
}


// output:

// <div>
//   $implicit = 'default context property when none specified'
//   aContextProperty = 'a context property'
// </div>