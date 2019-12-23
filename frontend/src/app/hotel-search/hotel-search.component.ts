import { Component, OnInit, Output, EventEmitter,ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})
export class HotelSearchComponent implements OnInit {

  disabled = false;
  activeIds = ["ngb-panel-0","ngb-panel-1"];

  stars_array = [{ stars: "5" }, { stars: "4" }, { stars: "3" }, { stars: '2' }, { stars: '1' }];
  myForm: FormGroup;
  searchHotel = new FormControl('');  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {   
   this.myForm = this.fb.group({
      hotelStars: this.fb.array([])
    });
  }

  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;

  @Output('searchHotelByStars') searchByStarsEmitter = new EventEmitter<string[]>();
  @Output('searchHotel') searchEmitter = new EventEmitter<string>();

  onChange(stars: string, isChecked: boolean) {
    const hotelStarsFormArray = <FormArray>this.myForm.controls.hotelStars;    
    const chkAll = document.getElementById('allStars') as HTMLInputElement;
    if(stars=='0' && isChecked){
      this.checkboxes.forEach((element) => {
        element.nativeElement.checked = false;
      });         
      for (let i in this.stars_array) {
        let index = hotelStarsFormArray.controls.findIndex(x => x.value == i)
        hotelStarsFormArray.removeAt(index);        
      };      
    }else{
      if (isChecked) {        
        chkAll.checked = false;
        hotelStarsFormArray.push(new FormControl(stars));
      } else {
        let index = hotelStarsFormArray.controls.findIndex(x => x.value == stars)
        hotelStarsFormArray.removeAt(index);
      } 
    }
    this.searchByStarsEmitter.emit(hotelStarsFormArray.value);
  }
  
  searchHotelByName(){
    this.searchEmitter.emit(this.searchHotel.value);
  }

  counter = Array;  
  numberReturn(length){
    return new Array(length);
  }
  
}
