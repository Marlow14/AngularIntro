import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
   <h2>Reactive Forms</h2>
   <form [formGroup]="form" (submit)="onSubmit()">
       <div formGroupName="name">
           <input class="form-control" 
                  type="text" name="firstname" formControlName="firstname">
           <input class="form-control"
                  type="text" name="lastname" formControlName="lastname">
       </div>

       <input class="form-control" type="number" name="age" formControlName="age">
       
       <br>
       <button type="submit">Submit</button>
  </form>
  <br>    
  <p>Form value:</p> <pre>{{form.value | json}}</pre>
  <p>Form status:</p> <pre>{{form.status | json}}</pre>
 


  </div>
  `,
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  //basic reactive
  //   createForm(){
  //     this.form = new FormGroup({
  //       firstname: new FormControl(''),
  //       lastname: new FormControl('', [Validators.required, Validators.minLength(3)])
  //     })
  // }

  //custom validator
  // createForm(){
  //   this.form = this.formBuilder.group({
  //     firstname: new FormControl('', this.forbiddenName('Craig')),
  //     lastname: new FormControl('', [])
  //     // lastname: new FormControl('', [Validators.required, Validators.minLength(3)])
  //   })
  // }

  // createForm(){
  //     this.form = this.formBuilder.group({
  //         firstname: ['', this.forbiddenName('Craig')],
  //         lastname:['', []]
  //     })
  // }

  //cross control validation
  createForm() {
    this.form = this.fb.group({
      name: this.fb.group(
        {
          firstname: [''],
          lastname: [''],
        },
        { validator: this.namesNotTheSame }
      ),
      age: [''],
    });
  }

  namesNotTheSame(group: FormGroup): { [key: string]: any } {
    let firstname = group.controls['firstname'];
    let lastname = group.controls['lastname'];
    if (firstname.value === lastname.value) {
      return { namesNotTheSame: true };
    }
    return null;
  }

  // forbiddenName(control: AbstractControl): {[key: string]: any}{
  //   if(control.value.toLowerCase()== 'craig'){
  //     return {forbiddenName: true}
  //   }
  //   return null;
  // }

  forbiddenName(forbiddenName) {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control.value.toLowerCase() == forbiddenName.toLowerCase()) {
        return { forbiddenName: true };
      }
      return null;
    };
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
