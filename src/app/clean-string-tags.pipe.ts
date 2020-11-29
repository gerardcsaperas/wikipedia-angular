import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanStringTags'
})
export class CleanStringTagsPipe implements PipeTransform {

  transform(value: string) {
    let firstSplit = value.split('<');
    firstSplit.forEach(string => {
      string.split('>');
    })
    console.log(firstSplit)
  }

}
