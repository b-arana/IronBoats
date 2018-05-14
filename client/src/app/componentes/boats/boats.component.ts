import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { BoatsService } from '../../services/boats.service';
import {Boats} from '../../interfaces/Boats';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User} from '../../interfaces/User';
import { ActivatedRoute } from '@angular/router';
// import { google } from '@agm/core/services/google-maps-types';


@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {
  // lat: Number = 40.4167;
  // lng: Number = -3.70325;
  // zoom: Number = 8;

  user: any;
  boat: any;
  boats: Array <any> = [];
  // markers: Array<any> = [];
  // coordinates: Array<any> = [];

 
  place: String;
  lat: Number = 40.4167;
  lng: Number = -3.70325;
  zoom: Number = 8;
  markers: Array<any> = [];
  geocoder: any;
  latitude: any;
  longitude: any;

  constructor(
    private boatService: BoatsService,
    public router: Router,
    private location: Location,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.boatService.showBoats().subscribe(boats => {
      this.boats = boats;
      // console.log(boats[0]);
      // console.log(boats[0].location)
      // console.log(boats.location)

      // boats.forEach((boat, i) =>{
      //   this.markers.push({
      //     lat: boats[i].coordinates[0],
      //     lng: boats[i].coordinates[1]
          
      //   });
      //   console.log(boats[0].coordinates[0])
      //   console.log(this.markers)
    //   });
    });
  }

  

}

