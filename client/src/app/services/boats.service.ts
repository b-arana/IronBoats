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
		return this.http.get(`${environment.BASEURL}/api/boat/show`).map((res) => res.json());
	}

	addBoats(info) {
		console.log(info);
		return this.http.post(`${environment.BASEURL}/api/boat/new`, info, { withCredentials: true }).map((res) => {
			return res.json();
		});
	}
}
