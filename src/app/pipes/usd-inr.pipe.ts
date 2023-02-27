import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // angular custom pipes
    // const[x]=args;
    return null;
  }

}
