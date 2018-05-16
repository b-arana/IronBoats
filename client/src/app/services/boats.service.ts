import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Boats } from '../interfaces/Boats';

@Injectable()
export class BoatsService {
	constructor(private http: Http) {}

	showBoats() {
		// tslint:disable-next-line:indent
		return this.http.get(`${environment.BASEURL}/api/boat/show`).map((res) => res.json());
	}

	addBoats(info) {
		console.log(info);
		// tslint:disable-next-line:indent
		return this.http.post(`${environment.BASEURL}/api/boat/new`, info, { withCredentials: true }).map((res) => {
			return res.json();
		});
	}
	getDetailsBoat(id) {
		return this.http.get(`${environment.BASEURL}/api/boat/show/${id}`, { withCredentials: true }).map((res) => {
			return res.json();
		});
	}
	editBoats(id, updates){
		return this.http.post(`${environment.BASEURL}/api/boat/${id}/edit`, updates, { withCredentials: true }).map((res)=>{
			return res.json();
		})
	}
	
}
