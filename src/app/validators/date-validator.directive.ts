import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateDate][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateValidator), multi: true }
  ]
})

export class DateValidator implements Validator {

  validate(c: any): { [key: string]: boolean } | null {

    if (!c.value)
      return null;

    if (c.pristine) {
      return null;
    }
    if (c.value == undefined || c.value == '' || c.value == null)
      return null;

    let cc: string = null;
    let month: any = null;
    let day: any = null;
    let year: any = null;


    if (typeof c.value == "string") {



      if (! /^[.0-9]+$/.test(c.value))
        return { 'dateInvalid': true };

      var array = c.value.split('.');

      if (array) {
        if (array[0] && array[0].length > 2)
          return { 'dateInvalid': true };
        if (array[1] && array[1].length > 2)
          return { 'dateInvalid': true };
        if (array[2] && array[2].length > 4)
          return { 'dateInvalid': true };
      }

      day = c.value.substr(4, 2).toString();
      month = c.value.substring(2, 0).toString();
      year = c.value.substr(8).toString();

    } else if (c.value instanceof Date) {
      //verifico se è una data e la trasformo in stringa x controllarla
      day = ("00" + (c.value.getDate()).toString()).slice(-2);
      month = ("00" + (c.value.getMonth() + 1).toString()).slice(-2);
      year = ((c.value.getFullYear()).toString());
    }
    else if (c.value.day && c.value.month && c.value.year) {
      //verifico se è di tipo NgbDateStruct e la trasformo in stringa x controllarla
      day = ("00" + ((c.value.day).toString()).slice(-2)).slice(-2);
      month = ("00" + ((c.value.month).toString()).slice(-2)).slice(-2);
      year = ((c.value.year).toString());
    }

    // console.log(day + "-" + month + "-" + year)

    if (day && day.length != 2) {
      return { 'dateInvalid': true };
    }
    if (month && month.length != 2) {
      return { 'dateInvalid': true };
    }
    if (year && year.length != 4) {
      return { 'dateInvalid': true };
    }


    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return { 'dateInvalid': true };
    }

    // console.log(year)
    cc = day + month + year; //stringa da controllare

    // console.log(cc)

    day = Number(day);
    month = Number(month);
    year = Number(year);


    if (day < 1 || day > 31) {
      return { 'dateInvalid': true };
    }

    if (month < 1 || month > 12) { // check month range
      return { 'dateInvalid': true };
    }

    //questi mesi hanno 30 giorni
    if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
      return { 'dateInvalid': true };
    }

    if (month == 2) { // check for february 29th
      var isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
      if (day > 29 || (day === 29 && !isleap)) {
        return { 'dateInvalid': true };
      }
    }

  }

}


