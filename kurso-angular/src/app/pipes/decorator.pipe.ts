import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorator'
})
export class DecoratorPipe implements PipeTransform {

  transform(value: string, dec: string): string {
    return dec + dec + value + dec + dec;
  }

}
