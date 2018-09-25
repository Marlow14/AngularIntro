import { Component } from '@angular/core';

@Component({
  selector: 'else-cmp',
  template: `
    <button (click)="isValid = !isValid">update</button>
  
    <div *ngIf="isValid;else other_content">
       content here ...
    </div>

    <ng-template #other_content>other content here...</ng-template>

  `,
})
export class ElseComponent {
  isValid: boolean = true;
  constructor() {}
}

@Component({
  selector: 'else-then-cmp',
  template: `
      <button (click)="isValid = !isValid">update</button>

       <div *ngIf="isValid;then content else other_content"></div>
       
       <ng-template #content>content here...</ng-template>
       <ng-template #other_content>other content here...</ng-template> 

  `,
})
export class ElseThenComponent {
  isValid: boolean = true;
  constructor() {}
}

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    <h4>Using else :</h4>
    <br>
    <else-cmp></else-cmp>
    <br>
    <br>
    <h4>Using else then:</h4>
    <br>
    <else-then-cmp></else-then-cmp>
    
  `,
})
export class App {
  isValid: boolean = true;
  constructor() {}
}
