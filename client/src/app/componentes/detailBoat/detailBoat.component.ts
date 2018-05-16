import { Component, OnInit } from '@angular/core';
import { Boats } from '../../interfaces/Boats';
import { BoatsService } from '../../services/boats.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SessionService } from '../../services/session.service';
import { google } from '@agm/core/services/google-maps-types';
import { User } from '../../interfaces/User';
import { ObjectUnsubscribedError } from 'rxjs';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../interfaces/Reservation';
import * as moment from 'moment';

@Component({
	selector: 'app-detailBoat',
	templateUrl: './detailBoat.component.html',
	styleUrls: [ './detailBoat.component.css' ]
})
export class DetailBoatComponent implements OnInit {
	boat: Boats;
	place: String;
	user: String;
	lat: Number = 40.2322103;
	lng: Number = 2.787272;
	zoom: Number = 4;
	reserva: String;
	initialDay: Date;
	endDay: Date;
	boats: Array<any> = [];
	markers: Array<any> = [];
	totalPrice: Number;
	price: Number;
	days: number;
	noVisible: boolean;
	boatID:String;

	constructor(
		private detailBoats: BoatsService,
		public router: Router,
		private comeBack: Location,
		private route: ActivatedRoute,
		private session: SessionService,
		private reservation: ReservationService
	) {
		this.route.params.subscribe((params) => {
			this.boatID = params.id;
			this.detailBoats.getDetailsBoat(params.id).subscribe((boat) => {
				this.boat = boat;
				this.markers.push({
					lat: boat.location[0],
					lng: boat.location[1]
				});
			});
		});
	}

	ngOnInit() {

	}

	getDays() {
		let dayOne = moment(this.initialDay);
		let dayTwo = moment(this.endDay);
		this.days = dayTwo.diff(dayOne, 'days');		
	}

	submitReservation(boatPrice) {

		let initialDay = moment(this.initialDay);
		let endDay = moment(this.endDay);
		let totalPrice = this.days * boatPrice;
		
		
		let bookData = {
			boatID:this.boatID,
			endDay,
			initialDay,
			totalPrice,
		}
		console.log(bookData)

		this.reservation.addReservation(bookData).subscribe((reserva) => {
			this.reserva = reserva;
			this.router.navigate(['/confirm']);
			console.log(reserva)
		})
	 
	}


	cancel() {
		this.comeBack.back();
	}
}


