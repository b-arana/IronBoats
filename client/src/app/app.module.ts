import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './componentes/app.component';
import { SessionService } from './services/session.service';
import { LoginFormComponent } from './componentes/login-form/login-form.component';
import { HomeComponent } from './componentes/home/home.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { ReservationComponent } from './componentes/reservation/reservation.component';
import { RegistrerBoatService } from './services/registrer-boat.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { BoatsComponent } from './componentes/boats/boats.component';
import { BoatsService } from './services/boats.service';
import { RegisterBoatComponent } from './componentes/register-boat/register-boat.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProfileOwnerComponent } from './componentes/profileOwner/profileOwner.component';
import { ProfileUserComponent } from './componentes/profileUser/profileUser.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { DetailBoatComponent } from './componentes/detailBoat/detailBoat.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    SignupComponent,
    ReservationComponent,
    BoatsComponent,
    RegisterBoatComponent,
    LoginComponent,
    ProfileOwnerComponent,
    ProfileUserComponent,
    FileSelectDirective,
    DetailBoatComponent
    
   
    
    
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: environment.APIKEY
    })
  ],
  providers: [SessionService, RegistrerBoatService, BoatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
