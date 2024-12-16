import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../Model/Admin.model';
import { Observable } from 'rxjs';
import { Client } from '../Model/Client.model';
import { Offre } from '../Model/Offre.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Contact } from '../Model/Contact.model';
import { Reservation } from '../Model/Reservation.model';

const httpOptions={
  headers:new HttpHeaders({'Content-Type' :'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  onDeleteOffre(id: number) {
    throw new Error('Method not implemented.');
  }
  getOffre() {
    throw new Error('Method not implemented.');
  }
  helper=new JwtHelperService();
  apiUrl="http://localhost:8081/api"
  loginUserUrl="http://localhost:8081/api/admin/login"

  constructor(private http:HttpClient) { }
  addadmin(admin:Admin){ // envoie une requête HTTP POST vers une URL qui se trouve à l'adresse this.apiUrl+"/admin"
    return this.http.post<any>(this.apiUrl+"/admin", admin,httpOptions);
  }
  onDeleteadmin(id : number){
    const url =`${this.apiUrl+"/admin"}/${id}` 
    return this.http.delete(url , httpOptions)
  }
  getadmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl + "/admin");
  }
  updateAdmin(id:number,admin: Admin) {
    const url = `${this.apiUrl+"/admin"}/${id}`
    return this.http.put<any>(url, admin);
  }
  findAdminById(id : number): Observable<Admin> {
    const url = `${this.apiUrl + "/admin"}/${id}`;
    return this.http.get<Admin>(url,httpOptions)
  }
  onDeleteclient(id : number){
    const url =`${this.apiUrl+"/client"}/${id}` 
    return this.http.delete(url , httpOptions)
  }
  getclient(): Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl + "/client");
  }
  loginAdmin(admin:Admin){
    return this.http.post<any>(this.loginUserUrl, admin);
  }
  isLoggedIn(){
    

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  addoffre(offre:Offre){ // envoie une requête HTTP POST vers une URL qui se trouve à l'adresse this.apiUrl+"/offre"
    return this.http.post<any>(this.apiUrl+"/offre", offre,httpOptions);
  }
  updateOffre(id:number,offre: Offre) {
    const url = `${this.apiUrl+"/offre"}/${id}`
    return this.http.put<any>(url, offre);
  }
  findOffreById(id : number): Observable<Offre> {
    const url = `${this.apiUrl + "/offre"}/${id}`;
    return this.http.get<Offre>(url,httpOptions)
  }
  getoffre(): Observable<Offre[]>{
    return this.http.get<Offre[]>(this.apiUrl + "/offre");
  }
  onDeleteoffre(id : number){
    const url =`${this.apiUrl+"/offre"}/${id}` 
    return this.http.delete(url , httpOptions)
  }
  userDetails(){
    let token:any=localStorage.getItem('myToken');
    let decodeToken= this.helper.decodeToken(token);
     return decodeToken.data;
   }
   onDeletecontact(id : number){
    const url =`${this.apiUrl+"/contact"}/${id}` 
    return this.http.delete(url , httpOptions)
  }
  getcontact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.apiUrl + "/contact");
  }
  getreservation(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.apiUrl + "/reservation");
  }


   
}
