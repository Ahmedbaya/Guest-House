import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Contact } from '../Model/Contact.model';

@Component({
  selector: 'app-listecontact',
  templateUrl: './listecontact.component.html',
  styleUrls: ['./listecontact.component.css']
})
export class ListecontactComponent {
  listecontact : Contact[]
  constructor(private service:CrudService,private router:Router) { }
  //supprimer
  onDeletecontact(contact: Contact){
    if(confirm("Voulez vous supprimer cet contact avec l'ID " + contact.id + " ?")) {
     
      this.service.onDeletecontact(contact.id).subscribe(() => {
        this.router.navigate(['/listcontact']).then(() => {
          window.location.reload()
        })
      })}}
  ngOnInit(): void {
    this.service.getcontact().subscribe(contact => {
      this.listecontact = contact
    })
  }

}
