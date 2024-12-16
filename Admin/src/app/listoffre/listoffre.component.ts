import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Offre } from '../Model/Offre.model';

@Component({
  selector: 'app-listoffre',
  templateUrl: './listoffre.component.html',
  styleUrls: ['./listoffre.component.css']
})
export class ListoffreComponent {
  listoffre : Offre[]
  constructor(private service:CrudService,private router:Router) { }
  //supprimer
  Deleteoffre(offre: Offre){
    if(confirm("Voulez vous supprimer cet offre avec l'ID " + offre.id + " ?")) {
     
      this.service.onDeleteoffre(offre.id).subscribe(() => {
        this.router.navigate(['/listoffre']).then(() => {
          window.location.reload()
        })
      })}}
  ngOnInit(): void {
    this.service.getoffre().subscribe(offre => {
      this.listoffre = offre
    })
  }

}
