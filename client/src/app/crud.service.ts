import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import jwt_decode from 'jwt-decode'
import { Router } from '@angular/router';
import { Client } from './model/Client.model';
import { Contact } from './model/Contact.model';
import { Offre } from './model/Offre.model';

const httpOptions={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class CrudService {
   apiUrl="http://localhost:8081/api"
   loginUserUrl="http://localhost:8081/api/client/login"
   //amin
   private __clientConnect= new Subject<void>();
   isConnected=false;
  //amin
constructor(private http:HttpClient ,private router:Router) { }
addcontact(contact:Contact){ // envoie une requête HTTP POST vers une URL qui se trouve à l'adresse this.apiUrl+"/contact"
  return this.http.post<any>(this.apiUrl+"/contact", contact,httpOptions);
}
addclient(client:Client){ // envoie une requête HTTP POST vers une URL qui se trouve à l'adresse this.apiUrl+"/client"
  return this.http.post<any>(this.apiUrl+"/client", client,httpOptions);
}
getAllReservationbyClientId(){
  return this.http.get<any>( "http://localhost:8081/api/reservation/Get-All-ByIdClient/"+localStorage.getItem("idC") , httpOptions);
}

loginClient(client:Client){
    this.loginClientFromApi(client).subscribe((data)=>{
      console.log(data)
      var decoded:any = jwt_decode(data.token);
 
      console.log(decoded);
      this.loginInClient(decoded.data)
      this.__clientConnect.next()
    })
  }
  get ClientConnect()
  {
    return this.__clientConnect
  }
  loginInClient(data:any){
    localStorage.setItem("idC",data.id)
    this.isConnected=true
    this.router.navigate(['/offre']).then(()=>{
      window.location.reload()
    })
  }
loginClientFromApi(client:Client){
  return this.http.post<any>(this.loginUserUrl, client);
}
//amin
isLoggedIn(){

  let token = localStorage.getItem("idC");

  if (token) {
    return true ;
  } else {
    return false;
  }
}
getOffre(): Observable<Offre[]>{
  return this.http.get<Offre[]>(this.apiUrl + "/offre");
}
onDeleteOffre(id : number){
  const url =`${this.apiUrl+"/offre"}/${id}` 
  return this.http.delete(url , httpOptions)
}
}