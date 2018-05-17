import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SessionService } from '../../services/session.service';
import { BoatsService } from '../../services/boats.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Boats } from '../../interfaces/Boats';
import { User } from '../../interfaces/User';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { Location } from '@angular/common';

@Component({
	selector: 'app-profileOwner',
	templateUrl: './profileOwner.component.html',
	styleUrls: [ './profileOwner.component.css' ]
})

export class ProfileOwnerComponent implements OnInit {
  uploader:any;
	boatID: string;
	name: string;
	type: string;
	year: number;
	capacity: number;
	imgBoat: string;
	place: string;
	description: string;
	size: any = {};
	owner: any;
	price: any;
	eslora;
	width;
	openwork;
  boats: Array<any> = [];
  updates: Boats;
	currentBoat:Boats;

	constructor(
		private sessionService: SessionService,
		private boatService: BoatsService,
		private route: ActivatedRoute,
		public router: Router, 
		private comeBack: Location
	) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
      this.boatID = params.id;
      console.log(params.id);
      this.uploader = new FileUploader({
        url: `${environment.BASEURL}/api/boat/${this.boatID}/edit`,
        method: 'POST'
      });
		
			});
	
    this.boatService.getDetailsBoat(this.boatID).subscribe((boat) => {
      this.currentBoat = boat
		});
	}

	editBoat() {
    console.log(this.currentBoat)
    this.boatService.editBoats(this.boatID,this.currentBoat).subscribe(boat=>{
			this.currentBoat = boat;
			this.router.navigateByUrl('/user');
    })
	}
	cancel() {
		this.comeBack.back();
	}
}
