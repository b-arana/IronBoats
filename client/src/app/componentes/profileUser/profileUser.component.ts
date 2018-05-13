import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { BoundElementPropertyAst } from '@angular/compiler';

@Component({
  selector: 'app-profileUser',
  templateUrl: './profileUser.component.html',
  styleUrls: ['./profileUser.component.css']
})
export class ProfileUserComponent implements OnInit {

  user: any;
  isOwner: Boolean;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  
 

}
