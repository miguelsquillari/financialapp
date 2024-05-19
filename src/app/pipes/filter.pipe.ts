import { Pipe, PipeTransform } from '@angular/core';
import { coin } from '../model/coin';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: coin[], page: number = 1, items:number): any {

    let start:number = 0;
    let end:number = 0;

    if (page == 0) {start = 0; end = items} else{
      start = (page  * items) - items;
      end = page * items;
    }
      return value.slice(start, end);
  }

}
