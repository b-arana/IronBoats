import { Component, OnInit } from '@angular/core';
import { Boats } from '../../interfaces/Boats';
import { BoatsService } from '../../services/boats.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SessionService } from '../../services/session.service';
import { google } from '@agm/core/services/google-maps-types';
import { User} from '../../interfaces/User';

@Component({
	selector: 'app-detailBoat',
	templateUrl: './detailBoat.component.html',
	styleUrls: [ './detailBoat.component.css' ]
})
export class DetailBoatComponent implements OnInit {
	boat: String;
	place: String;
	user: String;
	lat: Number = 40.4167;
	lng: Number = -3.70325;
	zoom: Number = 8;
	boats: Array<any> = [];
	markers: Array<any> = [];
	geocoder: any;
	latitude: any;
	longitude: any;

	constructor(
		private detailBoats: BoatsService,
		public router: Router,
		private location: Location,
		private route: ActivatedRoute,
		private session: SessionService
	) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.detailBoats.getDetailsBoat(params.id).subscribe((boat) => {
				this.boat = boat;
			});
		});
	}

	// getLocation = function(place) {
	// 	this.geocoder = new google.maps.Geocoder();
	// 	this.geocoder.geocode({ place: place}, function(results, status) {
	// 		if (status == google.maps.GeocoderStatus.OK) {
	// 			this.latitude = results[0].geometry.location.lat();
	// 			this.longitude = results[0].geometry.location.lng();
	// 			console.log(this.latitude, this.longitude);
	// 		}
	// 	});
	// };

	cancel() {
		this.location.back();
	}
}
