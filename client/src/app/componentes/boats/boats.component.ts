import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { BoatsService } from '../../services/boats.service';
import {Boats} from '../../interfaces/Boats';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {

  boats: Array <any> = [];

  constructor(private boatService: BoatsService) { }

  ngOnInit() {
    this.boatService.showBoats().subscribe(boats => {
      this.boats = boats;
    });
  }

}

