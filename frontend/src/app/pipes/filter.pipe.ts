import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(lista: any[], text: string): any[] {
    if (!text) return lista
    return lista.filter(hotel => hotel.name.toUpperCase().includes(text.toUpperCase()))
  }

}
