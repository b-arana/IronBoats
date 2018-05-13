import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Boats } from '../../interfaces/Boats';
import { BoatsService } from '../../services/boats.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-register-boat',
  templateUrl: './register-boat.component.html',
  styleUrls: ['./register-boat.component.css']
})
export class RegisterBoatComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `${environment.BASEURL}/api/boat/new`,
    method: 'POST'
  });
  name: any;
  type: any;
  year: any;
  capacity: any;
  imgBoat: any;
 
  boats: Array<any> = [];

  constructor(private registerBoat: BoatsService ) { }
  ngOnInit() {
  }

  getNewBoat() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.name);
      form.append('type', this.type);
      form.append('year', this.year);
      form.append('capacity', this.capacity);
    };

    this.uploader.uploadAll();

    this.uploader.onSuccessItem = (item, response) => {
      console.log("redirect a la pagina");
    };
  };



};
