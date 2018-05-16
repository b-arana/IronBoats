import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	username: String;
	password: String;
	isOwner: Boolean;
	error: string;

	constructor(public sessionService: SessionService, public router: Router, private location: Location) { }

	ngOnInit() { }

	signup() {
		const user = {
			username: this.username,
			password: this.password,
			isOwner: this.isOwner

		};
		console.log(user);
		this.sessionService
			.signup(user)
			.subscribe(() => this.router.navigate(['/home']));
	}
	toogleOwner() {
		if (this.isOwner) {
			this.isOwner = false;
		} else {
			this.isOwner = true;
		}

	}
	cancel() {
		this.location.back();
	}


}








