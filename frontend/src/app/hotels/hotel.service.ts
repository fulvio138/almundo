import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hotel } from './hotel';

@Injectable({
    providedIn: 'root',
})
export class HotelService{
    selectedHotel: Hotel;
    hotels: Hotel[];
    readonly URL_API = 'http://localhost:3000/api/hotels';

    constructor(private http: HttpClient) { 
        this.selectedHotel = new Hotel();
    }; 

    getHotels(): Observable<Hotel[]>{
        return this.http.get<Hotel[]>(this.URL_API); 
    }

    getHotel(id: number | string){        
        return this.getHotels().pipe(
            map((hotels: Hotel[]) => hotels.find(hotel => hotel.id === +id))
        );
    }
}
