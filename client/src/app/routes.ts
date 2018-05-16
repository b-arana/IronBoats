import {Routes} from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {ReservationComponent } from './componentes/reservation/reservation.component';
import { BoatsComponent } from './componentes/boats/boats.component';
import { RegisterBoatComponent } from './componentes/register-boat/register-boat.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { LoginComponent } from './componentes/login/login.component';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfileOwnerComponent } from './componentes/profileOwner/profileOwner.component';
import { ProfileUserComponent } from './componentes/profileUser/profileUser.component';
import { DetailBoatComponent } from './componentes/detailBoat/detailBoat.component';


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent },
  {path: 'confirm', component: ReservationComponent},
  {path: 'boats', component: BoatsComponent},
  {path: 'user/register', component: RegisterBoatComponent},
  {path: 'user', component: ProfileUserComponent},
  {path: 'profile/owner/:id', component: ProfileOwnerComponent},
  {path: 'home/boat/:id', component: DetailBoatComponent},
  {path: '**', redirectTo: '', pathMatch: 'full' },
  
];

export default routes;

