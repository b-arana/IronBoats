import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-profileOwner',
  templateUrl: './profileOwner.component.html',
  styleUrls: ['./profileOwner.component.css']
})
export class ProfileOwnerComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

}
