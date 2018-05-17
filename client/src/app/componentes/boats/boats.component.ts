import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { BoatsService } from '../../services/boats.service';
import {Boats} from '../../interfaces/Boats';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User} from '../../interfaces/User';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {
 

  boats: Array <any> = [];
  @Input() numBoats; 

  constructor(
    private boatService: BoatsService,
    public router: Router,
    private location: Location,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.boatService.showBoats().subscribe(boats => {
      if(this.numBoats){
        this.boats = _.take(boats,this.numBoats);
      }else{
        this.boats = boats;
      }
    
    });
  }

  

}

