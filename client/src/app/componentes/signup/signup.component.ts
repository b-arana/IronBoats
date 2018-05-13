import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

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

	constructor(public sessionService: SessionService, public router: Router) { }

	ngOnInit() { }
	
	signup() {
		const user = {
			username: this.username,
			password: this.password,
			isOwner: this.isOwner

		};
		console.log(user);
		this.sessionService.signup(user).subscribe(() => { 
			if(user.isOwner) {
				this.router.navigate(['/user']);
			}else{
				this.router.navigate(['/home']);
			}	
		})	
	}

}


