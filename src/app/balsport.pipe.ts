import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balsport'
})
export class BalsportPipe implements PipeTransform {

  transform(values: any[], args?: any): any {
    return args ? values : values.filter((item) => item.isBalSport);
  }

}
