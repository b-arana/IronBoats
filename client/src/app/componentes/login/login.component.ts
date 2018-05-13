import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  error: string;


  constructor(public sessionService: SessionService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    const user = {
      username: this.username,
      password: this.password
    };
    console.log(this.username, this.password);
    this.sessionService.login(user.username, user.password).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

}
