import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Boats } from '../../interfaces/Boats';
import { BoatsService } from '../../services/boats.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-register-boat',
	templateUrl: './register-boat.component.html',
	styleUrls: [ './register-boat.component.css' ]
})
export class RegisterBoatComponent implements OnInit {
	uploader: FileUploader = new FileUploader({
		url: `${environment.BASEURL}/api/boat/new`,
		method: 'POST'
	});
	name: any;
	type: any;
	year: any;
	capacity: any;
	imgBoat: any;
	place: any;
	description: any;
	size: any = {}
	owner: any;
	price: any;
	eslora;
	width;
	openwork;
	boats: Array<any> = [];


	constructor(private registerBoat: BoatsService, public router: Router, private location: Location) {}
	ngOnInit() {}

	getNewBoat() {
		
		const eslora = this.eslora;
		const width = this.width;
		const openwork = this.openwork;
		const price = this.price;

		console.log(eslora, width, openwork, price);
		

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
		 	this.router.navigateByUrl('/profile/owner');
		}; 
	}

	cancel() {
		this.location.back();
	}
}
