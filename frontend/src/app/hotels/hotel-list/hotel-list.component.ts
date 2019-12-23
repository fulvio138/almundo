import { Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { Component, OnInit, Input, Host } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  @Input() searchHotelByStars: string[];  
  @Input() searchHotel : string;

  hotels$: Observable<Hotel[]>;
  selectedId: number;

  constructor(
    private service: HotelService,
    private route: ActivatedRoute
  ) { 
  }
  ngOnInit() {    
    this.hotels$ = this.route.paramMap.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getHotels();
      })      
    )
  }
  counter = Array;  
  numberReturn(length){
    return new Array(length);
  }
}
