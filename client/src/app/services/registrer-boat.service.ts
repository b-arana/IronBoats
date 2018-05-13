import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Reservation } from '../interfaces/Reservation';

@Injectable()
export class RegistrerBoatService {
	// tslint:disable-next-line:no-trailing-whitespace

	constructor(private http: Http) {}

	getFormRegister() {
		return this.http.get(`${environment}/api/reservation/:boat`).map((res) => res.json());
	}
	getShowReservas() {}
}
