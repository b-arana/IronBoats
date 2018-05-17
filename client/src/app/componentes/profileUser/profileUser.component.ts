import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { BoundElementPropertyAst } from '@angular/compiler';
import { Boats} from '../../interfaces/Boats';
import { BoatsService } from '../../services/boats.service';
import _ from 'lodash';

@Component({
  selector: 'app-profileUser',
  templateUrl: './profileUser.component.html',
  styleUrls: ['./profileUser.component.css']
})
export class ProfileUserComponent implements OnInit {

  boats: Array<any> = [];
  user: any;
  @Input() ownerID;

  constructor(private sessionService: SessionService, private boatService: BoatsService) { }

  ngOnInit() {
    this.boatService.showBoats().subscribe(boats => {

      this.boats.filter(e => {
        console.log(this.ownerID);
        return e.owner == this.ownerID;
      })

    });
  
  }
}
