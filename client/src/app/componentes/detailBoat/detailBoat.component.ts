import { Component, OnInit } from '@angular/core';
import { Boats } from '../../interfaces/Boats';
import { BoatsService } from '../../services/boats.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SessionService } from '../../services/session.service';
import { google } from '@agm/core/services/google-maps-types';
import { User } from '../../interfaces/User';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
	selector: 'app-detailBoat',
	templateUrl: './detailBoat.component.html',
	styleUrls: [ './detailBoat.component.css' ]
})
export class DetailBoatComponent implements OnInit {
	boat: Boats;
	place: String;
	user: String;
	lat: Number;
	lng: Number;
	zoom: Number =10;
	
	boats: Array<any> = [];
	markers: Array<any> = [];
	

	constructor(
		private detailBoats: BoatsService,
		public router: Router,
		private comeBack: Location,
		private route: ActivatedRoute,
		private session: SessionService
	) {
		this.route.params.subscribe((params) => {
			this.detailBoats.getDetailsBoat(params.id).subscribe((boat) => {
				this.boat = boat;
				console.log(this.boat)
				this.markers.push(
					{
						lat: boat.location[0],
						lng: boat.location[1]
					});
			});
		});
	}

	ngOnInit() {
		
	}


	cancel() {
		this.comeBack.back();
	}
}
