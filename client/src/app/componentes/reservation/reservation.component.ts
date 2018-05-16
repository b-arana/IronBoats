import { Component, OnInit } from '@angular/core';
import { Reservation} from '../../interfaces/Reservation';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  
  constructor(public router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}


