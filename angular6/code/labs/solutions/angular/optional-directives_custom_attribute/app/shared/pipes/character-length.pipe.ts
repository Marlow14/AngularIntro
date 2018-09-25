import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charlength',
})
export class CharacterLengthPipe implements PipeTransform {
  transform(value: string, length: number) {
    return value.substring(0, length);
  }
}
