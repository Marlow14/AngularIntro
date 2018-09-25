import { AbstractControl } from '@angular/forms';
import { CustomValidators } from '../../../../../solutions/angular/lab17-forms_reactive_custom_validator/app/shared/custom.validators';


export class CustomValidators{
  static forbiddenName(forbiddenName) {
    return (control: AbstractControl): any => {
      if (control.value.toLowerCase() == 'impossible') {
        return { forbiddenName: true };
      }
      return null;
    }

  }
}
