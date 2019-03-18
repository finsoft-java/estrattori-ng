import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'nbpStringify'
})
export class NbpStringify implements PipeTransform {

  transform(obj: any): string {
    return JSON.stringify(obj);
  }
}
