import { Pipe, PipeTransform } from '@angular/core';
import { coin } from '../model/coin';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: coin[], page: number, items:number): any {
    if (page > 0){
      return value.slice(page, page +items);
    }
    return value;
  }

}
