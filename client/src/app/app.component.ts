import { Component} from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  BASE_URL: string = "http://localhost:3000";
  constructor(public sessionService:SessionService){
  }
}
