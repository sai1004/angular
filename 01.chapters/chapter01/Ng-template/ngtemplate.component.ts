import { Component } from '@angular/core';

@Component({
  template: `

<section *ngIf=' course.length > 0; then recordsFound else noRecoredFound'></section>

<ng-template #recordsFound>
		<h4>recored found</h4>
</ng-template>

<ng-template #noRecoredFound>
    <h4>recored not found</h4>
</ng-template>

`
})
export class NgTemplateOutletExample {
     course = [1,2,3]

}


 
