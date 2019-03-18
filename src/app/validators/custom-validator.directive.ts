import {Directive, Input} from '@angular/core';
import { AsyncValidatorFn, AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/timer';


export function forbiddenNameValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    // funzione di validazione con Observable
    return Observable.of(control).map( control => {
        if (control.value === "test") {
          return {"customError": "Error"};
        } else {
          return null;
        }
      }
    );
  }
}


@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements AsyncValidator {

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null >{
    return forbiddenNameValidator()(control);
  }
}


