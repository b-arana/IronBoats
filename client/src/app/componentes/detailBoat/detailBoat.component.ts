import { Component, OnInit } from '@angular/core';
import { Boats } from '../../interfaces/Boats';
import { BoatsService } from '../../services/boats.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SessionService } from '../../services/session.service';

@Component({
	selector: 'app-detailBoat',
	templateUrl: './detailBoat.component.html',
	styleUrls: [ './detailBoat.component.css' ]
})
export class DetailBoatComponent implements OnInit {
  boat: any;
  user: any;
  boats:Array<String> = []

  constructor(
    private detailBoats: BoatsService,
    public router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private session: SessionService
  ) {}

  ngOnInit() {
    
   
  
  }

  getDetailsBoat() {
    this.route.params.subscribe(params => {
      this.detailBoats.getDetailsBoat(params.id).subscribe(boat => {
        this.boat = boat;
      });
    })
    
  }

  cancel() {
    this.location.back();
  }
}
