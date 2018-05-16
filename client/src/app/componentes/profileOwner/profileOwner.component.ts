import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SessionService } from '../../services/session.service';
import { BoatsService } from '../../services/boats.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Boats } from '../../interfaces/Boats';
import { User } from '../../interfaces/User';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';


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
		public router: Router
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
      //para la template
			/* this.name = boat.name;
			this.type = boat.type;
			this.year = boat.year;
			this.price = boat.price;
			this.place = boat.place;
			this.capacity = boat.capacity;
      this.description = boat.description; */
      this.currentBoat = boat

      //para el servicio
      /* this.updates.name = boat.name;
      this.updates.type = boat.type;
      this.updates.year = boat.year;
      this.updates.price = boat.price;
      this.updates.place = boat.place;
      this.updates.capacity = boat.capacity;
      this.updates.description = boat.description;
      this.updates.imgBoat = boat.imgBoat;
      this.boatID = boat._id; */
		});
	}

	editBoat() {
    console.log(this.currentBoat)
    this.boatService.editBoats(this.boatID,this.currentBoat).subscribe(boat=>{
      this.currentBoat = boat
    })
		/* this.boatID = boatID;
		this.uploader.onBuildItemForm = (item, form) => {
			form.append('name', this.name);
			form.append('type', this.type);
			form.append('year', this.year);
			form.append('capacity', this.capacity);
			form.append('place', this.place);
			form.append('size', this.size);
			form.append('eslora', this.eslora);
			form.append('width', this.width);
			form.append('openwork', this.openwork);
			form.append('description', this.description);
      form.append('price', this.price);
		};

		this.uploader.uploadAll();

		this.uploader.onSuccessItem = (item, response) => {
      console.log(response)
    }; */
	}
}
