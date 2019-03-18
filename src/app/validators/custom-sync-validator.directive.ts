import {Directive, Input} from '@angular/core';
import {
  AsyncValidatorFn, AbstractControl, ValidationErrors,
  Validator, NG_VALIDATORS, ValidatorFn
} from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/timer';


export function forbiddenNameSyncValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // funzione di validazione con Observable
    if (control.value === "testsync") {
      return {"customError": "Error"};
    } else {
      return null;
    }
  };
}


@Directive({
  selector: '[appForbiddenNameSync]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorSyncDirective, multi: true}]
})
export class ForbiddenValidatorSyncDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return forbiddenNameSyncValidator()(control);
  }
}
