import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelComponent }    from './hotel/hotel.component';
import { HotelDetailComponent }  from './hotel-detail/hotel-detail.component';

const hotelsRoutes: Routes = [
  { path: 'hotels',  component: HotelComponent },
  { path: 'hotel/:id', component: HotelDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(hotelsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HotelsRoutingModule { }