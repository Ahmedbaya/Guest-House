import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouteradminComponent } from './ajouteradmin/ajouteradmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { ListadminComponent } from './listadmin/listadmin.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AjouteroffreComponent } from './ajouteroffre/ajouteroffre.component';
import { LoginComponent } from './login/login.component';
import { OffreComponent } from './offre/offre.component';
import { ListoffreComponent } from './listoffre/listoffre.component';
import { ListeclientsComponent } from './listeclients/listeclients.component';
import { ListecontactComponent } from './listecontact/listecontact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AjouteradminComponent,
    ListadminComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    AjouteroffreComponent,
    LoginComponent,
    OffreComponent,
    ListoffreComponent,
    ListeclientsComponent,
    ListecontactComponent,
    ReservationComponent,
    HomeComponent,
    RegisterComponent,
    AdminComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
