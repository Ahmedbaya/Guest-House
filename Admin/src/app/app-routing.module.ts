import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadminComponent } from './listadmin/listadmin.component';
import { AjouteradminComponent } from './ajouteradmin/ajouteradmin.component';
import { LoginComponent } from './login/login.component';
import { AjouteroffreComponent } from './ajouteroffre/ajouteroffre.component';
import { OffreComponent } from './offre/offre.component';
import { ListoffreComponent } from './listoffre/listoffre.component';
import { ListeclientsComponent } from './listeclients/listeclients.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListecontactComponent } from './listecontact/listecontact.component';
import { AuthGuard } from './service/authGuard.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'ajouteradmin',component:AjouteradminComponent,canActivate:[AuthGuard]},
  {path:'modifieradmin/:id',component:AdminComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent,canActivate:[AuthGuard]},
 ,{path:'ListAdmin',component:ListadminComponent,canActivate:[AuthGuard]},
 {path:'offre',component:OffreComponent,canActivate:[AuthGuard]},
 {path:'ListeClients',component:ListeclientsComponent,canActivate:[AuthGuard]}
 ,{path:'',component:LoginComponent},
 {path:'AjouterOffre',component:AjouteroffreComponent,canActivate:[AuthGuard]},
 {path:'modiferoffre/:id',component:OffreComponent,canActivate:[AuthGuard]},
 {path:'listoffre',component:ListoffreComponent,canActivate:[AuthGuard]},
 {path:'reservation',component:ReservationComponent,canActivate:[AuthGuard]},
 {path:'listcontact',component:ListecontactComponent ,canActivate:[AuthGuard]},
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]   
})
export class AppRoutingModule { }
