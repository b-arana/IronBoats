import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import {Reservation} from '../interfaces/Reservation';
import {Boats} from '../interfaces/Boats';

@Injectable()
export class ReservationService {

	constructor(private http: Http) { }

	addReservation(bookData){
		return this.http.post(`${environment.BASEURL}/api/reservation/${bookData.boatID}`, bookData, { withCredentials: true })
		.map((res) => { return res.json()});
		
	}

}




