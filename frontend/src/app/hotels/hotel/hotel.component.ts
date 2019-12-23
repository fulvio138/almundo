import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {    
  }

  filter_name_hotel = '';
  handleSearch(value:string){
    this.filter_name_hotel = value;
  }
  
  filter_array_stars = [];
  handleSearchByStars(value){
    this.filter_array_stars = value;
  }  

}
