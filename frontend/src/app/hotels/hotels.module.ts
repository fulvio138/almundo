import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HotelComponent }    from './hotel/hotel.component';
import { HotelDetailComponent }  from './hotel-detail/hotel-detail.component';
import { HotelSearchComponent } from '../hotel-search/hotel-search.component';

import { FilterPipe } from '../pipes/filter.pipe';
import { FilterStarsPipe } from '../pipes/filter-stars.pipe';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelListComponent } from './hotel-list/hotel-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HotelsRoutingModule,
    NgbModule
  ],
  declarations: [
    HotelComponent,
    HotelDetailComponent,
    HotelSearchComponent,
    HotelListComponent,
    FilterPipe,
    FilterStarsPipe,
    
  ]
})
export class HotelsModule {}