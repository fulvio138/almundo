import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStars'
})
export class FilterStarsPipe implements PipeTransform {

  transform(lista: any[], stars: string[]): any[] {
    if (stars.length == 0) return lista;
    function contains(starsArray:string[], hotelstars:string): boolean {
      return starsArray.includes(hotelstars.toString())
    }    
    return lista.filter(hotel => contains(stars,hotel.stars))
  }

}