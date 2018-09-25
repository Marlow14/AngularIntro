import { Component } from '@angular/core';

//always posts form with submit or ngSubmit until FormsModule imported
//after that it seems to always preventDefault for both submit and ngSubmit

@Component({
  selector: 'my-app',
  template: `
  <div class="container">

   <h2>Submit</h2>
  <form (submit)="onSubmit()">

    <input type="text" name="firstname" ngModel>
     <button type="submit">Submit</button>

  </form>

  <h2>ngSubmit</h2>
  <form (ngSubmit)="onNgSubmit()">

    <input type="text" name="firstname" ngModel>
     <button type="submit">ngSubmit</button>

  </form>

  </div>
  `,
})
export class AppComponent {
  onSubmit() {
    console.log('submit');
  }

  onNgSubmit() {
    console.log('ngsubmit');
  }
}
