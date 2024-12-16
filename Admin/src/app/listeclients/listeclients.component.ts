import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../Model/Client.model';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-listeclients',
  templateUrl: './listeclients.component.html',
  styleUrls: ['./listeclients.component.css']
})
export class ListeclientsComponent {
  listclient : Client[]
  constructor(private service:CrudService,private router:Router) { }
  //supprimer
  Deleteclient(client: Client){
    if(confirm("Voulez vous supprimer cet client avec l'ID " + client.id + " ?")) {
     
      this.service.onDeleteclient(client.id).subscribe(() => {
        this.router.navigate(['/listClient']).then(() => {
          window.location.reload()
        })
      })}}
  ngOnInit(): void {
    this.service.getclient().subscribe(client => {
      this.listclient = client
    })
  }

}
