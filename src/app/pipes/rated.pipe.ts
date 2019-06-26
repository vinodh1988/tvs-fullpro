import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rated'
})
export class RatedPipe implements PipeTransform {

  transform(target: any, empcount?: any): any {
      if(target>=7000)
         return target+"*";
      else
         return target;
  }

}
