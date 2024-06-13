import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaOfcircle'
})
export class AreaOfcirclePipe implements PipeTransform {

  transform(value: any) {
    return 3.14*value**2;
  }

}
