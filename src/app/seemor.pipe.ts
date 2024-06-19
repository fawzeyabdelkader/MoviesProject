import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemor'
})
export class SeemorPipe implements PipeTransform {

  transform(overview:string,limit:number): string {
    return overview.split(' ').slice(0,limit).join(' ');
  }

}
