import { Component, OnInit } from "@angular/core";
import { FileUploader } from "ng2-file-upload";
import { SessionService } from "../services/session.service";


@Component({
  selector: "app-upload-profile",
  templateUrl: "./upload-profile.component.html",
  styleUrls: ["./upload-profile.component.css"]
})
export class UploadProfileComponent implements OnInit {
  uploader: FileUploader;
  BASE_URL: string = "http://localhost:3000";

  constructor(public sessionService: SessionService) {
    this.uploader = new FileUploader({
      url: `${this.BASE_URL}/profile/${sessionService.user._id}`
    });
  }

  ngOnInit() {}

  subirFichero() {
    // this.uploader.onBuildItemForm = (item, form) => {
    //   form.append('name', this.newPhone.name);
    //   form.append('brand', this.newPhone.brand);
    //   form.append('specs', JSON.stringify(this.newPhone.specs));
    // };

    this.uploader.uploadAll();
    this.uploader.onCompleteAll = () => {
      this.sessionService.isLoggedIn().subscribe();
    }
  }
}
