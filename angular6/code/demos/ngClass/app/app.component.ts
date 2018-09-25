import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <my-class-binding-demo></my-class-binding-demo>
        <hr>
        <my-multiple-class-binding-demo></my-multiple-class-binding-demo>
        <hr>
        <my-ngclass-binding-demo></my-ngclass-binding-demo>
    `,
})
export class AppComponent {}
