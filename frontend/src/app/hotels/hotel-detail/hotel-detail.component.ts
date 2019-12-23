import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {

  hotel$: Observable<Hotel>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HotelService
  ) { }

  ngOnInit() {
    this.hotel$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.service.getHotel(params.get('id')))
    );
  }

}
