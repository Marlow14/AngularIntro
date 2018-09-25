import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static forbiddenName(forbiddenName) {
    return (control: AbstractControl): any => {
      if (control.value.toLowerCase() == forbiddenName.toLowerCase()) {
        return { forbiddenName: true };
      }
      return null;
    };
  }
}
