import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'notEmptyArray',
    pure: false 
})
export class NoEmptyArray implements PipeTransform {
    transform(items: any[]): any {
       return items.reduce((res, elem) => {
        if (elem) res.push(elem)
        return res
    }, [])
    }
}